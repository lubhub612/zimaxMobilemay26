import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Offer } from './pages/Offer';
import { Levels } from './pages/Levels';
import { Teams } from './pages/Teams';
import { Dashboard } from './pages/Dashboard';
import { Staking } from './pages/Staking';
import { Calculator } from './pages/Calculator';
import { Risks } from './pages/Risks';
import { Token } from './pages/Token';
import { Multiply } from './pages/Multiply';
import { SellDetails } from './pages/SellDetails';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { UploadNFT } from './pages/UploadNFT';
import { MyStery } from './pages/MyStery';
import { Stats } from './pages/Stats';
import { CreateSignup } from './pages/CreateSignup';
import { ListItemForSale } from './pages/ListItemForSale';
import { Collections } from './pages/Collections';
import { Creators } from './pages/Creators';
import { CollectionDetails } from './pages/CollectionDetails';
import { CollectionCreator } from './pages/CollectionCreator';
import { Viewcollection } from './pages/ViewCollection';
import Ai from "./pages/Ai";
import routerAbi from './abis/ROUTER.json';
import TokenAbi from './abis/Token.json';
import erc20Abi from './abis/ERC20.json';
import { ethers } from 'ethers';
import axios from 'axios';
import ToastListener from './components/Toast';
import { useAuth } from './contexts/AuthContext';
import { googleAnalyticsActions } from './utils/google_analytics';
import DefiLottery from './pages/DefiLottery';
import NftCalculator from './pages/NftCalculator';
import Z3 from './pages/Z3';
import Z4 from './pages/Z4';
import ZZZ from './pages/zZz';
import ZGold from './pages/zGold';
import NftMatrix from './pages/NftMatrix';
import { LotteryFaq } from './pages/LotteryFaq';
import { Templates } from './pages/Templates';
import 'react-toastify/dist/ReactToastify.css';

import { AutostakingFaq } from './pages/AutostakingFaq';
const _TOKEN_ADDRESS = '0xA080dCB3350d99320Bf67A997D7f876284727ec7';
const WBNB_TOKEN_ADDRESS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
const BUSD_TOKEN_ADDRESS = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const USDT_TOKEN_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';

