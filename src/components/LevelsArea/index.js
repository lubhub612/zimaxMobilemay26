import React from 'react';
import {
  LevelMain,
  LevelItem,
  LevelHeader,
  LevelHeaderLeft,
  SwapContent,
} from './styles';
import ETH from '../../assets/images/coin/eth.gif';
import WSTETH from '../../assets/images/coin/wstETH.gif';
import BTC from '../../assets/images/coin/wbtc.gif';
import MANA from '../../assets/images/coin/mana.gif';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function LevelsArea() {
  const { t } = useTranslation();

  return (
    <>
      <SwapContent>
        <h2>
            {t("Earn Over $10,000 With One Time Investment")}
</h2>
        <p>
          {t("ZiMax is a Smart Contract Crypto earnings program that you work from home at your own leisure.With ZiMax There is no limit to how much you can earn, as the system keeps on recycling.")}
        </p>
      </SwapContent>
      <LevelMain>
        <LevelItem>
          <LevelHeader>
            <LevelHeaderLeft>
              <h1>{t("PLUS")}</h1>
              <p>
                {t("A basic matrix program that is best suited for those who are self-reliant and prefer to develop on their own.")}
              </p>
            </LevelHeaderLeft>
            <img src={ETH} alt="eth" />
          </LevelHeader>
          <h2>{t("Entry cost 50 USDT")} 👇</h2>
          <ul>
            <li>
              {t("Max Multiple")}
              <strong>{t("4.33x")}</strong>
            </li>
            <li>
              {t("Current Liquidity Available")}
              <strong>{t("24.44M")}</strong>
            </li>
            <li>
              {t("Variable Annual Fee")}
              <strong>{t("3.75%")}</strong>
            </li>
          </ul>
          <button>
            <Link to="/multiply">{t("Preview")}</Link>
          </button>
        </LevelItem>
        <LevelItem>
          <LevelHeader>
            <LevelHeaderLeft>
              <h1>{t("PRO")}</h1>
              <p>
                {t("A more advanced program where the results can come from your direct partners or indirect as spillovers.")}
              </p>
            </LevelHeaderLeft>
            <img src={WSTETH} alt="wsteth" />
          </LevelHeader>
          <h2>{t("Entry cost 250 USDT")} 👇</h2>
          <ul>
            <li>
              {t("Max Multiple")}
              <strong>{t("2.66x")}</strong>
            </li>
            <li>
              {t("Current Liquidity Available")}
              <strong>{t("32.96M")}</strong>
            </li>
            <li>
              {t("Variable Annual Fee")}
              <strong>{t("2.25%")}</strong>
            </li>
          </ul>
          <button>
            <Link to="/multiply">{t("Preview")}</Link>
          </button>
        </LevelItem>
        <LevelItem>
          <LevelHeader>
            <h3>{t("High Profit")}</h3>
            <LevelHeaderLeft>
              <h1>{t("BOOST")}</h1>
              <p>
                {t("A program with improved team building and development capabilities.")}
              </p>
            </LevelHeaderLeft>
            <img src={BTC} alt="btc" />
          </LevelHeader>
          <h2>{t("Entry cost 500 USDT")} 👇</h2>
          <ul>
            <li>
              {t("Max Multiple")}
              <strong>{t("4.33x")}</strong>
            </li>
            <li>
              {t("Current Liquidity Available")}
              <strong>{t("37.32M")}</strong>
            </li>
            <li>
              {t("Variable Annual Fee")}
              <strong>{t("3.75%")}</strong>
            </li>
          </ul>
          <button>
            <Link to="/multiply">{t("Preview")}</Link>
          </button>
        </LevelItem>
        <LevelItem>
          <LevelHeader>
            <h3>{t("Max Profit")}</h3>
            <LevelHeaderLeft>
              <h1>{t("VIP")}</h1>
              <p>
                {t("Exclusive program with maximum opportunities for teamwork and development.")}
              </p>
            </LevelHeaderLeft>
            <img src={MANA} alt="mana" />
          </LevelHeader>
          <h2>{t("Entry cost 1000 USDT")} 👇</h2>
          <ul>
            <li>
              {t("Max Multiple")}
              <strong>{t("2.33x")}</strong>
            </li>
            <li>
              {t("Current Liquidity Available")}
              <strong>{t("1.00M")}</strong>
            </li>
            <li>
              {t("Variable Annual Fee")}
              <strong>{t("6.00%")}</strong>
            </li>
          </ul>
          <button>
            <Link to="/multiply">{t("Preview")}</Link>
          </button>
        </LevelItem>
      </LevelMain>
    </>
  );
}
