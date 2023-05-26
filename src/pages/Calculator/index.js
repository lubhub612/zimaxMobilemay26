import React, { useState, useMemo, useCallback, useEffect } from 'react';

import MenuIcon from '../../assets/images/menu.svg';
import './calculator.css';
import Slider from '../../components/Slider/Slider';

import { numberWithCommas } from '../../utils/numberUtils.ts';

import { TOKEN_SYMBOL, SITE_NAME } from '../../config';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Calculator = ({
  setmobMenu,
  setModal,
  account,
  setAccount,
  ...props
}) => {
  let { chainId, setChainId, tokenPrice, balance, interval, setInit } = props;
  tokenPrice = parseFloat(tokenPrice).toFixed(3);
  balance = parseFloat(balance).toFixed(3);
  // const rate = 1.00140452;
  const rate = 1.00000749000;
  const currentApy = (
    100 *
    (rate ** ((365 * 24 * 3600) / interval) - 1)
  ).toFixed(1);
  const [parentVal, setParentVal] = useState(30);

  const sliderValueChanged = useCallback((val) => {
    // console.log("NEW VALUE", val);
    setParentVal(val);
  });

  const sliderProps = useMemo(
    () => ({
      min: 1,
      max: 365,
      value: parentVal,
      step: 0,
      label: '',
      onChange: (e) => sliderValueChanged(e),
    }),
    [parentVal]
  );
  const { t } = useTranslation();
  const [amount, setAmount] = useState(0);
  const [apy, setAPY] = useState(currentApy);
  const [price1, setPrice1] = useState(tokenPrice);
  const [price2, setPrice2] = useState(tokenPrice);

  const handleAmountChange = useCallback((e) => {
    setAmount(e.target.value);
  });

  const handleAmountMax = useCallback((e) => {
    setAmount(balance);
  });

  const handleAPYChange = useCallback((e) => {
    setAPY(e.target.value);
  });

  const handleAPYCurrent = useCallback((e) => {
    setAPY(currentApy);
  });

  const handlePrice1Change = useCallback((e) => {
    setPrice1(e.target.value);
  });

  const handlePrice1Current = useCallback((e) => {
    setPrice1(tokenPrice);
  });

  const handlePrice2Change = useCallback((e) => {
    setPrice2(e.target.value);
  });

  const handlePrice2Current = useCallback((e) => {
    setPrice2(tokenPrice);
  });

  const [initialInvest, setInitialInvest] = useState(0);
  const [currentWealth, setCurrentWealth] = useState(0);
  const [rewardsEstimation, setRewardsEstimation] = useState(0);
  const [potentialReturn, setPotentialReturn] = useState(0);

  useEffect(() => {
    setInitialInvest((amount * price1).toFixed(3));
    setCurrentWealth((amount * tokenPrice).toFixed(3));
    let rewards = 0;
    rewards = ((apy / 100) ** (parentVal / 365) * amount).toFixed(3);

    setRewardsEstimation(rewards);
    setPotentialReturn((rewards * price2).toFixed(3));
  }, [amount, currentApy, price1, price2, parentVal]);

  return (
    <>
      <div className="cal-content-title">
        <h2>{t('ZiMax token APY% Interest Calculator')}</h2>
      </div>
      <div className="root-container">
        <div className="main-container">
          <div className="main-container-area">
            <div className="calc-container">
              <div className="calc-price-container">
                <div className="calc-price-wrap">
                  <h3>
                    {TOKEN_SYMBOL}
                    {t('Price')}
                  </h3>
                  <h2>${numberWithCommas(tokenPrice)}</h2>
                </div>
                <div className="calc-price-wrap">
                  <h3>{t('Current APY')}</h3>
                  <h2>≈{currentApy}%</h2>
                </div>
                <div className="calc-price-wrap mob-mt">
                  <h3>
                    {t('Your')} {TOKEN_SYMBOL} {t('Balance')}
                  </h3>
                  <h2>
                    {numberWithCommas(balance)} {TOKEN_SYMBOL}
                  </h2>
                </div>
              </div>
              <div className="calc-grid-container">
                <div className="field-wrap">
                  <span>
                    {TOKEN_SYMBOL} {t('Amount')}
                  </span>
                  <div className="field">
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      value={amount}
                      placeholder="Amount"
                      onChange={handleAmountChange}
                    />
                    <span onClick={handleAmountMax}>{t('Max')}</span>
                  </div>
                </div>
                <div className="field-wrap">
                  <span>{t('APY')} (%)</span>
                  <div className="field">
                    <input
                      type="number"
                      name="apy"
                      id="apy"
                      value={currentApy}
                      placeholder="APY"
                      onChange={handleAPYChange}
                    />
                    <span onClick={handleAPYCurrent}>{t('Current')}</span>
                  </div>
                </div>
                <div className="field-wrap">
                  <span>
                    {TOKEN_SYMBOL} {t('price at purchase')} ($)
                  </span>
                  <div className="field">
                    <input
                      type="number"
                      name="price1"
                      id="price1"
                      value={price1}
                      placeholder="Price"
                      onChange={handlePrice1Change}
                    />
                    <span onClick={handlePrice1Current}>{t('Current')}</span>
                  </div>
                </div>
                <div className="field-wrap">
                  <span>
                    {t('Future')} {TOKEN_SYMBOL} {t('market price')} ($)
                  </span>
                  <div className="field">
                    <input
                      type="number"
                      name="price2"
                      id="price2"
                      value={price2}
                      placeholder="Price"
                      onChange={handlePrice2Change}
                    />
                    <span onClick={handlePrice2Current}>{t('Current')}</span>
                  </div>
                </div>
              </div>
              <Slider {...sliderProps} classes="additional-css-classes" />
              {/* <Slider/> */}
              <div className="calc-matrix color-white">
                <div className="data">
                  <p>{t('Your initial investment')}</p>
                  <span>${initialInvest}</span>
                </div>
                <div className="data">
                  <p>{t('Current wealth')}</p>
                  <span>${currentWealth}</span>
                </div>
                <div className="data">
                  <p>
                    {TOKEN_SYMBOL} {t('Rewards')}
                  </p>
                  <span>{rewardsEstimation}</span>
                </div>
                <div className="data">
                  <p>{t('Potential return')}</p>
                  <span>${potentialReturn}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="buy-zmx-token">
            <Link to="/token">Buy ZMX</Link>
          </div>
        </div>
      </div>
    </>
  );
};
