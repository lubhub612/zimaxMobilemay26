import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../contexts/GlobalContext';
import { useCustomWallet } from '../../../contexts/WalletContext';
import NotificationUserImage from '../../../assets/images/notification-user-sample.png';

import {
  OwnedByContainer,
  ItemWrapper,
  DetailWrapper
} from './styles'
import { useTranslation } from 'react-i18next';

export const OwnedBy = (props) => {
  const { collection, tokenId, setOwnerCount } = props;
const{t}=useTranslation()
  const navigate = useNavigate();
  const { wallet } = useCustomWallet();
  const { invokeServer } = useGlobal();
  const [ ownerInfo, setOwnerInfo ] = useState();

  useEffect(() => {
    let ac = new AbortController();
    invokeServer('get', `/api/nft/owner?collectionAddress=${collection.toLowerCase()}&tokenId=${tokenId}`)
      .then(res => {
        if (ac.signal.aborted === false) {
          if (res.data.result === 1) {
            let j;
            let rr = res.data.items;
            setOwnerInfo(t => rr);
            setOwnerCount && setOwnerCount(t => rr.length);
          }
        }
      })
      .catch(err => {
        console.log(`${err.message}`);
      })
    return () => ac.abort();
  }, [collection, tokenId])

  return (
    <OwnedByContainer>
      {ownerInfo && ownerInfo.map((item, i) => (
        item.balance > 0? 
        <ItemWrapper key={i} onClick={() => navigate(`/profile/${item.owner}`)}>
          <DetailWrapper>
            <img src={item.avatarURI? item.avatarURI: NotificationUserImage} alt='' />
            <div>
              <p>{item.name}</p>
              <p>{item.bio}</p>
            </div>
          </DetailWrapper>
          <span><span>{item.balance}</span> {t("items")}</span>
        </ItemWrapper>
        : <></>
      ))}
    </OwnedByContainer>
  )
}
