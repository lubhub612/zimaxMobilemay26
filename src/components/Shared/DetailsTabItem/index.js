import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useNFTItem } from '../../../contexts/NFTContext';
import { DetailsTabItemContainer, DetailsItem } from './styles';

const DetailsTabItem = () => {
const{t}=useTranslation()
  const {collection, tokenId} = useParams();

  return (
    <DetailsTabItemContainer>
      <DetailsItem>
        <div className="detail-name">{t("Contract address")}</div>
        <div className="detail-value">{collection.toLowerCase()}</div>
      </DetailsItem>
      <DetailsItem>
        <div className="detail-name">{t("Token ID")}</div>
        <div className="detail-value">{tokenId}</div>
      </DetailsItem>
      <DetailsItem>
        <div className="detail-name">{t("Token standart")}</div>
        <div className="detail-value">{t("ERC-1155")}</div>
      </DetailsItem>
      <DetailsItem>
        <div className="detail-name">{t("Blockchain")}</div>
        <div className="detail-value">"{t("BSC")}"</div>
      </DetailsItem>
    </DetailsTabItemContainer>
  )
}

export default DetailsTabItem;
