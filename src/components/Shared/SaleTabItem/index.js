import React, { useEffect, useState } from 'react';
import { SaleTabItemContainer, SaleDetail, DetailWrapper } from './styles';
import UserAvatar from '../UserAvatar';
import GradientButton from '../GradientButton'
import { useCustomWallet } from '../../../contexts/WalletContext';
import { useAuth } from '../../../contexts/AuthContext';
import { useContract } from '../../../contexts/ContractContext';
import useToast from '../../../hooks/useToast';
import { useGlobal } from '../../../contexts/GlobalContext';
import { useNFTItem } from '../../../contexts/NFTContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SaleTabItem = (props) => {
  const {
    data,
    type,
    refresh
  } = props

  const [endDate, setEndDate] = useState('');
  const { wallet } = useCustomWallet();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { showLoading, hideLoading, toastInfo, toastError } = useToast();
  const {t}=useTranslation()
  useEffect(() => {
    let start = (new Date(data.start).getTime()) + data.duration * 1000;
    let endDate = new Date(start);
    setEndDate(t => `${endDate.getFullYear().toString().padStart(4, '0')}/${(endDate.getMonth() + 1).toString().padStart(2, '0')}/${endDate.getDate().toString().padStart(2, '0')} ${endDate.getHours().toString().padStart(2, '0')}:${endDate.getMinutes().toString().padStart(2, '0')}:${endDate.getSeconds().toString().padStart(2, '0')}`);
  }, [data])

  return (
    <SaleTabItemContainer>
      <DetailWrapper>
        <div className="user-logo">
          <UserAvatar />
        </div>
        <SaleDetail>
          <div className="user-name">
            <span className='type'>{data?.copy} {data?.copy <= 1 ? 'copy' : 'copies'} for {data?.price * data?.copy} {data?.paymentName}</span>
            <span className="bought-by">{t("listed by")}</span>
            {data?.sellerName}
            {type === 'listing' && (<span className="bought-by">({data?.method === 0 ? 'fixed price' : data?.method === 1 ? 'auction' : 'offer'})</span>)}
          </div>
          <div className="sale-date">{data?.method === 1 ? 'Starting' : 'Unit'} price: {data?.price} {data?.paymentName}</div>
          <div className="sale-date">{t("Expire at")} {endDate}</div>
        </SaleDetail>
      </DetailWrapper>
      <div className='btn-buy'>
        {data?.seller?.toLowerCase() === wallet.address.toLowerCase() ? <></> :
          (
            auth.isLoggedIn === true?
            <GradientButton
              label='details'
              height={'36px'}
              width={'104px'}
              fontSize={'18px'}
              handleClick={() => {
                let linkType = type;

                if (type === 'listing') {
                  if (data?.method === 0) linkType = 'buy';
                  else if (data?.method === 1) linkType = 'bid';
                  else if (data?.method === 2) linkType = 'offer';
                }

                navigate(`/products/${data.collectionAddress.toLowerCase()}/${data.tokenId}/${data.saleId}/${linkType}`)
                showLoading(`Loading ...`);
                setTimeout(() => {
                  refresh && refresh();
                  hideLoading();
                }, 500);
              }}
              isNoPadding
              isDarkMode
            /> : <></>
          )
        }
      </div>
    </SaleTabItemContainer>
  )
}

export default SaleTabItem;
