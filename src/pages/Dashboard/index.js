import React, { useState, useEffect } from 'react';
import {
  Main,
  CardOne,
  AreaOne,
  MiniCardArea,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  AreaLeft,
  ContentArea,
  AreaRight,
  InfoSection,
  InfoContent,
} from './styles';
import CardOneBg from '../../assets/images/card-one-bg.png';
import Security from '../../assets/images/security-bg.png';
import InfoCoin from '../../assets/images/info-coin.png';
import EPX from '../../assets/images/epx.png';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../../utils/numberUtils.ts';
import CountDown from '../../components/CountDown';
import { TOKEN_SYMBOL, SITE_NAME } from '../../config';
import { useTranslation } from 'react-i18next';
import TokenAbi from '../../abis/Token.json';
import erc20Abi from '../../abis/ERC20.json';
import { ethers } from 'ethers';
import axios from 'axios';
import zmzabi from '../../abis/ZMX_token.json';

const TOKEN_CONTRACT_ADDRESS = '0xA080dCB3350d99320Bf67A997D7f876284727ec7';
const WBNB_TOKEN_ADDRESS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
const Treasury_ADDRESS = '0x17F91B69E67a86a80847f1B78EF324bD2A344f74';
const Insurance_ADDRESS = '0x01F2941484317E8C5AFb373873446Ad085203810';
const FirePit_ADDRESS = '0x000000000000000000000000000000000000dEaD';

