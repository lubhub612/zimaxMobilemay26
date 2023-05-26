import React, { useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import videoOverlay from '../../../assets/images/video-overlay.svg';
import { SellNowCardItemContainer, CardAvatar } from './styles';
import FaUserCircle from '@meronex/icons/fa/FaUserCircle';
import AiOutlineHeart from '@meronex/icons/ai/AiOutlineHeart';
import AiOutlineWechat from '@meronex/icons/ai/AiOutlineWechat';
import { useTranslation } from 'react-i18next';

const SellNowCardItem = (props) => {
  const { item } = props;
  const { t } = useTranslation();
  const theme = useTheme();

  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  useEffect(() => {
    if (item.video !== true) return;
    videoRef.current.play();
    const timer = setTimeout(function () {
      videoRef.current.pause();
    }, 5000);
    return () => clearTimeout(timer);
  }, [item.video]);

  return (
    <SellNowCardItemContainer>
      <div className="card-content">
        <div className="card-header">
          <CardAvatar>
            <FaUserCircle color="#38c948" />
          </CardAvatar>
          <div className="item-title">{item?.title}</div>
        </div>
        <div className="card-media">
          {item.video !== undefined &&
            (!item.video ? (
              <div className="card-image-container">
                <img src={item.image} alt="cardimage" />
              </div>
            ) : (
              <div className="card-video-container">
                <video
                  className="card-video"
                  ref={videoRef}
                  src={item.image}
                  muted
                >
                  {t("Your browser does not support playing videos.")}
                </video>
                <div
                  className="card-video-overlay"
                  onMouseOver={handlePlay}
                  onMouseOut={handlePause}
                >
                  <img src={videoOverlay} alt="play" width="24" />
                </div>
              </div>
            ))}
        </div>
        <div className="card-details">
          <div className="card-action-detail">
            <div className="card-favorite">
              <AiOutlineHeart />
              <span>{item && item.favoriteCount}</span>
            </div>
            <div className="card-message">
              <AiOutlineWechat />
              <span>{item && item.commentCount}</span>
            </div>
          </div>
          <div className="card-price-detail">
            <div className="card-price-type">
              <img src={theme.images.chainTokenIcon} alt="price-type" />
              <span>{t("- ZMX")}</span>
            </div>
            <div className="card-price-value">
              {item?.priceUSD?.toFixed(2) || '0.0'} $
            </div>
          </div>
        </div>

        {item.isMultiple && (
          <div className="card-multiple">
            <div className="multiple-tile-1"></div>
            <div className="multiple-tile-2"></div>
          </div>
        )}
      </div>
    </SellNowCardItemContainer>
  );
};

export default SellNowCardItem;
