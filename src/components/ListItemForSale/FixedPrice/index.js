import React, { useCallback, useEffect, useState } from 'react'
import { Select } from '../../Shared/Select'
import { useTheme } from 'styled-components'
import { Input } from '../../Shared/InputBox'
import ToggleButton from '../../Shared/ToggleButton'
import NFTInputBox from '../../Shared/NFTInputBox';
import GradientButton from '../../Shared/GradientButton'

import {
  FixedPriceContainer,
  ToggleContainer,
  Option,
  OutlineBox
} from './styles'
import { useContract } from '../../../contexts/ContractContext'
import { useNFTItem } from '../../../contexts/NFTContext'
import { useNavigate } from 'react-router-dom'
import useToast from '../../../hooks/useToast'
import { useGlobal } from '../../../contexts/GlobalContext'
import { useCustomWallet } from '../../../contexts/WalletContext'
import { useAuth } from '../../../contexts/AuthContext'
import { useTranslation } from 'react-i18next'

export const FixedPrice = (props) => {
  const theme = useTheme()
  const { item, defFee } = props;

  const navigate = useNavigate();
  const { showLoading, hideLoading, toastError, toastInfo } = useToast();
  const { invokeServer } = useGlobal();
  const { getWalletAddressBySessionKey } = useCustomWallet();
  const { auth } = useAuth();

  const [isActiveRoyalties, setIsActiveRoyalties] = useState(false)
  const [isReserve, setIsReserve] = useState(false)
  const [paymentIndex, setPaymentIndex] = useState(0);
  const [usdPrice, setUSDPrice] = useState('0.00');
  const { convertPrice, createSale, tokenAmountWithoutDecimal, tokenAmountWithDecimal, getPaymentName } = useContract();
  const [isCustomDate, setIsCustomDate] = useState(false);
  const [customDays, setCustomDays] = useState(7);
  const [defFeeValue, setDefFeeValue] = useState({});
  const [tokenPayments, setTokenPayments] = useState([]);

  const { itemLoaded, balance, saleCount } = useNFTItem();

  const tokenOptions = [
    { id: 0, value: 'BNB', content: <Option><img src={theme.images.binanceTokenIcon} alt='' /><span>BNB</span></Option> },
    { id: 1, value: 'BUSD', content: <Option><img src={theme.images.binanceUsdIcon} alt='' /><span>BUSD</span></Option> },
    { id: 2, value: 'ZMX', content: <Option><img src={theme.images.chainTokenIcon} alt='' /><span>ZMX</span></Option> },
  ]

  const [price, setPrice] = useState('1')
  const [durationTime, setDurationTime] = useState('00:00')
  const [copy, setCopy] = useState(1);
  const { t }=useTranslation();

  const dateListOptions = [
    { days: 3, value: '3_days', content: <Option>3 Days</Option> },
    { days: 7, value: '7_days', content: <Option>7 days </Option> },
    { days: 30, value: 'A_month', content: <Option>A month</Option> },
    { days: 60, value: 'custom', content: <Option>Custom days</Option> }
  ]

  useEffect(() => {
    if (auth.isLoggedIn) {
      invokeServer('get', `/api/creator?info=payment&address=${getWalletAddressBySessionKey()}`)
        .then(r => {
          let ret = r.data.payments;
          let newrs = ret.map(t => {
            let tval = tokenOptions.find(ttt => ttt.id === t.id);
            return {
              id: t.id,
              value: t.name,
              content: tval === undefined? <Option><span>{t.name}</span></Option>: tval.content
            }
          })

          setTokenPayments(tt => newrs);
        })
        .catch(err => {
          console.log(`${err.message}`);
        })
    }
  }, [auth.isLoggedIn, getWalletAddressBySessionKey])

  const handleDateChange = (val) => {
    setIsCustomDate(t => val === 'custom');
    if (val !== 'custom') {
      let item = dateListOptions.find(item => item.value === val);
      item && setCustomDays(item.days);
    }
  }

  const handleCustomDays = (val) => {
    let nval = parseInt(val);
    if (nval >= 0) {
      setCustomDays(t => nval);
    }
  }

  useEffect(() => {
    let res = convertPrice(paymentIndex, price);
    if (res !== null) {
      setUSDPrice(res);
    }
  }, [convertPrice, price, paymentIndex])

  useEffect(() => {
    setDefFeeValue(t => defFee);
  }, [defFee])

  const goToPage = useCallback(() => {
    item.collectionAddress && navigate({
      pathname: `/products/${item.collectionAddress}/${item.tokenId}/sell`
    })
  }, [item])

  const listOnSale = async () => {
    let v = durationTime.split(':');
    v = parseInt(v[0]) * 3600 + parseInt(v[1]) * 60;

    let d = customDays * 24 * 3600 + v;

    showLoading('Creating a fixed price sale...');

    let tx = await createSale({
      saleName: 'fixed price sale',
      collectionAddress: item.collectionAddress,
      tokenId: item.tokenId,
      payment: paymentIndex,
      copy: copy,
      method: 0, // fixed price
      duration: d,
      basePrice: tokenAmountWithoutDecimal(paymentIndex, price),
      fee: defFeeValue.fee * 100,
      royalty: defFeeValue.royalty * 100,
    });

    if (tx !== undefined) {
      let retval = tx.events.ListedOnSale.returnValues;
      let basePrice = tokenAmountWithDecimal(parseInt(retval.saleInfo.payment), retval.saleInfo.basePrice).toString();
      let saleId = parseInt(retval.saleId);

      invokeServer('put', '/api/sale', {
        collectionAddress: retval.saleInfo.sc,
        tokenId: parseInt(retval.saleInfo.tokenId),
        saleId: saleId,
        copy: parseInt(retval.saleInfo.copy),
        method: 0,
        payment: parseInt(retval.saleInfo.payment),
        paymentName: getPaymentName(parseInt(retval.saleInfo.payment)),
        price: parseFloat(basePrice),
        seller: retval.saleInfo.seller,
        fee: parseFloat(retval.saleInfo.feeRatio) / 100,
        royalty: parseFloat(retval.saleInfo.royaltyRatio) / 100,
        duration: parseInt(retval.saleInfo.endTime) - parseInt(retval.saleInfo.startTime)
      })
        .then(r => {
          if (r.data.result === 1) {
            toastInfo('Sale', r.data.msg);
            goToPage();
          } else {
            toastError('Sale', r.data.msg);
          }
        })
        .catch(err => {
          console.log(err.message);
          toastError('Sale', err.message);
        })
    }

    hideLoading();
  }

  return (
    <FixedPriceContainer>
      <div className="price-title">{t("Price per Item")}</div>
      <div className="price-selection">
        <div className="nft-dropdown-container">
          <Select
            notReload
            placeholder='Select token'
            options={tokenPayments}
            defaultValue='BNB'
            onChange={val => {
              let item = tokenPayments.find(item => item.value === val);
              if (item !== undefined) {
                setPaymentIndex(t => item.id);
              }
            }}
          />
        </div>
        <div className="nft-input-container">
          <Input
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder='Amount'
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
          <span>{usdPrice} $</span>
        </div>
      </div>
      <div className="price-description">
        <p>{t("Total amount offered: 0 ZMX")}</p>
      </div>
      <div className="price-title">{t("Duration")}</div>
      <div className="price-dates">
        <Select
          notReload
          options={dateListOptions}
          placeholder='Select date'
          defaultValue='7_days'
          onChange={handleDateChange}
        />
        <NFTInputBox
          placeholder={'Enter Time'}
          name={'durationTime'}
          type={'time'}
          value={durationTime}
          onChange={setDurationTime}
        />
      </div>
      {isCustomDate && (
        <div className='set-custom-date'>
          <Input
            type='number'
            value={customDays}
            onChange={e => handleCustomDays(e.target.value)}
          />
        </div>
      )}
      <div className='copies'>
        <label><span>{t("*")}</span>{t("Copies")}</label>
        <div className='copy-balance'>
          <Input
            type='number'
            value={copy}
            onChange={(e) => {
              let val = parseInt(e.target.value);
              if (isNaN(val))
                val = 1;
              else if (val <= 0 || val + saleCount > balance)
                return;

              setCopy(t => val)
            }}
          />
          <OutlineBox>
            {`${copy}/${balance - saleCount}`}
          </OutlineBox>
        </div>
      </div>

      <ToggleContainer>
        <span>{t("Active Royalties")}</span>
        <ToggleButton
          isChecked={isActiveRoyalties}
          handleToggle={() => {
            if (isActiveRoyalties === true) {
              setDefFeeValue(t => defFee);
            }
            setIsActiveRoyalties(!isActiveRoyalties)
          }}
        />
      </ToggleContainer>
      {isActiveRoyalties && (
        <div className='set-royalites-fee'>
          <label>{t("Set Max 10% Royalties fees")}</label>
          <Input
            type='number'
            value={defFeeValue.royalty}
            onChange={(e) => setDefFeeValue(t => {
              let val = parseFloat(e.target.value);
              if (isNaN(val)) {
                val = defFee.royalty;
              } else if (val > 10) {
                val = 10;
              }

              return { ...t, royalty: val }
            })}
          />
        </div>
      )}
      <ToggleContainer>
        <span>{t("Rerserve for specific buyer")}</span>
        <ToggleButton
          isChecked={isReserve}
          handleToggle={() => setIsReserve(!isReserve)}
        />
      </ToggleContainer>
      {isReserve && (
        <div className='set-reserve'>
          <Input
            placeholder='Wallet Address'
          />
        </div>
      )}
      <div className="price-fees">
        <div className="price-fee-title">{t("Fees")}</div>
        <div className="price-fee-desc">
          <div>{t("Service Fee")}</div>
          <div>{defFeeValue.fee}%</div>
        </div>
        <div className="price-fee-desc">
          <div>{t("Creator royalty")}</div>
          <div>{defFeeValue.royalty}%</div>
        </div>
      </div>
      <GradientButton
        label={'List Now'}
        height={'52px'}
        width={'131px'}
        fontSize={'16px'}
        isNoPadding
        handleClick={() => listOnSale()}
      />
    </FixedPriceContainer>
  )
}