export const Dashboard = ({
  setmobMenu,
  setModal,
  account,
  setAccount,
  ...props
}) => {
  let {
    chainId,
    setChainId,
    tokenPrice,
    totalSupply,
    circulatingSupply,
    treasuryBalance,
    GIFVal,
    poolBalance,
    firePitBalance,
    interval,
    remainTime,
    setInit,
  } = props;
  tokenPrice = parseFloat(tokenPrice).toFixed(3);
  const marketCap = parseFloat(totalSupply) * tokenPrice;
  const treasuryVal = parseFloat(treasuryBalance) * tokenPrice;

  const poolVal = parseFloat(poolBalance);
  const firePitVal = parseFloat(firePitBalance) * tokenPrice;
  const { t } = useTranslation();

  const [treasuryBal, setTreasuryBal] = useState(0);
  const [insuBal, setInsuBal] = useState(0);
  const [firePitBal, setFirePitBal] = useState(0);
  const [firePitBalUSD, setFirePitBalUSD] = useState(0);
  const [firePitBalPerc, setFirePitBalPerc] = useState(0);
  const [tokenPriceUSD, setTokenPriceUSD] = useState(0);
  const [tokenTotalSupply, setTokenTotalSupply] = useState(0);
  const [tokenCirSupply, setTokenCirSupply] = useState(0);
  const [tokenMarketCap, setTokenMarketCap] = useState(0);
  const [poolBal, setPoolBal] = useState(0);

  const provider = new ethers.providers.JsonRpcProvider(
    'https://bsc-dataseed.binance.org'
  );
  useEffect(() => {
    viewTokenData()
  }, []);

  setTimeout(() => {
    viewTokenData()
   }, 5000);

   const getBNBPrice = async () => {
    const url =
      'https://api.coingecko.com/api/v3/simple/price?ids=wbnb&vs_currencies=usd';
    const resp = await axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'X-API-Key':
          'YEEwMh0B4VRg6Hu5gFQcKxqinJ7UizRza1JpbkyMgNTfj4jUkSaZVajOxLNabvnt',
      },
    });

    return resp.data.wbnb.usd;
  };

  const TokenContract = async () => {
    try {
     const TokenContract = new ethers.Contract(
        TOKEN_CONTRACT_ADDRESS,
        zmzabi,
        provider
      );
      return TokenContract;
    } catch (error) {
      console.log(error);
    }
  };


  const WbnbContract = async () => {
    try {

      const WbnbContract = new ethers.Contract(
        WBNB_TOKEN_ADDRESS,
        erc20Abi,
        provider
      );
      return WbnbContract;
    } catch (error) {
      console.log(error);
    }
  };

  const viewTokenData = async () => {

    let _TokenContract = await TokenContract();

    const treasuryBalance = await _TokenContract.balanceOf(Treasury_ADDRESS);
    const firePitBalance = await _TokenContract.balanceOf(FirePit_ADDRESS);
    const insurenceBalance = await _TokenContract.balanceOf(Insurance_ADDRESS);
    const pairAddr = await _TokenContract.pairAddress();
    const poolBalance = await _TokenContract.balanceOf(pairAddr);

    const totalSupply = await _TokenContract.totalSupply();
    setTokenTotalSupply(ethers.utils.formatUnits(totalSupply, 5));

    const circulatingSupply = await _TokenContract.getCirculatingSupply();
    setTokenCirSupply(ethers.utils.formatUnits(circulatingSupply, 5));

    const bnbPrice = await getBNBPrice();

    let _WbnbContract= await WbnbContract();


    const bnbInPool = await _WbnbContract.balanceOf(pairAddr);
    const pB = parseFloat(ethers.utils.formatUnits(poolBalance, 5));
    const derivedBNB = pB
        ? parseFloat(ethers.utils.formatEther(bnbInPool)) / pB
        : 0.0;

    const price = parseFloat(bnbPrice) * derivedBNB;
    const tokenVal =  parseFloat(price).toFixed(3)
    setTokenPriceUSD(parseFloat(price).toFixed(3));

    setTokenMarketCap(parseFloat(ethers.utils.formatUnits(totalSupply, 5)) * tokenVal);
    setPoolBal(parseFloat(ethers.utils.formatUnits(poolBalance, 5)));
    setTreasuryBal( (ethers.utils.formatUnits(treasuryBalance, 5)) * (tokenVal));
    setInsuBal(
        parseFloat(ethers.utils.formatUnits(insurenceBalance, 5)) *
        (tokenVal)
      );

      setFirePitBal(ethers.utils.formatUnits(firePitBalance, 5));

      const firePitVal = parseFloat(ethers.utils.formatUnits(firePitBalance, 5)) * tokenVal;
      setFirePitBalUSD(firePitVal);

      const firePitPercent1 = (parseFloat(ethers.utils.formatUnits(firePitBalance, 5)) * 100) / parseFloat(ethers.utils.formatUnits(totalSupply, 5));
      setFirePitBalPerc(parseFloat(firePitPercent1).toFixed(6));
  };

  const firePitPercent =
    (parseFloat(firePitBalance) * 100) / parseFloat(totalSupply);
  return (
    <>
      <Main>
        <AreaOne>
          <CardOne>
            <img src={CardOneBg} alt="card one" />
            <ul>
              <li>
                <span>{t('Market Cap')}</span>
                <h2>${numberWithCommas(tokenMarketCap)}</h2>
              </li>
              <li>
                <span>{t('Next Rewards')}</span>
                <h1>
                  <CountDown />
                </h1>
              </li>
            </ul>

            <ul>
              <li>
                <span>{t('Backed Liquidity')}</span>
                <p>100%</p>
              </li>
            </ul>
          </CardOne>
          <MiniCardArea>
            <CardTwo>
              <span>{t('Pool Value')}</span>
              <h2>${numberWithCommas(poolBal)}</h2>
            </CardTwo>
            <CardTwo>
              <span>{t('Treasury Assets')}</span>
              <h2>${numberWithCommas(treasuryBal)}</h2>
            </CardTwo>
            <CardTwo>
              <span>{t('Insurance Funds')}</span>
              <h2>${numberWithCommas(insuBal)}</h2>
            </CardTwo>
          </MiniCardArea>
        </AreaOne>
        <AreaOne>
          <AreaLeft>
            <div>
              <CardThree>
                <h3>{t('ZiMax Token')}</h3>
                <p>
                  {t(
                    '$ZiMax is a Bep20 token which rewards its holders with automatic passive interest payments every 15 minutes over the lifespan of 13.5 years until the maximum supply of 2 Billion tokens has been reached.'
                  )}
                </p>
                <Link to="/token">
                  <span>
                    {t('Buy $ZiMax')}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </span>
                </Link>
              </CardThree>
              <CardThree>
                <h3>{t('Decentralized Technology')}</h3>
                <p>
                  {t(
                    'ZiMax marketing programs are powered by revolutionary smart contract technology. The ZiMax smart contract code is completely publicly available . You can be confident in its safety and long-term success.'
                  )}
                </p>
              </CardThree>
            </div>
            <div>
              <CardFour>
                <h3>
                  {t('ZiMax Data')} <span>{t('Insight')}</span>
                </h3>
                <h4>
                  <span>
                    <img src={EPX} width="31" height="33" alt="ZiMax Price" />
                    {t('ZiMax Price')}
                  </span>
                  <strong>${tokenPriceUSD}</strong>
                </h4>
                <h5>
                  {t('ZiMax Holders')} <span>1</span>
                </h5>
                <ul>
                  <li>
                    <span>
                      <strong></strong>
                      {t('Total Supply')}
                    </span>
                    2 Billions  ZMX
                  </li>
                  <li>
                    <span>
                      <strong></strong>
                    {t('Circulating Supply')}
                    </span>
                  {numberWithCommas(tokenCirSupply)} ZMX
                  </li>
                 {/* <li>
                    <p>
                      <span></span> <strong></strong>
                    </p>
                  </li> */}
                </ul>
                <h6>
                  {t('ZiMax Burned')} 🔥
                  <span>{numberWithCommas(firePitBal)}</span>
                </h6>
                <h6>
                  {firePitBalPerc} {t('% Burned of Supply')}{' '}
                  🔥
                  <span>${numberWithCommas(firePitBalUSD)}</span>
                </h6>
              </CardFour>
            </div>
          </AreaLeft>
          <AreaRight>
            <CardFive>
              <img src={Security} alt="Security" />
              <h3>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                  {t('Immutable conditions')}
                </span>
                <strong>{t('Security & Docs')}</strong>
              </h3>
              <ContentArea>
                <p>
                  {t(
                    'Blockchain secures the algorithm, therefore nobody, even the authors of the idea, can interfere, cancel, or alter your transactions.'
                  )}
                </p>
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <svg
                        data-v-6c2005e4=""
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 0C6.10276 4.37198e-05 6.20301 0.0317462 6.2871 0.0907934C6.3712 0.149841 6.43506 0.233365 6.47 0.33L10 10.036L11.53 5.828C11.5653 5.73174 11.6293 5.64864 11.7133 5.58997C11.7974 5.5313 11.8975 5.49989 12 5.5H15.5C15.6326 5.5 15.7598 5.55268 15.8536 5.64645C15.9473 5.74021 16 5.86739 16 6C16 6.13261 15.9473 6.25979 15.8536 6.35355C15.7598 6.44732 15.6326 6.5 15.5 6.5H12.35L10.47 11.67C10.435 11.7665 10.3711 11.8499 10.287 11.9089C10.2029 11.9678 10.1027 11.9994 10 11.9994C9.89731 11.9994 9.79712 11.9678 9.71303 11.9089C9.62894 11.8499 9.56503 11.7665 9.53 11.67L6 1.964L4.47 6.171C4.4349 6.26745 4.37096 6.35076 4.28688 6.40962C4.2028 6.46847 4.10264 6.50003 4 6.5H0.5C0.367392 6.5 0.240215 6.44732 0.146447 6.35355C0.0526784 6.25979 0 6.13261 0 6C0 5.86739 0.0526784 5.74021 0.146447 5.64645C0.240215 5.55268 0.367392 5.5 0.5 5.5H3.65L5.53 0.33C5.56494 0.233365 5.6288 0.149841 5.7129 0.0907934C5.79699 0.0317462 5.89724 4.37198e-05 6 0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      {t('audits')}
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.zimax.io/roadmap" target="_blank">
                      <svg
                        data-v-6c2005e4=""
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 3C0.632608 3 0.759785 2.94732 0.853553 2.85355C0.947321 2.75979 1 2.63261 1 2.5C1 2.36739 0.947321 2.24021 0.853553 2.14645C0.759785 2.05268 0.632608 2 0.5 2C0.367392 2 0.240215 2.05268 0.146447 2.14645C0.0526785 2.24021 0 2.36739 0 2.5C0 2.63261 0.0526785 2.75979 0.146447 2.85355C0.240215 2.94732 0.367392 3 0.5 3ZM2.5 2.5C2.5 2.63261 2.44732 2.75979 2.35355 2.85355C2.25979 2.94732 2.13261 3 2 3C1.86739 3 1.74021 2.94732 1.64645 2.85355C1.55268 2.75979 1.5 2.63261 1.5 2.5C1.5 2.36739 1.55268 2.24021 1.64645 2.14645C1.74021 2.05268 1.86739 2 2 2C2.13261 2 2.25979 2.05268 2.35355 2.14645C2.44732 2.24021 2.5 2.36739 2.5 2.5ZM3.5 3C3.63261 3 3.75979 2.94732 3.85355 2.85355C3.94732 2.75979 4 2.63261 4 2.5C4 2.36739 3.94732 2.24021 3.85355 2.14645C3.75979 2.05268 3.63261 2 3.5 2C3.36739 2 3.24021 2.05268 3.14645 2.14645C3.05268 2.24021 3 2.36739 3 2.5C3 2.63261 3.05268 2.75979 3.14645 2.85355C3.24021 2.94732 3.36739 3 3.5 3Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H14C14.5304 14 15.0391 13.7893 15.4142 13.4142C15.7893 13.0391 16 12.5304 16 12V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0H2ZM14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V4H1V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14ZM1 12V5H7.5V13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12ZM8.5 13V5H15V12C15 12.2652 14.8946 12.5196 14.7071 12.7071C14.5196 12.8946 14.2652 13 14 13H8.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      {t('RoadMap')}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Zimax-io/Smart-Contracts" target="_blank">
                      <svg
                        data-v-6c2005e4=""
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1382 15.054 13.5183 14.0333 14.496 12.6718C15.4737 11.3102 15.9997 9.67624 16 8C16 3.58 12.42 0 8 0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      {t('Smart Contracts')}
                    </a>
                  </li>
                </ul>
              </ContentArea>
            </CardFive>
            <CardFive>
              <h3>
                <span>{t('Help center')}</span>
                <strong>{t('Docs')}</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.46803 2.08484C2.3044 2.08484 2.14748 2.14984 2.03178 2.26554C1.91607 2.38124 1.85107 2.53817 1.85107 2.70179V3.9357C1.85107 4.09932 1.91607 4.25625 2.03178 4.37195C2.14748 4.48765 2.3044 4.55265 2.46803 4.55265H3.70193C3.86556 4.55265 4.02248 4.48765 4.13818 4.37195C4.25388 4.25625 4.31888 4.09932 4.31888 3.9357V2.70179C4.31888 2.53817 4.25388 2.38124 4.13818 2.26554C4.02248 2.14984 3.86556 2.08484 3.70193 2.08484H2.46803ZM3.70193 2.70179H2.46803V3.9357H3.70193V2.70179Z"
                          fill="url(#paint0_linear_340_7844)"
                        />
                        <path
                          d="M6.16992 3.31873C6.16992 3.15511 6.23492 2.99818 6.35062 2.88248C6.46632 2.76678 6.62325 2.70178 6.78687 2.70178H17.892C18.0556 2.70178 18.2126 2.76678 18.3283 2.88248C18.444 2.99818 18.509 3.15511 18.509 3.31873C18.509 3.48236 18.444 3.63929 18.3283 3.75499C18.2126 3.87069 18.0556 3.93569 17.892 3.93569H6.78687C6.62325 3.93569 6.46632 3.87069 6.35062 3.75499C6.23492 3.63929 6.16992 3.48236 6.16992 3.31873ZM6.78687 7.6374C6.62325 7.6374 6.46632 7.7024 6.35062 7.8181C6.23492 7.93381 6.16992 8.09073 6.16992 8.25436C6.16992 8.41798 6.23492 8.57491 6.35062 8.69061C6.46632 8.80631 6.62325 8.87131 6.78687 8.87131H17.892C18.0556 8.87131 18.2126 8.80631 18.3283 8.69061C18.444 8.57491 18.509 8.41798 18.509 8.25436C18.509 8.09073 18.444 7.93381 18.3283 7.8181C18.2126 7.7024 18.0556 7.6374 17.892 7.6374H6.78687ZM6.78687 12.573C6.62325 12.573 6.46632 12.638 6.35062 12.7537C6.23492 12.8694 6.16992 13.0264 6.16992 13.19C6.16992 13.3536 6.23492 13.5105 6.35062 13.6262C6.46632 13.7419 6.62325 13.8069 6.78687 13.8069H17.892C18.0556 13.8069 18.2126 13.7419 18.3283 13.6262C18.444 13.5105 18.509 13.3536 18.509 13.19C18.509 13.0264 18.444 12.8694 18.3283 12.7537C18.2126 12.638 18.0556 12.573 17.892 12.573H6.78687Z"
                          fill="url(#paint1_linear_340_7844)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.85107 7.63734C1.85107 7.47371 1.91607 7.31679 2.03178 7.20109C2.14748 7.08539 2.3044 7.02039 2.46803 7.02039H3.70193C3.86556 7.02039 4.02248 7.08539 4.13818 7.20109C4.25388 7.31679 4.31888 7.47371 4.31888 7.63734V8.87124C4.31888 9.03487 4.25388 9.19179 4.13818 9.3075C4.02248 9.4232 3.86556 9.4882 3.70193 9.4882H2.46803C2.3044 9.4882 2.14748 9.4232 2.03178 9.3075C1.91607 9.19179 1.85107 9.03487 1.85107 8.87124V7.63734ZM2.46803 7.63734H3.70193V8.87124H2.46803V7.63734ZM2.46803 11.956C2.3044 11.956 2.14748 12.021 2.03178 12.1367C1.91607 12.2524 1.85107 12.4093 1.85107 12.573V13.8069C1.85107 13.9705 1.91607 14.1274 2.03178 14.2431C2.14748 14.3588 2.3044 14.4238 2.46803 14.4238H3.70193C3.86556 14.4238 4.02248 14.3588 4.13818 14.2431C4.25388 14.1274 4.31888 13.9705 4.31888 13.8069V12.573C4.31888 12.4093 4.25388 12.2524 4.13818 12.1367C4.02248 12.021 3.86556 11.956 3.70193 11.956H2.46803ZM3.70193 12.573H2.46803V13.8069H3.70193V12.573Z"
                          fill="url(#paint2_linear_340_7844)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_340_7844"
                            x1="3.08498"
                            y1="2.08484"
                            x2="3.08498"
                            y2="4.55265"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7660FF" />
                            <stop offset="1" stopColor="#FF9960" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_340_7844"
                            x1="12.3394"
                            y1="2.70178"
                            x2="12.3394"
                            y2="13.8069"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7660FF" />
                            <stop offset="1" stopColor="#FF9960" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_340_7844"
                            x1="3.08498"
                            y1="7.02039"
                            x2="3.08498"
                            y2="14.4238"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7660FF" />
                            <stop offset="1" stopColor="#FF9960" />
                          </linearGradient>
                        </defs>

                        </svg>
                        {t('What is ZiMax')}
                      </span>
                      {t('Find common questions and their answers in the Doc Pages')}
                    </p>
                    <a target="_blank" href="https://docs.zimax.io/zimax-overview/what-is-zimax">
                      {t("Go to Doc's")}{' '}
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <path
                          d="M4.61571 4.25024C4.44024 4.25024 4.27196 4.30622 4.14788 4.40584C4.02381 4.50547 3.9541 4.6406 3.9541 4.78149C3.9541 4.92239 4.02381 5.05752 4.14788 5.15714C4.27196 5.25677 4.44024 5.31274 4.61571 5.31274H12.555C12.7305 5.31274 12.8988 5.25677 13.0229 5.15714C13.1469 5.05752 13.2166 4.92239 13.2166 4.78149C13.2166 4.6406 13.1469 4.50547 13.0229 4.40584C12.8988 4.30622 12.7305 4.25024 12.555 4.25024H4.61571ZM3.9541 6.90649C3.9541 6.7656 4.02381 6.63047 4.14788 6.53084C4.27196 6.43122 4.44024 6.37524 4.61571 6.37524H12.555C12.7305 6.37524 12.8988 6.43122 13.0229 6.53084C13.1469 6.63047 13.2166 6.7656 13.2166 6.90649C13.2166 7.04739 13.1469 7.18252 13.0229 7.28214C12.8988 7.38177 12.7305 7.43774 12.555 7.43774H4.61571C4.44024 7.43774 4.27196 7.38177 4.14788 7.28214C4.02381 7.18252 3.9541 7.04739 3.9541 6.90649ZM4.61571 8.50024C4.44024 8.50024 4.27196 8.55621 4.14788 8.65584C4.02381 8.75547 3.9541 8.8906 3.9541 9.03149C3.9541 9.17239 4.02381 9.30752 4.14788 9.40715C4.27196 9.50677 4.44024 9.56274 4.61571 9.56274H12.555C12.7305 9.56274 12.8988 9.50677 13.0229 9.40715C13.1469 9.30752 13.2166 9.17239 13.2166 9.03149C13.2166 8.8906 13.1469 8.75547 13.0229 8.65584C12.8988 8.55621 12.7305 8.50024 12.555 8.50024H4.61571ZM4.61571 10.6252C4.44024 10.6252 4.27196 10.6812 4.14788 10.7808C4.02381 10.8805 3.9541 11.0156 3.9541 11.1565C3.9541 11.2974 4.02381 11.4325 4.14788 11.5321C4.27196 11.6318 4.44024 11.6877 4.61571 11.6877H8.58537C8.76084 11.6877 8.92912 11.6318 9.0532 11.5321C9.17728 11.4325 9.24698 11.2974 9.24698 11.1565C9.24698 11.0156 9.17728 10.8805 9.0532 10.7808C8.92912 10.6812 8.76084 10.6252 8.58537 10.6252H4.61571Z"
                          fill="url(#paint0_linear_340_7851)"
                        />
                        <path
                          d="M0.646484 2.125C0.646484 1.56142 0.925305 1.02091 1.42161 0.622398C1.91791 0.223883 2.59104 0 3.29292 0L13.8787 0C14.5806 0 15.2537 0.223883 15.75 0.622398C16.2463 1.02091 16.5251 1.56142 16.5251 2.125V14.875C16.5251 15.4386 16.2463 15.9791 15.75 16.3776C15.2537 16.7761 14.5806 17 13.8787 17H3.29292C2.59104 17 1.91791 16.7761 1.42161 16.3776C0.925305 15.9791 0.646484 15.4386 0.646484 14.875V2.125ZM13.8787 1.0625H3.29292C2.94198 1.0625 2.60542 1.17444 2.35727 1.3737C2.10911 1.57296 1.9697 1.84321 1.9697 2.125V14.875C1.9697 15.1568 2.10911 15.427 2.35727 15.6263C2.60542 15.8256 2.94198 15.9375 3.29292 15.9375H13.8787C14.2296 15.9375 14.5662 15.8256 14.8143 15.6263C15.0625 15.427 15.2019 15.1568 15.2019 14.875V2.125C15.2019 1.84321 15.0625 1.57296 14.8143 1.3737C14.5662 1.17444 14.2296 1.0625 13.8787 1.0625Z"
                          fill="url(#paint1_linear_340_7851)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_340_7851"
                            x1="8.58537"
                            y1="4.25024"
                            x2="8.58537"
                            y2="11.6877"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7660FF" />
                            <stop offset="1" stopColor="#FF9960" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_340_7851"
                            x1="8.5858"
                            y1="0"
                            x2="18.4998"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7660FF" />
                            <stop offset="1" stopColor="#FF9960" />
                          </linearGradient>
                        </defs>
                        </svg>
                        {t('NFT Matrix Levels')}
                      </span>
                      {t('Learn how to participate in ZiMax NFT Matrix Levels')}
                    </p>
                    <a target="_blank" href="https://docs.zimax.io/zimax-overview/nft-matrix-levels">
                      {t('Read')}{' '}
                      <svg

                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                      >
                        <path
                          d="M9.93417 0H10.044C11.0583 0.00370172 16.1975 0.0407191 17.5832 0.413358C18.0021 0.527086 18.3838 0.748761 18.6902 1.05623C18.9965 1.3637 19.2169 1.7462 19.3291 2.1655C19.4538 2.63439 19.5414 3.25504 19.6006 3.89544L19.6129 4.02377L19.6401 4.34458L19.6499 4.47291C19.7301 5.6007 19.74 6.65692 19.7413 6.88766V6.9802C19.74 7.21958 19.7289 8.34737 19.6401 9.52205L19.6302 9.65161L19.6191 9.77993C19.5574 10.4857 19.4661 11.1866 19.3291 11.7024C19.2172 12.1218 18.997 12.5045 18.6906 12.812C18.3841 13.1196 18.0022 13.3411 17.5832 13.4545C16.1518 13.8395 10.7115 13.8666 9.95762 13.8679H9.7824C9.40112 13.8679 7.82419 13.8605 6.17076 13.8037L5.961 13.7963L5.85365 13.7914L5.64265 13.7827L5.43165 13.7741C4.06202 13.7136 2.75778 13.6161 2.15687 13.4533C1.73794 13.34 1.35614 13.1186 1.04971 12.8113C0.743284 12.504 0.522987 12.1216 0.41089 11.7024C0.273927 11.1878 0.182618 10.4857 0.120923 9.77993L0.111051 9.65037L0.10118 9.52205C0.040284 8.68595 0.00653953 7.8481 0 7.00982L0 6.85805C0.00246781 6.59276 0.0123391 5.67596 0.0789699 4.66416L0.0876073 4.53707L0.091309 4.47291L0.10118 4.34458L0.128326 4.02377L0.140665 3.89544C0.199893 3.25504 0.2875 2.63315 0.412124 2.1655C0.524032 1.74603 0.744245 1.36336 1.05069 1.05583C1.35713 0.748307 1.73903 0.526745 2.1581 0.413358C2.75901 0.252951 4.06325 0.154238 5.43289 0.0925428L5.64265 0.0839055L5.85488 0.0765023L5.961 0.0728006L6.17199 0.0641633C7.34631 0.0263744 8.52111 0.0053957 9.69603 0.00123396H9.93417V0ZM7.89699 3.96084V9.90579L13.0263 6.93455L7.89699 3.96084Z"
                          fill="url(#paint0_linear_340_7843)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_340_7843"
                            x1="9.87063"
                            y1="0"
                            x2="23.5"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7660FF" />
                            <stop offset="1" stopColor="#FF9960" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {t('Videos')}
                    </span>
                    {t('Watch tutorials on how to use the ZiMax platform.')}
                  </p>
                  <a target="_blank" href="https://youtube.com">
                    {t('Go to Videos')}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ol>
            </CardFive>
          </AreaRight>
        </AreaOne>
      </Main>
    </>
  );
};
