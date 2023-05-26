import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { VerifiedIcon, HeartOutlineIcon, CommentIcon, FourGridIcon, NineGridIcon } from '../../Shared/SvgIcons'
import {
  CollectionContainer,
  HeaderImage,
  CollectionLogoWrapper,
  DetailWrapper,
  DetailInfoWrapper,
  DetailInfo,
  Description
} from './styles'

export const Collection = (props) => {
  const { collection } = props
  const { t } = useTranslation();
  const navigate = useNavigate()

  return (
    <CollectionContainer
    
    >
      <HeaderImage bgimage={collection.bannerURI}   onClick={() => navigate(`/viewcollection/${collection.walletAddress.toLowerCase()}`,{state :{data : collection}})}/>
      <CollectionLogoWrapper   onClick={() => navigate(`/viewcollection/${collection.walletAddress.toLowerCase()}`,{state :{data : collection}})}>
        <img src={collection.logoURI} alt={collection.name} />
      </CollectionLogoWrapper>
      <DetailWrapper>
        <h1 >{collection.name}</h1>
        <div className='link' onClick={() => navigate(`/profile/${collection.walletAddress.toLowerCase()}`)}>
          <span>{collection.user}</span>
        </div>
        <DetailInfoWrapper>
          <DetailInfo>
            <VerifiedIcon />
            <span>{t("Verify")}</span>     
          </DetailInfo>
          <DetailInfo>
            <HeartOutlineIcon />
            <span>{collection.favoriteCount ?? 0} {t("favorites")}</span>     
          </DetailInfo>
          <DetailInfo>
            <CommentIcon />
            <span>{collection.commentCount ?? 0} {t("comments")}</span>
          </DetailInfo>
        </DetailInfoWrapper>
        <DetailInfoWrapper>
          <DetailInfo>
            <FourGridIcon />
            <span>{collection.tradeCount ?? 0} {t("trades")}</span>
          </DetailInfo>
          <DetailInfo>
            <NineGridIcon />
            <span>{t("Volume")} {collection.tradeVolume?.toFixed(2) ?? 0}$</span>
          </DetailInfo>
        </DetailInfoWrapper>
        <Description>{collection.description}</Description>
      </DetailWrapper>
    </CollectionContainer>
  )
}