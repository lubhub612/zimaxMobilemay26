import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useCustomWallet } from "../WalletContext";
import { useGlobal } from '../GlobalContext';
import { useAuth } from '../AuthContext';
import useToast from "../../hooks/useToast";
import BigNumber from 'bignumber.js'

export const ContractContext = createContext();

export const ContractProvider = (props) => {

    const { wallet } = useCustomWallet();
    const { invokeServer } = useGlobal();
    const { toastError, toastInfo, toastSuccess } = useToast();
    const { auth } = useAuth();

    const [priceList, setPriceList] = useState([]);
    const [payment, setPayment] = useState([]);
    const [factoryABI, setFactoryABI] = useState(null);
    const [multipleCollectionABI, setMultipleCollectionABI] = useState(null);
    const [erc20ABI, setErc20ABI] = useState(null);
    const [factoryAddress, setFactoryAddress] = useState(null);
    const [tokenAddresses, setTokenAddresses] = useState([]);
    const [BUSDAddress, setBUSDAddress] = useState(null);
    const [HyperXAddress, setHyperXAddress] = useState(null);

    let ac = new AbortController();

    useEffect(() => {
        const loadPrice = () => {
            invokeServer('get', '/api/payment/conversion')
                .then(r => {
                    if (ac.signal.aborted)
                        return;
                    setPriceList(t => r.data.conversion);
                    setTimeout(loadPrice, 3000);
                })
                .catch(err => {
                    console.log('price-conversion:', err.message);
                    if (ac.signal.aborted)
                        return;
                    setTimeout(loadPrice, 3000);
                })
        }

        invokeServer('get', '/api/payment')
            .then(res => {
                // console.log(res.data.payment);
                if (ac.signal.aborted === false) {
                    setPayment(res.data.payment);
                }
            })
            .catch(err => {
                console.log(err);
            })
        invokeServer('get', '/api/contract/abi?name=factory')
            .then(res => {
                if (ac.signal.aborted === false) {
                    setFactoryABI(res.data.abi);
                }
            })
            .catch(err => {
                console.log(err);
            })

        invokeServer('get', '/api/contract/abi?name=multiplecollection')
            .then(res => {
                if (ac.signal.aborted === false) {
                    setMultipleCollectionABI(res.data.abi);
                }
            })
            .catch(err => {
                console.log(err);
            })

        invokeServer('get', '/api/contract/abi?name=erc20')
            .then(res => {
                if (ac.signal.aborted === false) {
                    setErc20ABI(res.data.abi);
                }
            })
            .catch(err => {
                console.log(err);
            })

        invokeServer('get', '/api/contract/address?name=factory')
            .then(res => {
                if (ac.signal.aborted === false) {
                    setFactoryAddress(t => res.data.address);
                }
            })
            .catch(err => {
                console.log(err);
            })

        invokeServer('get', '/api/contract/address?name=token&token=1')
            .then(res => {
                if (ac.signal.aborted === false) {
                    setBUSDAddress(t => res.data.address);
                }
            })
            .catch(err => {
                console.log(err);
            })

        invokeServer('get', '/api/contract/address?name=tokens')
            .then(res => {
                if (ac.signal.aborted === false) {
                    if (res.data.result === 1) {
                        setTokenAddresses(t => res.data.addresses);
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })

        invokeServer('get', '/api/contract/address?name=token&token=2')
            .then(res => {
                if (ac.signal.aborted === false) {
                    setHyperXAddress(res.data.address);
                }
            })
            .catch(err => {
                console.log(err);
            })

        loadPrice();

        return () => ac.abort();
    }, [])

    const convertPrice = useCallback((tokenIndex, tokenAmount) => {
        if (typeof tokenIndex === 'string')
            tokenIndex = parseInt(tokenIndex);

        let paymentItem = payment.find(item => item.id === tokenIndex);
        if (paymentItem === undefined)
            return null;

        let priceItem = priceList.find(item => item.id === tokenIndex);
        if (priceItem === undefined)
            return null;

        return BigNumber(tokenAmount).times(BigNumber(priceItem.ratio)).dp(3).toString();
    }, [payment, priceList])

    const createNewCollection = async (t) => {
        // {banner: photoHash, logo: logoHash, name: name, description: description}
        let tx;
        try {
            // console.log(HYPERXNFT_FACTORY_ADDRESS);
            if (factoryABI === null || factoryAddress === null)
                return tx;

            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);
            console.log("creating a new collection...");
            await contract.methods
                .createNewCollection(1, t.name, t.name.slice(0, 3).toUpperCase(), '')
                .send({ from: wallet.address })
                .on("receipt", (receipt) => {
                    // console.log(receipt);
                    tx = receipt;
                    toastSuccess("Success", "collection created");
                    return;
                })
                .on('confirmation', (confirmationNumber, receipt) => {
                })
                .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });
        } catch (err) {
            console.log(err);
            toastError('Fail', err.message);
        }

        return tx;
    }

    const createNFT = async (t) => {
        let tx;
        try {
            let contract = new window.web3.eth.Contract(multipleCollectionABI, t.contractAddress);
            console.log('creating an NFT...');
            await contract.methods.create(wallet.address, window.web3.utils.toBN(t.supply), t.uri, '0x0')
                .send({ from: wallet.address })
                .on('receipt', (receipt) => {
                    tx = receipt;
                    toastSuccess("Success", "nft created");
                    return;
                })
                .on('confirmation', (confirmationNumber, receipt) => {
                })
                .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });
        } catch (err) {
            console.log(err);
            toastError('Fail', err.message);
        }
        return tx;
    }

    const getNFTCount = useCallback(async (t) => {
        let tx;
        if (t.account === undefined || t.account === '' || t.collectionAddress === undefined || t.colllectionAddress === '' || t.tokenId === undefined || multipleCollectionABI === null)
            return null;

        try {
            let contract = new window.web3.eth.Contract(multipleCollectionABI, t.collectionAddress);
            tx = await contract.methods.balanceOf(t.account, window.web3.utils.toBN(t.tokenId)).call({ from: t.caller });
        } catch (err) {
            console.log(err);
        }
        return parseInt(tx);
    }, [multipleCollectionABI])

    const getReservedTokenId = async (t) => {
        try {
            let contract = new window.web3.eth.Contract(multipleCollectionABI, t.contractAddress);

            let val = await contract.methods.getReservedTokenId().call({ from: wallet.address });
            return parseInt(val.toString());
        } catch (err) {
            console.log(err);
        }
        return 0;
    }

    const getDefaultFee = useCallback(async () => {
        if (factoryABI === null || factoryAddress === null) {
            return {};
        }

        let defFee, defRoyalty;
        try {
            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);

            let v1 = await contract.methods.defaultFeeRatio().call({ from: wallet.address });
            let v2 = await contract.methods.defaultRoyaltyRatio().call({ from: wallet.address });

            defFee = parseInt(v1) / 100;
            defRoyalty = parseInt(v2) / 100;
        } catch (err) {
            console.log(err);
        }

        return { fee: defFee, royalty: defRoyalty };
    }, [factoryABI, factoryAddress, wallet.address])

    const createSale = useCallback(async (info) => {
        let tx;
        try {
            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);

            await contract.methods.createSale(info.collectionAddress, window.web3.utils.toBN(info.tokenId), 
                window.web3.utils.toBN(info.payment), window.web3.utils.toBN(info.copy),
                window.web3.utils.toBN(info.method), window.web3.utils.toBN(info.duration), window.web3.utils.toBN(info.basePrice), 
                window.web3.utils.toBN(Math.floor(info.fee)), window.web3.utils.toBN(Math.floor(info.royalty)))
                .send({ from: wallet.address })
                .on('receipt', (receipt) => {
                    tx = receipt;
                    toastSuccess(info.saleName, "successfully created");
                    return;
                })
                .on('confirmation', (confirmationNumber, receipt) => {
                })
                .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });
        } catch (err) {
            console.log(err);
            toastError(info.saleName, err.message);
        }
        return tx;
    }, [factoryABI, factoryAddress, auth.loggedUserName, wallet.address, toastInfo, toastSuccess, toastError])

    const buySale = useCallback(async (info) => {
        let tx;
        try {
            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);

            if (info.payment === 0) {
                // pay by BNB (native currency)
                let py = payment.find(t => t.id === info.payment);
                if (py === undefined)
                    return;

                let value = BigNumber(`1e${py.decimal}`).times(info.price).times(info.copy);
                value = value.plus(value.times(info.fee).div(100));
                value = value.toString();

                await contract.methods.buy(window.web3.utils.toBN(info.saleId))
                    .send({ from: wallet.address, value: window.web3.utils.toBN(value) })
                    .on('receipt', (receipt) => {
                        tx = receipt;
                        toastSuccess(auth.loggedUserName, "Bought successfully");
                        return;
                    })
                    .on('confirmation', (confirmationNumber, receipt) => {
                    })
                    .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    });
            } else if (info.payment > 0) {
                // pay by BNB (native currency)
                let py = payment.find(t => t.id === info.payment);
                if (py === undefined)
                    return;

                await contract.methods.buy(window.web3.utils.toBN(info.saleId))
                    .send({ from: wallet.address })
                    .on('receipt', (receipt) => {
                        tx = receipt;
                        toastSuccess(auth.loggedUserName, "Bought successfully");
                        return;
                    })
                    .on('confirmation', (confirmationNumber, receipt) => {
                    })
                    .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    });
            }
        } catch (err) {
            console.log(err);
            toastError(auth.loggedUserName, err.message);
        }
        return tx;
    }, [factoryABI, factoryAddress, erc20ABI, auth.loggedUserName, wallet.address, toastInfo, toastSuccess, toastError])

    const removeSale = useCallback(async (saleId) => {
        let tx;
        try {
            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);

            await contract.methods.removeSale(window.web3.utils.toBN(saleId))
                .send({ from: wallet.address })
                .on('receipt', (receipt) => {
                    tx = receipt;
                    toastSuccess(auth.loggedUserName, "Removed successfully");
                    return;
                })
                .on('confirmation', (confirmationNumber, receipt) => {
                })
                .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });

        } catch (err) {
            console.log(err);
            toastError(auth.loggedUserName, err.message);
        }
        return tx;
    }, [factoryABI, factoryAddress, auth.loggedUserName, wallet.address, toastSuccess, toastError])

    const placeBid = useCallback(async (info) => {
        let tx;
        try {
            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);

            if (info.payment === 0) {
                // pay by BNB (native currency)
                let py = payment.find(t => t.id === info.payment);
                if (py === undefined)
                    return;

                let value = BigNumber(`1e${py.decimal}`).times(info.price).times(info.copy);
                value = value.plus(value.times(info.fee).div(100)).toString();
                let priceBigNumber = BigNumber(`1e${py.decimal}`).times(info.price).toString();

                await contract.methods.placeBid(window.web3.utils.toBN(info.saleId), window.web3.utils.toBN(priceBigNumber))
                    .send({ from: wallet.address, value: window.web3.utils.toBN(value) })
                    .on('receipt', (receipt) => {
                        tx = receipt;
                        toastSuccess(auth.loggedUserName, "Placed successfully");
                        return;
                    })
                    .on('confirmation', (confirmationNumber, receipt) => {
                    })
                    .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    });
            } else if (info.payment > 0) {
                // pay by BNB (native currency)
                let py = payment.find(t => t.id === info.payment);
                if (py === undefined)
                    return;

                let priceBigNumber = BigNumber(`1e${py.decimal}`).times(info.price).toString();
                await contract.methods.placeBid(window.web3.utils.toBN(info.saleId), window.web3.utils.toBN(priceBigNumber))
                    .send({ from: wallet.address })
                    .on('receipt', (receipt) => {
                        tx = receipt;
                        toastSuccess(auth.loggedUserName, "Placed successfully");
                        return;
                    })
                    .on('confirmation', (confirmationNumber, receipt) => {
                    })
                    .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    });
            }
        } catch (err) {
            console.log(err);
            toastError(auth.loggedUserName, err.message);
        }
        return tx;
    }, [factoryABI, factoryAddress, erc20ABI, auth.loggedUserName, wallet.address, toastInfo, toastSuccess, toastError])

    const makeOffer = useCallback(async (info) => {
        let tx;
        try {
            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);

            if (info.payment === 0) {
                // pay by BNB (native currency)
                let py = payment.find(t => t.id === info.payment);
                if (py === undefined)
                    return;

                let value = BigNumber(`1e${py.decimal}`).times(info.price).times(info.copy);
                value = value.plus(value.times(info.fee).div(100)).toString();
                let priceBigNumber = BigNumber(`1e${py.decimal}`).times(info.price).toString();

                await contract.methods.makeOffer(info.collectionAddress, window.web3.utils.toBN(info.tokenId), 
                    info.owner, window.web3.utils.toBN(info.copy), window.web3.utils.toBN(info.payment), 
                    window.web3.utils.toBN(priceBigNumber), window.web3.utils.toBN(info.duration))
                    .send({ from: wallet.address, value: window.web3.utils.toBN(value) })
                    .on('receipt', (receipt) => {
                        tx = receipt;
                        toastSuccess(auth.loggedUserName, "Offered successfully");
                        return;
                    })
                    .on('confirmation', (confirmationNumber, receipt) => {
                    })
                    .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    });
            } else if (info.payment > 0) {
                // pay by BNB (native currency)
                let py = payment.find(t => t.id === info.payment);
                if (py === undefined)
                    return;

                let priceBigNumber = BigNumber(`1e${py.decimal}`).times(info.price).toString();
                await contract.methods.makeOffer(info.collectionAddress, window.web3.utils.toBN(info.tokenId), 
                    info.owner, window.web3.utils.toBN(info.copy), window.web3.utils.toBN(info.payment), 
                    window.web3.utils.toBN(priceBigNumber), window.web3.utils.toBN(info.duration))
                    .send({ from: wallet.address })
                    .on('receipt', (receipt) => {
                        tx = receipt;
                        toastSuccess(auth.loggedUserName, "Offered successfully");
                        return;
                    })
                    .on('confirmation', (confirmationNumber, receipt) => {
                    })
                    .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    });
            }
        } catch (err) {
            console.log(err);
            toastError(auth.loggedUserName, err.message);
        }
        return tx;
    }, [factoryABI, factoryAddress, auth.loggedUserName, wallet.address, toastInfo, toastSuccess, toastError])

    const removeOffer = useCallback(async (info) => {
        let tx;
        try {
            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);

            await contract.methods.removeOffer(window.web3.utils.toBN(info.saleId))
                .send({ from: wallet.address })
                .on('receipt', (receipt) => {
                    tx = receipt;
                    toastSuccess(auth.loggedUserName, "Removed an offer successfully");
                    return;
                })
                .on('confirmation', (confirmationNumber, receipt) => {
                })
                .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });
        } catch (err) {
            console.log(err);
            toastError(auth.loggedUserName, err.message);
        }
        return tx;
    }, [factoryABI, factoryAddress, auth.loggedUserName, wallet.address, toastInfo, toastSuccess, toastError])

    const acceptOffer = useCallback(async (info) => {
        let tx;
        try {
            let contract = new window.web3.eth.Contract(factoryABI, factoryAddress);

            await contract.methods.acceptOffer(window.web3.utils.toBN(info.saleId))
                .send({ from: wallet.address })
                .on('receipt', (receipt) => {
                    tx = receipt;
                    toastSuccess(auth.loggedUserName, "Removed an offer successfully");
                    return;
                })
                .on('confirmation', (confirmationNumber, receipt) => {
                })
                .on('error', (error, receipt) => { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });
        } catch (err) {
            console.log(err);
            toastError(auth.loggedUserName, err.message);
        }
        return tx;
    }, [factoryABI, factoryAddress, auth.loggedUserName, wallet.address, toastInfo, toastSuccess, toastError])

    const approveToken = useCallback(async (info) => {
        let tx;
        try {
            let py = payment.find(t => t.id === info.payment);
            if (py === undefined)
                return;

            let vv = BigNumber(`1e${py.decimal}`).times(info.price).times(info.copy);
            vv = vv.plus(vv.times(info.fee).div(100)).toString();

            let tokenContract = new window.web3.eth.Contract(erc20ABI, py.contract);
            tx = await tokenContract.methods.approve(factoryAddress, window.web3.utils.toBN(vv)).send({ from: wallet.address });
        } catch (err) {
            console.log(err);
        }
        return tx;
    }, [erc20ABI, wallet.address, payment])

    const getTokenBalance = useCallback(async (paymentIndex, address) => {
        let tx;
        try {
            let py = payment.find(t => t.id === paymentIndex);
            if (py === undefined)
                return;

            let ret;
            if (paymentIndex === 0) {
                ret = await window.web3.eth.getBalance(address);
            } else {
                let tokenContract = new window.web3.eth.Contract(erc20ABI, py.contract);
                ret = await tokenContract.methods.balanceOf(address).call({ from: wallet.address });
            }

            return BigNumber(ret).div(BigNumber(`1e${py.decimal}`)).toNumber();
        } catch (err) {
            console.log(err);
        }
    }, [erc20ABI, wallet.address, payment])

    const tokenAmountWithoutDecimal = useCallback((paymentIndex, amount) => {
        let py = null;
        try {
            py = payment.find(item => item.id === paymentIndex);
        } catch (err) {
            console.log(err);
        }

        if (py === null || py === undefined)
            return '0';

        return BigNumber(amount).times(BigNumber(`1e${py.decimal}`)).toString();
    }, [payment])

    const tokenAmountWithDecimal = useCallback((paymentIndex, amount) => {
        let py = null;
        try {
            py = payment.find(item => item.id === paymentIndex);
        } catch (err) {
            console.log(err);
        }

        if (py === null || py === undefined)
            return BigNumber(0);

        return BigNumber(amount).div(BigNumber(`1e${py.decimal}`));
    }, [payment])

    const getPaymentName = useCallback((paymentIndex) => {
        let py = null;
        try {
            py = payment.find(item => item.id === paymentIndex);
        } catch (err) {
            console.log(err);
        }

        if (py === null || py === undefined)
            return 'unknown';

        return py.name;
    }, [payment])

    return (
        <ContractContext.Provider value={{
            createNewCollection, createNFT, getReservedTokenId,
            getNFTCount, convertPrice, factoryAddress, getDefaultFee,
            createSale, tokenAmountWithoutDecimal, tokenAmountWithDecimal,
            getPaymentName, buySale, approveToken, getTokenBalance, placeBid, removeSale,
            makeOffer, removeOffer, acceptOffer
        }}>
            {props.children}
        </ContractContext.Provider>
    )
}

export const useContract = () => {
    const contractManager = useContext(ContractContext)
    return contractManager || [{}, async () => { }]
}
