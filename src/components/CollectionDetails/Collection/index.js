import React from 'react'
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
        <h1>{name === '' ? collection.title : name}</h1>
        <div className='link'>
          <a href={collection.site}>{collection.site}</a>
        </div>
        <DetailInfoWrapper>
          <DetailInfo>
            <VerifiedIcon />
            <span>{t("Verify")}</span>     
          </DetailInfo>
          <DetailInfo>
            <HeartOutlineIcon />
            <span>{t("211 favorites")}</span>     
          </DetailInfo>
        </DetailInfoWrapper>
        <Description>{description === '' ? collection.description : description}</Description>
      </DetailWrapper>
    </CollectionContainer>
  )
}