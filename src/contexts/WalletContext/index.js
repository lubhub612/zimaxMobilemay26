import React from 'react'
import { useWallet } from 'use-wallet'
import { isMobile } from 'react-device-detect'

import { createContext, useContext, useState, useEffect, useCallback } from "react";

import useToast from '../../hooks/useToast';
import walletConfig from './config';

const Web3 = require("web3");

export const WalletContext = createContext();

const rpcUrl = walletConfig.rpcUrls[0]
const walletSessionKey = 'walletHyperXV1';

export const WalletProvider = (props) => {

    const [wallet, setWallet] = useState({
        address: '',
        chainId: 0
    });

    const defWallet = useWallet();

    const initWallet = async () => {
        if (window.web3 instanceof Web3)
            return;

        if (typeof window.ethereum !== 'undefined') {
            // Supports EIP-1102 injected Ethereum providers.
            window.web3 = new Web3(window.ethereum);
        } else if (typeof window.web3 !== 'undefined') {
            // Supports legacy injected Ethereum providers.
            window.web3 = new Web3(rpcUrl);
        } else {
            // Your preferred fallback.
            window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
        }
    }

    const connectWalletChain = useCallback(async (chainId, chainName, nativeCurrency, rpcUrls, blockExplorerUrls) => {
        let ethereum = window.ethereum;
        if (ethereum === undefined)
            return;

        try {
            await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: chainId }] });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            console.log("error switch chain: ", switchError);
            if (switchError.code === 4902) {
                const data = [{
                    // chainId: '0x38',
                    chainId: chainId,
                    // chainName: 'Binance Smart Chain',
                    chainName: chainName,
                    // nativeCurrency:
                    // {
                    //     name: 'BNB',
                    //     symbol: 'BNB',
                    //     decimals: 18
                    // },
                    nativeCurrency: nativeCurrency,
                    // rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    rpcUrls: rpcUrls,
                    // blockExplorerUrls: ['https://bscscan.com/'],
                    blockExplorerUrls: blockExplorerUrls
                }]

                try {
                    await ethereum.request({ method: 'wallet_addEthereumChain', params: data })
                } catch (err) {
                    console.error('Failed to add network ', err)
                }
            }
        }
    }, [])

    const connectWalletByConfig = useCallback(async () => {
        return await connectWalletChain(
            walletConfig.chainId,
            walletConfig.networkName,
            walletConfig.nativeCurrency,
            walletConfig.rpcUrls,
            walletConfig.blockUrls
        )
    }, [connectWalletChain])

    // initWallet();

    useEffect(() => {
        // console.log('1 --------------', defWallet);
        setWallet(t => {
            if (defWallet._web3ReactContext.library === undefined) {
                return {
                    ...t,
                    address: '',
                    chainId: 0
                }
            } else {
                return {
                    ...t,
                    address: defWallet.account,
                    chainId: defWallet.chainId
                }
            }
        })

        if (defWallet._web3ReactContext.library !== undefined) {
            window.web3 = new Web3(defWallet._web3ReactContext.library);
        } else {
            window.web3 = undefined;
        }
    }, [defWallet])

    // useEffect(() => {
        // if (isMobile) defWallet.connect('walletconnect');
        // else defWallet.connect();
    // }, [])

    useEffect(() => {
        let oldAddr = window.localStorage.getItem(walletSessionKey);
        if (wallet.address !== '' && wallet.address !== oldAddr) {
            window.localStorage.setItem(walletSessionKey, wallet.address);
            console.log(`wallet: ${oldAddr} => ${wallet.address}`);
        }
    }, [wallet.address])

    const getWalletAddressBySessionKey = useCallback(() => {
        let oldAddr = window.localStorage.getItem(walletSessionKey);
        return oldAddr;
    }, [walletSessionKey])

    const connectWallet = async (w) => {
        if (w === 'injected') await defWallet.connect();
        else await defWallet.connect(w);

        if (defWallet._web3ReactContext.library === undefined || defWallet.chainId !== parseInt(walletConfig.chainId, 16)) {
            await connectWalletByConfig()

            if (w === 'injected') await defWallet.connect();
            else await defWallet.connect(w);
        }
    }

    const disconnectWallet = () => {
        defWallet.reset()
    }

    return (
        <WalletContext.Provider value={{ connectWallet, disconnectWallet, connectWalletByConfig, getWalletAddressBySessionKey, wallet }}>
            {props.children}
        </WalletContext.Provider>
    )
}

export const useCustomWallet = () => {
    const dataManager = useContext(WalletContext)
    return dataManager || [{}, async () => { }]
}
