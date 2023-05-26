import React, { useState, useEffect } from 'react';
import {
  MakeOfferModalContainer,
  MakeOfferModalOverlayContainer,
  MakeOfferModalContentContainer,
  MakeOfferModalHeaderContainer,
  MakeOfferModalDetailContainer,
  MakeOfferDetailContainer
} from './styles';
import FaUserCircle from '@meronex/icons/fa/FaUserCircle';
import NFTInputBox from '../NFTInputBox';
import { Input } from '../../Shared/InputBox'
import { NFTDropDown } from '../NFTDropDown';
import { useTheme } from 'styled-components';
import GradientButton from '../GradientButton';
import { MainDropDown } from '../MainDropDown';
import CheckBox from '../CheckBox';
import { useContract } from '../../../contexts/ContractContext';
import useToast from '../../../hooks/useToast';
import { useGlobal } from '../../../contexts/GlobalContext';
import { useCustomWallet } from '../../../contexts/WalletContext';
import { useAuth } from '../../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

const MakeOfferModal = (props) => {

  const {
    title,
    icon = <FaUserCircle />,
    width = '418px',
    height = '726px',
    offerInfo,
    nftItem,
    refresh,
    handleClose
  } = props

  const theme = useTheme();
  const { invokeServer } = useGlobal();
  const { auth } = useAuth();
  const { convertPrice, makeOffer, getDefaultFee, tokenAmountWithDecimal, getPaymentName, approveToken } = useContract();
  const { showLoading, hideLoading, toastError, toastInfo } = useToast();
  const { wallet } = useCustomWallet();

  const priceTypeList = [
    { id: 0, name: 'BNB', key: 'BNB', icon: theme.images.binanceTokenIcon },
    { id: 1, name: 'BUSD', key: 'BUSD', icon: theme.images.binanceUsdIcon },
    // { id: 2, name: 'ZMX', key: 'ZMX', icon: theme.images.chainTokenIcon },
  ]

  const [selectedPriceType, setSelectedPriceType] = useState(priceTypeList[0])

  const [price, setPrice] = useState('1')

  const [ownerList, setOwnerList] = useState([]);

  const dateList = [
    { id: 0, days: 3, name: '3 Days', value: '3_days' },
    { id: 1, days: 7, name: '7 days', value: '7_days' },
    { id: 2, days: 30, name: 'A month', value: 'A_month' },
    { id: 3, days: 1, name: 'Custom date', value: 'custom' }
  ]

  const [selectedPeriod, setSelectedPeriod] = useState('7_days');
  const [customDays, setCustomDays] = useState(7);
  const [isCustomDate, setIsCustomDate] = useState(false);
  const [durationTime, setDurationTime] = useState('00:00')
  const [quantity, setQuantity] = useState('1')
  const [maxQuantity, setMaxQuantity] = useState(0)
  const [isTermsChecked, setIsTermsChecked] = useState(false)
  const [ownerInfo, setOwnerInfo] = useState();

  const [ownerToOffer, setOwnerToOffer] = useState('');

  const [defFeeValue, setDefFeeValue] = useState({});

  useEffect(() => {
    let ac = new AbortController();

    getDefaultFee()
      .then(res => {
        if (ac.signal.aborted != true) {
          setDefFeeValue(res);
        }
      })
      .catch(err => {
        console.log(err.message);
      })
    return () => ac.abort();
  }, [getDefaultFee])

  useEffect(() => {
    let ac = new AbortController();
    if (nftItem.collectionAddress !== undefined) {
      invokeServer('get', `/api/nft/owner?collectionAddress=${nftItem.collectionAddress.toLowerCase()}&tokenId=${nftItem.tokenId}`)
        .then(res => {
          if (ac.signal.aborted === false) {
            if (res.data.result === 1) {
              let j;
              let rr = res.data.items;
              setOwnerInfo(t => rr);
            }
          }
        })
        .catch(err => {
          console.log(`${err.message}`);
        })
    }
    return () => ac.abort();
  }, [nftItem])

  useEffect(() => {
    if (ownerInfo !== undefined) {
      setOwnerList(t => {
        return offerInfo.owners.map((owner, index) => {
          let titem = ownerInfo.filter(tf => tf.owner.toLowerCase() === owner.owner.toLowerCase());
          return {
            id: index,
            balanceLeft: owner.balanceLeft,
            value: index.toString(),
            address: owner.owner,
            avatar: titem.length > 0 ? titem[0].avatarURI : '',
            name: titem.length > 0 ? `${titem[0].name} - ${owner.balanceLeft}` : owner.balanceLeft.toString()
          }
        }).filter(a => a.address.toLowerCase() !== wallet.address);
      })

      if (offerInfo.owners.length > 0) {
        setOwnerToOffer('0');
      }
    }
  }, [offerInfo, ownerInfo, wallet.address])

  useEffect(() => {
    let tt = ownerList.find(t => t.value === ownerToOffer);
    if (tt !== undefined) {
      setMaxQuantity(tt.balanceLeft);
    }
  }, [ownerToOffer])
const{t}=useTranslation()
  const handleDateChange = (val) => {
    setIsCustomDate(t => val === 'custom');
    if (val !== 'custom') {
      let item = dateList.find(item => item.value === val);
      item && setCustomDays(item.days);
    }

    setSelectedPeriod(val);
  }

  const handleCustomDays = (val) => {
    let nval = parseInt(val);
    if (nval >= 0) {
      setCustomDays(t => nval);
    }
  }

  const handleQuantity = (val) => {
    let vv = parseInt(val);
    if (isNaN(vv) || vv < 1) {
      vv = 1;
    }

    if (isNaN(vv) || vv > maxQuantity) {
      vv = maxQuantity;
    }

    setQuantity(vv.toString());
  }

  const commitOffer = async () => {
    let v = durationTime.split(':');
    v = parseInt(v[0]) * 3600 + parseInt(v[1]) * 60;

    let d = customDays * 24 * 3600 + v;

    let tt = ownerList.find(t => t.value === ownerToOffer);

    if (ownerToOffer === '' || tt === undefined) {
      toastError("Error", 'owner has not been set yet');
      return;
    }

    try {
      let paymentIndex = selectedPriceType.id;

      if (paymentIndex > 0) {
        showLoading(auth.loggedUserName + ` is approving for token payment...`);
        let tx = await approveToken({ copy: parseInt(quantity), payment: paymentIndex, price: parseFloat(price), fee: defFeeValue.fee });
        if (tx === undefined) {
          hideLoading();
          toastError('Approve', 'Cancelled');
          return;
        }
      }

      let ta = ownerInfo.find(t => t.address.toLowerCase() === tt.address.toLowerCase());

      showLoading(`Making an offer to ${ta.name}...`);

      let tx = await makeOffer({
        collectionAddress: offerInfo.collectionAddress,
        tokenId: offerInfo.tokenId,
        payment: paymentIndex,
        owner: tt.address.toLowerCase(),
        copy: parseInt(quantity),
        duration: d,
        price: parseFloat(price),
        fee: defFeeValue.fee
      });

      if (tx !== undefined) {
        let retval = tx.events.MakeOffer.returnValues;

        let basePrice = tokenAmountWithDecimal(parseInt(retval.ti.payment), retval.ti.basePrice).toString();
        let saleId = parseInt(retval.saleId);
        let sellerProfile = ownerInfo.find(t => t.address.toLowerCase() === retval.ti.seller.toLowerCase());

        let priceUSD = convertPrice(parseInt(retval.ti.payment), price);

        invokeServer('put', '/api/offer', {
          saleId: saleId,
          collectionAddress: retval.ti.sc.toLowerCase(),
          tokenId: parseInt(retval.ti.tokenId),
          seller: retval.ti.seller.toLowerCase(),
          sellerName: sellerProfile?.name,
          copy: parseInt(retval.ti.copy),
          price: parseFloat(basePrice),
          priceUSD: parseFloat(priceUSD),
          payment: parseInt(retval.ti.payment),
          paymentName: getPaymentName(parseInt(retval.ti.payment)),
          duration: parseInt(retval.ti.endTime) - parseInt(retval.ti.startTime),
          address: wallet.address.toLowerCase(),
          name: auth.loggedUserName
        })
          .then(r => {
            if (r.data.result === 1) {
              refresh && refresh();
              toastInfo('Offer', r.data.msg);
            } else {
              toastError('Offer', r.data.msg);
            }
          })
          .catch(err => {
            console.log(err.message);
            toastError('Offer', err.message);
          })
      }
    } catch (err) {
      console.log(`${err.message}`);
    }

    handleClose();
    hideLoading();
  }

  return (
    <MakeOfferModalContainer>
      <MakeOfferModalOverlayContainer onClick={handleClose}></MakeOfferModalOverlayContainer>
      <MakeOfferModalContentContainer width={width} height={height}>
        <MakeOfferModalDetailContainer>
          <MakeOfferModalHeaderContainer>
            <div className="modal-title">
              <div className="modal-title-icon">
                {icon}
              </div>
              <div className="modal-title-text">
                {title} (avg. {nftItem.priceUSD.toFixed(2)}$)
              </div>
            </div>
          </MakeOfferModalHeaderContainer>
          <MakeOfferDetailContainer>
            <div className='balance-frame'>
              <div className='balance-item'>
                <div className="owner-title">{t("Select owner")}</div>
                <div className="owner-dropdown">
                  <MainDropDown
                    dataList={ownerList}
                    initialValue='0'
                    selectedPeriod={ownerToOffer}
                    setSelectedPeriod={setOwnerToOffer}
                    debug='1'
                    isDarkMode
                  />
                </div>
              </div>
              <div className='balance-item'>
                <NFTInputBox
                  title={`Quantity (max. ${maxQuantity})`}
                  placeholder={'Enter quantity'}
                  name={'quantity'}
                  type={'text'}
                  value={quantity}
                  onChange={handleQuantity}
                />
              </div>
            </div>
            <div className="price-title">{t("Price per Item")}</div>
            <div className="price-selection">
              <div className="nft-dropdown-container">
                <NFTDropDown
                  viewTypeList={priceTypeList}
                  selectedType={selectedPriceType}
                  handleChange={setSelectedPriceType}
                />
              </div>
              <div className="nft-input-container">
                <NFTInputBox
                  placeholder={'Amount'}
                  name={'price'}
                  type={'number'}
                  value={price}
                  onChange={setPrice}
                />
              </div>
            </div>
            <div className="price-description">
              <p>{t("Total amount offered:")} {price} {selectedPriceType.name} = {convertPrice && convertPrice(selectedPriceType.id, price)} {t("USD")}</p>
            </div>
            <div className="price-title">{t("Offer Expiration")}</div>
            <div className="price-dates">
              <MainDropDown
                dataList={dateList}
                initialValue="7_days"
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={handleDateChange}
                isDarkMode
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
            <div className="temrs-container">
              <CheckBox
                id={1}
                label={'By checking this box, I agree to ZMX’s Terms of service'}
                isChecked={isTermsChecked}
                onChange={val => setIsTermsChecked(prev => !prev)}
              />
            </div>
            {
              isTermsChecked === true ?
                <GradientButton
                  label={'Commit'}
                  height={'36px'}
                  width={'131px'}
                  fontSize={'14px'}
                  isNoPadding
                  handleClick={() => commitOffer()}
                /> :
                <GradientButton
                  label={'Commit'}
                  height={'36px'}
                  width={'131px'}
                  fontSize={'14px'}
                  isNoPadding
                  isDarkMode
                  handleClick={() => null}
                />
            }
          </MakeOfferDetailContainer>
        </MakeOfferModalDetailContainer>
      </MakeOfferModalContentContainer>
    </MakeOfferModalContainer>
  )
}

export default MakeOfferModal;
