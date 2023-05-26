import React, { useState, useEffect } from 'react'
import { Select } from '../../Shared/Select'
import { Input } from '../../Shared/InputBox'
import NFTInputBox from '../../Shared/NFTInputBox'
import { useTheme } from 'styled-components'
import CheckBox from '../../Shared/CheckBox'

import {
  TimeAuctionContainer,
  MethodContainer,
  CustomLabel,
  Option,
  StartingPriceContainer,
  Description,
  ButtonWrapper,
  TermsOf
} from './styles'
import GradientButton from '../../Shared/GradientButton'
import { useSaleItem } from '../../../contexts/SaleContext'
import { useContract } from '../../../contexts/ContractContext'
import useToast from '../../../hooks/useToast'
import { useAuth } from '../../../contexts/AuthContext'
import { useGlobal } from '../../../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { useCustomWallet } from '../../../contexts/WalletContext'
import { useTranslation } from 'react-i18next'

export const PlaceBid = (props) => {
  const { sales } = props;

  const theme = useTheme()

  const { wallet } = useCustomWallet();
  const { invokeServer, reloadSales } = useGlobal();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { convertPrice, approveToken, placeBid } = useContract();
  const { showLoading, hideLoading, toastInfo, toastSuccess, toastError } = useToast();

  const [price, setPrice] = useState('')
  const [priceUSD, setPriceUSD] = useState('');
  const [isChecked, setIsChecked] = useState('')
  const [maxPrice, setMaxPrice] = useState(0.0);
  const { t }=useTranslation();
  const { saleInfo } = useSaleItem();

  const tokenOptions = [
    { id: 0, value: 'BNB', content: <Option><img src={theme.images.binanceTokenIcon} alt='' /><span>BNB</span></Option> },
    { id: 1, value: 'BUSD', content: <Option><img src={theme.images.binanceUsdIcon} alt='' /><span>BUSD</span></Option> },
    { id: 2, value: 'ZMX', content: <Option><img src={theme.images.chainTokenIcon} alt='' /><span>ZMX</span></Option> }
  ]

  const [tokenOption, setTokenOption] = useState([tokenOptions[0]]);

  const handleChangeCheck = (value) => {
    if (isChecked === 'term') setIsChecked('')
    else setIsChecked(value)
  }

  useEffect(() => {
    let ac = new AbortController();

    if (saleInfo.saleId !== undefined) {
      invokeServer('get', `/api/bid?saleId=${saleInfo.saleId}`)
        .then(r => {
          if (r.data.result === 1) {
            if (ac.signal.aborted === false) {
              let priceList = r.data.bids.map(t => t.bidPrice);
              if (priceList.length > 0)
                setMaxPrice(Math.max(...priceList));
            }
          }
        })
        .catch(err => {
          console.log(err.message);
        })
    }
    return () => ac.abort();
  }, [saleInfo])

  useEffect(() => {
    let curPrice = parseFloat(price);
    if (!isNaN(curPrice) && curPrice < maxPrice) {
      setPrice(maxPrice.toString());
    }
  }, [maxPrice])

  useEffect(() => {
    if (saleInfo.payment !== undefined) {
      let tFound = tokenOptions.filter(t => t.id === saleInfo.payment);
      if (tFound.length > 0) {
        setTokenOption([tFound[0]]);
      } else {
        setTokenOption(
          [{ id: saleInfo.payment, value: saleInfo.paymentName, content: <Option><span>{saleInfo.paymentName}</span></Option> }]
        );
      }

      if (price === '') {
        setPrice(saleInfo.price.toString());
        if (maxPrice === 0.0) {
          setMaxPrice(saleInfo.price);
        }
      }
    }
  }, [saleInfo])

  useEffect(() => {
    setPriceUSD(convertPrice(saleInfo?.payment, price));
  }, [saleInfo?.payment, convertPrice, price])

  const handlePriceChange = (val) => {
    let tt = parseFloat(val);
    // if (isNaN(tt) || tt < saleInfo.price) {
    //   tt = saleInfo.price;
    // }
    setPrice(tt.toString());
  }

  const handlePlaceBid = async () => {
    if (saleInfo.payment > 0) {
      showLoading(auth.loggedUserName + ` is approving for token payment...`);
      let tx = await approveToken({ copy: saleInfo.copy, payment: saleInfo.payment, price: parseFloat(price), fee: saleInfo.fee });
      if (tx === undefined) {
        hideLoading();
        toastError('Approve', 'Cancelled');
        return;
      }
    }

    showLoading(auth.loggedUserName + ` is placing a bid on ${saleInfo.copy} NFTs from ${saleInfo.sellerName}...`);
    let tx = await placeBid({ copy: saleInfo.copy, saleId: saleInfo.saleId, payment: saleInfo.payment, price: parseFloat(price), fee: saleInfo.fee });

    if (tx !== undefined) {
      let evInfo = tx.events.PlaceBid.returnValues;
      await invokeServer('post', '/api/bid', {
        collectionAddress: evInfo.saleInfo.sc.toLowerCase(),
        tokenId: parseInt(evInfo.saleInfo.tokenId),
        saleId: parseInt(evInfo.saleId),
        copy: parseInt(evInfo.saleInfo.copy),
        payment: parseInt(evInfo.saleInfo.payment),
        paymentName: saleInfo.paymentName,
        bidPrice: parseFloat(price),
        priceUSD: parseFloat(priceUSD),
        seller: evInfo.saleInfo.seller.toLowerCase(),
        sellerName: saleInfo.sellerName,
        bidder: wallet.address.toLowerCase(),
        bidderName: auth.loggedUserName
      })
        .then(r => {
          if (r.data.result === 1) {
            toastInfo('Bid', r.data.msg);
            reloadSales();
            navigate('/explorer');
          } else {
            toastError('Buy', r.data.msg);
          }
        })
        .catch(err => {
          console.log(err.message);
          toastError('Buy', err.message);
        });
    }
    hideLoading();
  }

  return (
    <TimeAuctionContainer>
      <MethodContainer>
        <NFTInputBox
          title={`Quantity (${saleInfo.copy})`}
          placeholder={'Enter quantity'}
          name={'quantity'}
          value={saleInfo?.copy}
          onChange={(val) => {
            // let tval = parseInt(val);
            // if (isNaN(tval) || tval <= 0 || tval > saleInfo?.copy) {
            //   tval = 1;
            // }

            // setQuantity(tval);
          }}
        />
      </MethodContainer>
      <CustomLabel>{t("Price per Item")}</CustomLabel>
      <StartingPriceContainer>
        <div className="nft-dropdown-container">
          <Select
            notReload
            placeholder='Select token'
            options={tokenOption}
            defaultValue={tokenOption[0].value}
            onChange={val => console.log(val)}
          />
        </div>
        <div className="nft-input-container">
          <Input
            error={price <= maxPrice}
            type={'number'}
            onChange={e => handlePriceChange(e.target.value)}
            placeholder={`last bid price: ${maxPrice}`}
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
          <span>${parseFloat(priceUSD || 0).toFixed(2)}</span>
        </div>
      </StartingPriceContainer>
      <Description>{t("Total amount expected:")} {parseFloat(price) * saleInfo.copy} {saleInfo?.paymentName}</Description>
      <TermsOf>
        <CheckBox
          id='term'
          label={'By checking this box, I agree to ZiMax Terms of service'}
          isChecked={isChecked === 'term'}
          onChange={val => handleChangeCheck(val)}
        />
      </TermsOf>

      <ButtonWrapper>
        {isChecked === 'term' ? <GradientButton
          label='Commit'
          height='36px'
          width='120px'
          handleClick={handlePlaceBid}
        /> : <GradientButton
          label='Commit'
          height='36px'
          width='120px'
          isDarkMode
          handleClick={() => { }}
        />}
      </ButtonWrapper>
    </TimeAuctionContainer>
  )
}
