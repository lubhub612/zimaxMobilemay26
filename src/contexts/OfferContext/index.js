import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "../AuthContext";
import { useContract } from "../ContractContext";
import { useGlobal } from "../GlobalContext";
import { useCustomWallet } from "../WalletContext";

export const OfferContext = createContext()

export const OfferProvider = (props) => {

    const { contract, tokenId } = props;
    const { auth } = useAuth();

    const [itemLoaded, setItemLoaded] = useState({});
    const [favorite, setFavorite] = useState({
        count: 0,
        set: false
    });

    const [reloadCounter, setReloadCounter] = useState(0)

    const [unlistedInfo, setUnlistedInfo] = useState(NaN);

    const [creatorInfo, setCreatorInfo] = useState('Anonymous');

    const [comments, setComments] = useState([]);
    const { invokeServer } = useGlobal();
    const { wallet, getWalletAddressBySessionKey } = useCustomWallet();

    const [nftSalesOnPurchase, setNftSalesOnPurchase] = useState()

    const reloadSaleInfoToOffer = useCallback(() => {
        setReloadCounter(t => {return t + 1});
    }, [reloadCounter])

    const reloadUnlistedInfo = (contract, tokenId) => {
        invokeServer('get', '/api/sale?unlisted=&collectionAddress=' + contract + '&tokenId=' + tokenId)
            .then(res => {
                if (res.data.result === 1) {
                    setUnlistedInfo(t => res.data.sales);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const reloadNFT = (contract, tokenId) => {
        invokeServer('get', '/api/nft/' + contract + '/' + tokenId)
            .then(res => {
                // console.log(res.data);

                if (res.data.msg === 'found') {
                    setItemLoaded(res.data.item);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const reloadFavorite = useCallback((contract, tokenId) => {
        invokeServer('get', '/api/favorite/?collectionAddress=' + contract + "&tokenId=" + tokenId + "&account=" + getWalletAddressBySessionKey())
            .then(res => {
                if (res.data.msg === 'no favorites') {
                    setFavorite(t => { return { count: 0, set: false } });
                } else {
                    setFavorite(t => { return { count: res.data.count, set: res.data.set } })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [getWalletAddressBySessionKey])

    const reloadComments = (contract, tokenId) => {
        invokeServer('get', '/api/comment/?collectionAddress=' + contract + "&tokenId=" + tokenId)
            .then(res => {
                if (res.data.msg === 'no comments') {
                    setComments(t => []);
                } else if (res.data.msg === 'found comments') {
                    setComments(t => res.data.res);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        let ac = new AbortController();

        reloadNFT(contract, tokenId);
        reloadFavorite(contract, tokenId);
        reloadComments(contract, tokenId);
        reloadUnlistedInfo(contract, tokenId);

        return () => {
            ac.abort();
        }
    }, [auth.isLoggedIn, wallet.chain, reloadCounter])

    useEffect(() => {
        let ac = new AbortController();
        invokeServer('get', '/api/sale?collectionAddress=' + contract + '&tokenId=' + tokenId)
            .then(res => {
                if (ac.signal.aborted === false) {
                    if (res.data.result === 1) {
                        setNftSalesOnPurchase(t => { return { ...t, 
                                                            allSales: res.data.sales, 
                                                            fixedSales: res.data.fixed, 
                                                            auctionSales: res.data.auction } });
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
        return () => ac.abort();
    }, [reloadCounter])

    const requestReloadNFT = (contract, tokenId) => {
        invokeServer('post', '/api/nft/reload', {
            collectionAddress: contract,
            tokenId: tokenId
        })
            .then(res => {
                reloadSaleInfoToOffer();
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (itemLoaded?.creator === undefined)
            return;

        invokeServer('get', '/api/user?address=' + itemLoaded?.creator)
            .then(res => {
                setCreatorInfo(t => { return res.data?.user });
            })
            .catch(err => {
                console.log(err);
            })
    }, [itemLoaded, reloadCounter])

    return (
        <OfferContext.Provider value={{ itemLoaded, favorite, comments, creatorInfo, unlistedInfo, reloadSaleInfoToOffer, nftSalesOnPurchase }}>
            {props.children}
        </OfferContext.Provider>
    )
}

/**
 * Hook to get and update configs state
 */
export const useOfferInfo = () => {
    const dataManager = useContext(OfferContext)
    return dataManager || [{}, async () => { }]
}
