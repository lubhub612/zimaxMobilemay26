import axios from "axios";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "../AuthContext";
import { useContract } from "../ContractContext";
import { useGlobal } from "../GlobalContext";
import { useCustomWallet } from "../WalletContext";

export const SaleContext = createContext()

export const SaleProvider = (props) => {

    const { contract, tokenId, saleId } = props;

    const { auth } = useAuth();
    const { invokeServer } = useGlobal();

    const { getWalletAddressBySessionKey } = useCustomWallet();
    const [saleInfo, setSaleInfo] = useState();
    const [nftItem, setNFTItem] = useState();
    const [myFavorite, setMyFavorite] = useState();
    const [creatorInfo, setCreatorInfo] = useState();
    const [sellerBalance, setSellerBalance] = useState(0);
    const [nftSalesOnPurchase, setnftSalesOnPurchase] = useState({
        allSales: [],
        fixedSales: [],
        auctionSales: [],
        bids: []
    });
    const [commentsOnPurchase, setCommentsOnPurchase] = useState([]);
    const [reloadCounter, setReloadCounter] = useState(0)

    const reloadSaleInfoToTrade = useCallback(() => {
        setReloadCounter(t => { return t + 1 });
    }, [reloadCounter])

    useEffect(() => {
        let ac = new AbortController();
        invokeServer('get', '/api/sale?collectionAddress=' + contract + '&tokenId=' + tokenId)
            .then(res => {
                if (ac.signal.aborted === false) {
                    if (res.data.result === 1) {
                        setnftSalesOnPurchase(t => {
                            return {
                                ...t,
                                allSales: res.data.sales.filter(n => n.saleId !== parseInt(saleId)),
                                fixedSales: res.data.fixed.filter(n => n.saleId !== parseInt(saleId)),
                                auctionSales: res.data.auction.filter(n => n.saleId !== parseInt(saleId))
                            }
                        });
                        let ss = res.data.sales.filter(t => t.saleId === parseInt(saleId));
                        if (ss.length > 0) {
                            setSaleInfo(t => ss[0]);
                        }
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })

        invokeServer('get', `/api/bid?saleId=${saleId}`)
            .then(r => {
                if (r.data.result === 1) {
                    if (ac.signal.aborted === false) {
                        r.data.bids.sort((first, second) => {
                            return (new Date(second.when)).getTime() - (new Date(first.when)).getTime()
                        })

                        setnftSalesOnPurchase(t => {
                            return {
                                ...t,
                                bids: r.data.bids
                            }
                        });
                    }
                }
            })
            .catch(err => {
                console.log(err.message);
            })
        return () => ac.abort();
    }, [reloadCounter])

    useEffect(() => {
        let ac = new AbortController();
        if (saleInfo !== undefined) {
            invokeServer('get', '/api/nft/' + contract + '/' + tokenId)
                .then(res => {
                    // console.log(res.data);
                    if (ac.signal.aborted === false) {
                        if (res.data.msg === 'found') {
                            setNFTItem(res.data.item);
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })

            invokeServer('get', '/api/favorite/?collectionAddress=' + contract + "&tokenId=" + tokenId + "&account=" + getWalletAddressBySessionKey())
                .then(res => {
                    if (ac.signal.aborted === false) {
                        if (res.data.msg === 'no favorites') {
                            setMyFavorite(t => { return { count: 0, set: false } });
                        } else {
                            setMyFavorite(t => { return { count: res.data.count, set: res.data.set } })
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            invokeServer('get', '/api/comment/?collectionAddress=' + contract + "&tokenId=" + tokenId)
                .then(res => {
                    if (ac.signal.aborted === false) {
                        if (res.data.msg === 'no comments') {
                            setCommentsOnPurchase(t => []);
                        } else if (res.data.msg === 'found comments') {
                            setCommentsOnPurchase(t => res.data.res);
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        return () => ac.abort();
    }, [saleInfo, reloadCounter])

    useEffect(() => {
        let ac = new AbortController();
        if (nftItem !== undefined) {
            invokeServer('get', '/api/user?address=' + nftItem.creator.toLowerCase())
                .then(res => {
                    if (ac.signal.aborted === false)
                        setCreatorInfo(t => { return res.data?.user });
                })
                .catch(err => {
                    console.log(err);
                })

            invokeServer('get', `/api/nft/owner?collectionAddress=${nftItem.collectionAddress.toLowerCase()}&tokenId=${nftItem.tokenId}`)
                .then(res => {
                    if (ac.signal.aborted === false) {
                        if (res.data.result === 1) {
                            let j;
                            let rr = res.data.items;
                            let filtered = rr.filter(r => r.owner.toLowerCase() === saleInfo.seller.toLowerCase());
                            if (filtered.length > 0) setSellerBalance(filtered[0].balance);
                            else setSellerBalance(0);
                        }
                    }
                })
                .catch(err => {
                    console.log(`${err.message}`);
                })
        }

        return () => ac.abort();
    }, [nftItem])

    return (
        <SaleContext.Provider value={{ saleInfo, nftItem, myFavorite, creatorInfo, sellerBalance, nftSalesOnPurchase, commentsOnPurchase, reloadSaleInfoToTrade }}>
            {props.children}
        </SaleContext.Provider>
    )
}

/**
 * Hook to get and update configs state
 */
export const useSaleItem = () => {
    const dataManager = useContext(SaleContext)
    return dataManager || [{}, async () => { }]
}
