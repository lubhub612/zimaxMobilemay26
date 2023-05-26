import axios from "axios";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "../AuthContext";
import { useContract } from "../ContractContext";
import { useGlobal } from "../GlobalContext";
import { useCustomWallet } from "../WalletContext";

export const NFTContext = createContext()

export const NFTProvider = (props) => {

    const { contract, tokenId } = props;

    const { auth } = useAuth();

    const [itemLoaded, setItemLoaded] = useState({});
    const [favorite, setFavorite] = useState({
        count: 0,
        set: false
    });

    const [reloadCounter, setReloadCounter] = useState(0)

    const [balance, setBalance] = useState(NaN);
    const [saleCount, setSaleCount] = useState(NaN);

    const [nftSale, setNFTSale] = useState({
        allSales: [],
        fixedSales: [],
        auctionSales: []
    });

    const [creatorInfo, setCreatorInfo] = useState('Anonymous');

    const [comments, setComments] = useState([]);
    const { invokeServer } = useGlobal();
    const { wallet, getWalletAddressBySessionKey } = useCustomWallet();

    const reloadSaleInfoToTrade = useCallback(() => {
        setReloadCounter(t => { return t + 1 });
    }, [reloadCounter])

    const reloadSaleInfoToSell = (contract, tokenId) => {
        invokeServer('get', '/api/sale?collectionAddress=' + contract + '&tokenId=' + tokenId)
            .then(res => {
                if (res.data.result === 1) {
                    setNFTSale(t => { return { ...t, allSales: res.data.sales, fixedSales: res.data.fixed, auctionSales: res.data.auction } });
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
        reloadSaleInfoToSell(contract, tokenId);

        return () => {
            ac.abort();
        }
    }, [auth.isLoggedIn, wallet.chain, reloadCounter])

    const requestReloadNFT = (contract, tokenId) => {
        invokeServer('post', '/api/nft/reload', {
            collectionAddress: contract,
            tokenId: tokenId
        })
            .then(res => {
                reloadSaleInfoToTrade();
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        let ac = new AbortController();
        if (itemLoaded?.collectionAddress !== undefined) {
            invokeServer('get', `/api/nft/owner?collectionAddress=${itemLoaded.collectionAddress.toLowerCase()}&tokenId=${itemLoaded.tokenId}`)
                .then(res => {
                    if (ac.signal.aborted === false) {
                        if (res.data.result === 1) {
                            let j;
                            let rr = res.data.items;
                            let filtered = rr.filter(r => r.owner.toLowerCase() === wallet.address.toLowerCase());
                            if (filtered.length > 0) setBalance(filtered[0].balance);
                            else setBalance(0);
                        }
                    }
                })
                .catch(err => {
                    console.log(`${err.message}`);
                })
        }

        return () => ac.abort();
    }, [wallet.address, itemLoaded.collectionAddress, itemLoaded.tokenId, reloadCounter]);

    useEffect(() => {
        if (wallet.address === '' || itemLoaded.collectionAddress === undefined || itemLoaded.tokenId === undefined) return;

        let ac = new AbortController();
        invokeServer('post', '/api/sale/count', {
            collectionAddress: itemLoaded.collectionAddress,
            tokenId: itemLoaded.tokenId,
            seller: wallet.address
        })
            .then(res => {
                if (ac.signal.aborted === false) {
                    if (res.data.result === 1) {
                        setSaleCount(t => res.data.saleCount);
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
        return () => ac.abort();
    }, [wallet.address, itemLoaded.collectionAddress, itemLoaded.tokenId, reloadCounter]);

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
        <NFTContext.Provider value={{ itemLoaded, requestReloadNFT, favorite, comments, balance, saleCount, creatorInfo, nftSale }}>
            {props.children}
        </NFTContext.Provider>
    )
}

/**
 * Hook to get and update configs state
 */
export const useNFTItem = () => {
    const dataManager = useContext(NFTContext)
    return dataManager || [{}, async () => { }]
}
