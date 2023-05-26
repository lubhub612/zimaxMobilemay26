import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { VerifiedIcon, HeartOutlineIcon } from '../../Shared/SvgIcons'
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
  const {
    collection,
    photo,
    logo,
    name,
    description
  } = props
  const { t } = useTranslation();

  return (
    <CollectionContainer>
      <HeaderImage bgimage={photo ?? collection.photo} />
      <CollectionLogoWrapper>
        <img src={logo ?? collection.logo} alt={collection.title} />
      </CollectionLogoWrapper>
      <DetailWrapper>
        <h1>{name || "ZiMax"}</h1>
        <div className='link'>
          <a href="https://ZiMax.io" referrer='norel' _target='blank'>{t("ZiMax.io")}</a>
        </div>
        <DetailInfoWrapper>
          <DetailInfo>
            <VerifiedIcon />
            <span>{t("Verified")}</span>
          </DetailInfo>
          <DetailInfo>
            <HeartOutlineIcon />
            <span>{t("0 favorites")}</span>
          </DetailInfo>
        </DetailInfoWrapper>
        <Description>{description || 'No description added'}</Description>
      </DetailWrapper>
    </CollectionContainer>
  )
}