export const App = () => {
  const [mobMenu, setmobMenu] = useState(false);
  // const [Modal, setModal] = useState(false)
  const handlerSetmonMenu = () => {
    setmobMenu(!mobMenu);
  };

  const [init, setInit] = useState(false);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [circulatingSupply, setCirculatingSupply] = useState(0);
  const [treasuryBalance, setTreasuryBalance] = useState(0);
  const [GIFVal, setGIFVal] = useState(0);
  const [firePitBalance, setFirePitBalance] = useState(0);
  const [poolBalance, setPoolBalance] = useState(0);

  const [interval, setIntervalSec] = useState(15 * 60);
  const [remainTime, setRemainTime] = useState(0);
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");

  const [walletBalance, setWalletBalance] = useState(0);
  // const [rebaseDuration, setRebaseDuration] = useState(1800);
  // const [nextRewardAmount, setNextRewardAmount] = useState();
  // const [nextRewardYield, setNextRewardYield] = useState();
  // const [roi, setRoi] = useState();

  const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org"
  );
  const TokenContract = new ethers.Contract(_TOKEN_ADDRESS, TokenAbi, provider);

  const handlerSetModal = () => {
    // event.preventDefault()
    console.log("clicked");
    // setModal(!Modal)
  };

  useEffect(() => {
    const interval = setInterval(refreshPage, 10000);
    return () => clearInterval(interval);
  }, []);

  // event on initialize page.
  useEffect(() => {
    if (!init) {
      refreshPage();
    }
    // return () => clearInterval(interval);
  }, [init]);

  useEffect(() => {
    getWalletInfo(account, TokenContract);
  }, [account]);

  useEffect(() => {
    googleAnalyticsActions.initGoogleAnalytics("UA-239541283-1");
  }, []);

  async function refreshPage() {
    try {
      // let stTime = new Date().getTime();
      const lRTime = await TokenContract._lastRebasedTime();
      const utcTimestamp = new Date().getTime();
      const deltaTime = parseInt(utcTimestamp / 1000) - parseInt(lRTime);
      const remainTime = interval - (deltaTime % interval);
      setRemainTime(remainTime);
      setInit(true);
      // let endTime = new Date().getTime();
      // console.log("time to remainTime: ", (endTime-stTime)/1000);

      // stTime = new Date().getTime();
      const tokenPrice = await getTokenPriceByPair(TokenContract, provider);

      // endTime = new Date().getTime();
      // console.log("time to price: ", (endTime-stTime)/1000);

      // stTime = new Date().getTime();
      const totalSupply = await TokenContract.totalSupply();
      // endTime = new Date().getTime();
      // console.log("time to totalSupply: ", (endTime-stTime)/1000);

      setTotalSupply(ethers.utils.formatUnits(totalSupply, 5)); // * tokenPrice).toFixed(2));

      // stTime = new Date().getTime();
      const circulatingSupply = await TokenContract.getCirculatingSupply();
      // endTime = new Date().getTime();
      // console.log("time to circulatingSupply: ", (endTime-stTime)/1000);

      setCirculatingSupply(ethers.utils.formatUnits(circulatingSupply, 5)); // * tokenPrice).toFixed(2));

      // stTime = new Date().getTime();
      const balances = await getBalancesInfo(TokenContract);
      // endTime = new Date().getTime();
      // console.log("time to balances: ", (endTime-stTime)/1000);
      if (account) {
        await getWalletInfo(account, TokenContract);
      }
    } catch (err) {
      console.log("Refresh page. error! (%s)", err.message);
    }
  }

  async function getTokenPriceByPair(Token, provider) {
    try {
      const pairAddr = await Token.pairAddress();
      const poolBalance = await Token.balanceOf(pairAddr);
      const wbnbContract = new ethers.Contract(
        WBNB_TOKEN_ADDRESS,
        erc20Abi,
        provider
      );
      const bnbInPool = await wbnbContract.balanceOf(pairAddr);
      const pB = parseFloat(ethers.utils.formatUnits(poolBalance, 5));
      const derivedBNB = pB
        ? parseFloat(ethers.utils.formatEther(bnbInPool)) / pB
        : 0.0;
      console.log("derivedBNB:", derivedBNB);

      const bnbPrice = await getBNBPrice();
      // console.log("bnbPrice:", bnbPrice);
      const price = parseFloat(bnbPrice) * derivedBNB;
      setTokenPrice(price);
      // console.log("[ ] :: Price of   = %s $", price);
      return price;
    } catch (err) {
      console.log("[ ] Getting price of token error!");
      return 0;
    }
  }

  const getBNBPrice = async () => {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=wbnb&vs_currencies=usd";
    const resp = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "X-API-Key":
          "YEEwMh0B4VRg6Hu5gFQcKxqinJ7UizRza1JpbkyMgNTfj4jUkSaZVajOxLNabvnt",
      },
    });

    console.log("Price get result:", resp);
    return resp.data.wbnb.usd;
  };

  async function getWalletInfo(account, Token) {
    if (!account) {
      setWalletBalance(0);
      return 0;
    }
    try {
      const tokenBalance = await Token.balanceOf(account);
      const balance = ethers.utils.formatUnits(tokenBalance, 5);
      setWalletBalance(balance.toString());
      return balance;
    } catch (err) {
      console.log("[ ] Getting wallet balance error! (%s)", err.message);
    }
    return 0;
  }

  async function getBalancesInfo(Token) {
    if (typeof Token === "undefined") {
      return 0;
    }
    try {
      const treasuryAddr = await Token.treasuryReceiver();
      const GIFAddr = await Token.genInsuranceFundReceiver();
      const firePitAddr = await Token.firePit();
      const poolAddr = await Token.pair();

      const treasuryBalance = await Token.balanceOf(treasuryAddr);

      const firePitBalance = await Token.balanceOf(firePitAddr);

      const wbnbContract = new ethers.Contract(
        WBNB_TOKEN_ADDRESS,
        erc20Abi,
        provider
      );
      const busdContract = new ethers.Contract(
        BUSD_TOKEN_ADDRESS,
        erc20Abi,
        provider
      );
      const usdtContract = new ethers.Contract(
        USDT_TOKEN_ADDRESS,
        erc20Abi,
        provider
      );

      const bnbpoolBalance = await wbnbContract.balanceOf(poolAddr);
      console.log("bnb", ethers.utils.formatUnits(bnbpoolBalance, 18));

      const usdtpoolBalance = await usdtContract.balanceOf(
        "0x625D8ec2A5112aA89D87eaD86EF7b688c80A5BC3"
      );
      console.log("usdt", ethers.utils.formatUnits(usdtpoolBalance, 18));

      const busdpoolBalance = await busdContract.balanceOf(
        "0x28BbdD8FC06836742bb9faeFa721e7f10AE7988d"
      );
      console.log("busd", ethers.utils.formatUnits(busdpoolBalance, 18));

      const bnbInGIF = await provider.getBalance(GIFAddr);
      // console.log("bnbInGIF", bnbInGIF.toNumber());
      const bnbPrice = await getBNBPrice();
      setTreasuryBalance(ethers.utils.formatUnits(treasuryBalance, 5));
      setGIFVal(
        parseFloat(ethers.utils.formatUnits(bnbInGIF, 18)) *
          parseFloat(bnbPrice)
      );
      setFirePitBalance(ethers.utils.formatUnits(firePitBalance, 5));
      setPoolBalance(
        parseFloat(ethers.utils.formatUnits(bnbpoolBalance, 18)) *
          parseFloat(bnbPrice) +
          parseFloat(ethers.utils.formatUnits(busdpoolBalance, 18)) +
          parseFloat(ethers.utils.formatUnits(usdtpoolBalance, 18))
      );

      return 1;
    } catch (err) {
      console.log("[ ] Getting wallet balance error! (%s)", err.message);
    }
    return 0;
  }
  // const { auth } = useAuth();
  // const navigate = useNavigate();

  // React.useEffect(() => {
  // if (auth.isLoggedIn === false) {
  //   console.log('---------------------');
  //   navigate('/');
  // }
  // }, [auth.isLoggedIn])

  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Dashboard
              setmobMenu={handlerSetmonMenu}
              setModal={handlerSetModal}
              account={account}
              setAccount={setAccount}
              chainId={chainId}
              setChainId={setChainId}
              tokenPrice={tokenPrice}
              totalSupply={totalSupply}
              circulatingSupply={circulatingSupply}
              treasuryBalance={treasuryBalance}
              GIFVal={GIFVal}
              poolBalance={poolBalance}
              firePitBalance={firePitBalance}
              interval={interval}
              remainTime={remainTime}
              setRemainTime={setRemainTime}
              setInit={setInit}
            />
          }
        ></Route>
        <Route exact path="/explorer" element={<Home />}></Route>
        <Route exact path="/offer" element={<Home />}></Route>
        <Route exact path="/levels" element={<Levels />}></Route>
        <Route exact path="/risks" element={<Risks />}></Route>
        <Route
          exact
          path="/calculator"
          element={
            <Calculator
              setmobMenu={handlerSetmonMenu}
              setModal={handlerSetModal}
              account={account}
              setAccount={setAccount}
              chainId={chainId}
              setChainId={setChainId}
              tokenPrice={tokenPrice}
              balance={walletBalance}
              interval={interval}
            />
          }
        ></Route>
        <Route exact path="/teams" element={<Teams />}></Route>
        <Route exact path="/token" element={<Token />}></Route>
        <Route exact path="/staking" element={<Staking />}></Route>
        <Route exact path="/multiply" element={<Multiply />}></Route>
        <Route exact path="/create-signup" element={<CreateSignup />}></Route>
        <Route exact path="/profile/:address" element={<Profile />}></Route>
        <Route exact path="/settings" element={<Settings />}></Route>
        <Route exact path="/defi-lottery" element={<DefiLottery />}></Route>
        <Route exact path="/nft-calculator" element={<NftCalculator />}></Route>
        <Route exact path="/upload" element={<UploadNFT />}></Route>
        <Route exact path="/z3" element={<Z3 />}></Route>
        <Route exact path="/z4" element={<Z4 />}></Route>
        <Route exact path="/zZz" element={<ZZZ />}></Route>
        <Route exact path="/zGold" element={<ZGold />}></Route>
        <Route exact path="/nft-matrix" element={<NftMatrix />}></Route>
        <Route exact path="/lottery-faq" element={<LotteryFaq />}></Route>
        <Route exact path="/templates" element={<Templates />}></Route>
        <Route
          exact
          path="/autostaking-faq"
          element={<AutostakingFaq />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/:saleId/buy"
          element={<Details category="buy" />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/:saleId/bid"
          element={<Details category="bid" />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/offer"
          element={<Offer />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/sell"
          element={<SellDetails />}
        ></Route>
        <Route
          exact
          path="/products/:collection/:tokenId/sale"
          element={<ListItemForSale />}
        ></Route>
        <Route exact path="/mystery" element={<MyStery />}></Route>
        <Route exact path="/stats" element={<Stats />}></Route>
        <Route
          exact
          path="/collections"
          element={<Collections filter="all" />}
        ></Route>
        <Route exact path="/creators" element={<Creators />}></Route>
        <Route
          exact
          path="/my-collections"
          element={<Collections filter="owner" />}
        ></Route>
        <Route
          exact
          path="/my-collections/create"
          element={<CollectionCreator />}
        ></Route>
        <Route
          exact
          path="/collections/:contractAddress"
          element={<CollectionDetails />}
        ></Route>
        <Route
          exact
          path="/viewcollection/:address"
          element={<Viewcollection />}
        ></Route>
        <Route exact path="/ai" element={<Ai />}></Route>
      </Routes>
      <ToastListener />
    </>
  );
};
