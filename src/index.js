import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { ThemeProvider } from './contexts/ThemeContext'
import theme from './theme.json'
import { AuthProvider } from './contexts/AuthContext'
import { GlobalProvider } from './contexts/GlobalContext'
import { DataProvider } from './contexts/DataContext'
import { ToastsProvider } from './contexts/ToastsContext'
import { WalletProvider } from './contexts/WalletContext'
import { ContractProvider } from './contexts/ContractContext'
import chainTokenIcon from './assets/images/chain-token.svg'
import binanceTokenIcon from './assets/images/binance-token.svg'
import binanceUsdIcon from './assets/images/binance-usd.svg'
import flagUsa from './assets/images/flag-usa.svg'
import flagFr from './assets/images/flag-fr.svg'
import signupHero from './assets/images/signup-hero.png'
import "./i18n"
/**
 * Theme images
 */

theme.images = {
  chainTokenIcon,
  binanceTokenIcon,
  binanceUsdIcon,
  flagUsa,
  flagFr,
  signupHero
}

theme.imageTypeList = [
  'tif', 'tiff', 'png', 'svg', 'jpg', 'jpeg', 'bmp', 'gif', 'eps', 'raw', 'cr2', 'nef', 'orf', 'sr2'
]

const RouteApp = () => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <ToastsProvider>
          <WalletProvider>
            <AuthProvider>
              <ContractProvider>
                <DataProvider>
                  <Router />
                </DataProvider>
              </ContractProvider>
            </AuthProvider>
          </WalletProvider>
        </ToastsProvider>
      </ThemeProvider>
    </GlobalProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<RouteApp />, wrapper)
