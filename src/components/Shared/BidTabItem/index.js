import React, { useEffect, useState } from 'react';
import { BidTabItemContainer, BidDetail, DetailWrapper } from './styles';
import UserAvatar from '../UserAvatar';
import { useTranslation } from 'react-i18next';

const BidTabItem = (props) => {
  const {
    data,
    saleInfo
  } = props
const {t}=useTranslation()
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
      let endDate = new Date((new Date(saleInfo?.start)).getTime() + saleInfo?.duration * 1000);
      setEndDate(t => `${endDate.getFullYear().toString().padStart(4, '0')}/${(endDate.getMonth() + 1).toString().padStart(2, '0')}/${endDate.getDate().toString().padStart(2, '0')} ${endDate.getHours().toString().padStart(2, '0')}:${endDate.getMinutes().toString().padStart(2, '0')}:${endDate.getSeconds().toString().padStart(2, '0')}`);
  }, [data, saleInfo])

  return (
    <BidTabItemContainer>
      <DetailWrapper>
        <div className="user-logo">
          <UserAvatar />
        </div>
        <BidDetail>
          <div className="user-name">
            <span className='type'>{data?.copy} {data?.copy <= 1 ? 'copy' : 'copies'} for {data?.bidPrice * data?.copy} {data?.paymentName}</span>
            <span className="bought-by">{t("bid by")}</span>
            {data?.bidderName}
          </div>
          <div className="sale-date">{t("bid price:")} {data?.bidPrice} {data?.paymentName}</div>
          <div className="sale-date">{t("Expire at")} {endDate}</div>
        </BidDetail>
      </DetailWrapper>
    </BidTabItemContainer>
  )
}

export default BidTabItem;
