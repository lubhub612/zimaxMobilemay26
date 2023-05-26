import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  VerifiedIcon,
  HeartOutlineIcon,
  CommentIcon,
} from '../../Shared/SvgIcons';
import BannerPng from '../../../assets/images/setting-banner.png';
import EventCreatorAvatarPng from '../../../assets/images/EventCreatorAvatar.png';

import {
  CreatorContainer,
  HeaderImage,
  CreatorLogoWrapper,
  DetailWrapper,
  DetailInfoWrapper,
  DetailInfo,
  Description,
} from './styles';
import { useTranslation } from 'react-i18next';

export const Creator = (props) => {
  const { creator } = props;
  const { t } =useTranslation();
  const navigate = useNavigate();

  return (
    <CreatorContainer onClick={() => navigate(`/profile/${creator?.address}`)}>
      <HeaderImage bgimage={creator?.coverURI || BannerPng} />
      <CreatorLogoWrapper>
        <img src={creator?.avatarURI || EventCreatorAvatarPng} alt="" />
      </CreatorLogoWrapper>
      <DetailWrapper>
        <h1>{creator?.name}</h1>
        <div className="link">
          <a href={creator?.email}>{creator?.email}</a>
        </div>
        <DetailInfoWrapper>
          <DetailInfo>
            <VerifiedIcon />
            <span>{t("Verify")}</span>
          </DetailInfo>
          <DetailInfo>
            <HeartOutlineIcon />
            <span>{creator?.favoriteCount} {t("favorites")}</span>
          </DetailInfo>
          <DetailInfo>
            <CommentIcon />
            <span>{creator?.commentCount} {t("comments")}</span>
          </DetailInfo>
        </DetailInfoWrapper>
        <DetailInfoWrapper>
          <DetailInfo>
            <span>
              {t("trade volume:")} <span>{creator?.volumeTrade?.toFixed(2)}$</span>
            </span>
          </DetailInfo>
        </DetailInfoWrapper>
        <Description>{creator?.bio}</Description>
      </DetailWrapper>
    </CreatorContainer>
  );
};
