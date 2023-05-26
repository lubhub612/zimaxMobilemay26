import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import videoOverlay from '../../../assets/images/video-overlay.svg';
import { CardItemContainer, CardAvatar } from './styles';
import FaUserCircle from '@meronex/icons/fa/FaUserCircle';
import AiOutlineHeart from '@meronex/icons/ai/AiOutlineHeart';
import AiOutlineWechat from '@meronex/icons/ai/AiOutlineWechat';
import Skeleton from 'react-loading-skeleton';
import { useContract } from '../../../contexts/ContractContext';
import { useCustomWallet } from '../../../contexts/WalletContext';
import { useGlobal } from '../../../contexts/GlobalContext';
import { useTranslation } from 'react-i18next';

const CardItem = (props) => {
  const { item, onClick, sale, profileAddress, isSkeleton } = props;
const{t}=useTranslation()
  const theme = useTheme();

  const { convertPrice } = useContract();
  const { wallet } = useCustomWallet();
  const { invokeServer } = useGlobal();

  const [balance, setBalance] = useState(0);
  const [sellerInfo, setSellerInfo] = useState();

  const [isImage, setIsImage] = useState(true);

  const [priceUSD, setPriceUSD] = useState(0.0);

  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef) {
      videoRef?.current?.play().catch((error) => {
        console.log(error);
      });
    }
  };

  const handlePause = () => {
    if (videoRef) {
      videoRef?.current?.pause();
    }
  };

  useEffect(() => {
    sale &&
      sale.method !== 2 &&
      setPriceUSD(parseFloat(convertPrice(sale.payment, sale.price)));
    (!sale || sale.method === 2) && item && setPriceUSD(item.priceUSD);
  }, [convertPrice]);

  useEffect(() => {
    setIsImage(item?.video === undefined || item?.video === false);
  }, [item]);

  useEffect(() => {
    if (isImage || isSkeleton) return;
    if (videoRef) {
      videoRef?.current?.play().catch((error) => {
        console.log(error);
      });
    }
    const timer = setTimeout(function () {
      if (videoRef) {
        videoRef?.current?.pause();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isImage]);

  useEffect(() => {
    let ac = new AbortController();
    if (item?.collectionAddress !== undefined && profileAddress !== undefined) {
      invokeServer(
        'get',
        `/api/nft/owner?collectionAddress=${item.collectionAddress.toLowerCase()}&tokenId=${
          item.tokenId
        }`
      )
        .then((res) => {
          if (ac.signal.aborted === false) {
            if (res.data.result === 1) {
              let j;
              let rr = res.data.items;
              let filtered = rr.filter(
                (r) => r.owner.toLowerCase() === profileAddress.toLowerCase()
              );

              if (filtered.length > 0) setBalance(filtered[0].balance);
            }
          }
        })
        .catch((err) => {
          console.log(`${err.message}`);
        });
    }

    return () => ac.abort();
  }, [profileAddress, item, wallet.address]);

  useEffect(() => {
    let ac = new AbortController();

    if (
      sale?.seller !== undefined ||
      sale?.creator !== undefined ||
      item?.creator !== undefined
    ) {
      invokeServer(
        'get',
        `/api/user?address=${(
          sale?.seller ||
          sale?.creator ||
          item?.creator
        ).toLowerCase()}`
      )
        .then((res) => {
          if (ac.signal.aborted === false) {
            if (res.data.result === 1) {
              let j;
              let rr = res.data.user;
              setSellerInfo((t) => rr);
            }
          }
        })
        .catch((err) => {
          console.log(`${err.message}`);
        });
    }

    return () => ac.abort();
  }, [sale, item]);

  return (
    <CardItemContainer>
      <div className="card-content">
        <div className="card-header">
          <CardAvatar isSkeleton={isSkeleton}>
            {isSkeleton ? (
              <Skeleton width={20} height={20} />
            ) : (
              <>
                {sellerInfo?.avatarURI && sellerInfo?.avatarURI !== '' ? (
                  <img src={sellerInfo?.avatarURI} alt="" />
                ) : (
                  <FaUserCircle color="#38c948" />
                )}
                {sale && <div className="sale-copy">{sale.copy} x</div>}
                {sale && (
                  <div
                    className={
                      sale.method === 0
                        ? 'sale-type sale-buy'
                        : sale.method === 1
                        ? 'sale-type sale-bid'
                        : sale.method === 2
                        ? 'sale-type sale-offer'
                        : ''
                    }
                  >
                    {sale.method === 0
                      ? 'buy'
                      : sale.method === 1
                      ? 'bid'
                      : sale.method === 2
                      ? 'offer'
                      : ''}
                  </div>
                )}
                {profileAddress && (
                  <div className="sale-copy">
                    {balance > 1 ? `${balance} copies` : `${balance} copy`}
                  </div>
                )}
              </>
            )}
          </CardAvatar>
          <div className="nft-title">{item?.title}</div>
        </div>
        <div className="card-media" onClick={onClick}>
          {isSkeleton ? (
            <Skeleton height={230} />
          ) : (
            <>
              {isImage ? (
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
                    onMouseOver={() => handlePlay()}
                    onMouseOut={() => handlePause()}
                  >
                    <img src={videoOverlay} alt="play" width="24" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div className="card-details">
          <div className="card-action-detail">
            {isSkeleton ? (
              <Skeleton width={60} height={14} />
            ) : (
              <>
                <div className="card-favorite">
                  <AiOutlineHeart />
                  <span>{item && item.favoriteCount}</span>
                </div>
                <div className="card-message">
                  <AiOutlineWechat />
                  <span>{item && item.commentCount}</span>
                </div>
              </>
            )}
          </div>
          <div className="card-price-detail">
            <div className="card-price-type">
              {isSkeleton ? (
                <Skeleton width={50} height={10} />
              ) : (
                <>
                  {sale && (
                    <>
                      {sale.payment === 2 && (
                        <img
                          src={theme.images.chainTokenIcon}
                          alt="price-type"
                        />
                      )}
                      <span>
                        {sale.price} {sale.paymentName}
                      </span>
                    </>
                  )}
                  {!sale && (
                    <>
                      <img src={theme.images.chainTokenIcon} alt="price-type" />
                      <span> {t("ZMX")}</span>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="card-price-value">
              {isSkeleton ? (
                <Skeleton width={40} height={10} />
              ) : (
                <span>${priceUSD.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>

        {item?.isMultiple && (
          <div className="card-multiple">
            <div className="multiple-tile-1"></div>
            <div className="multiple-tile-2"></div>
          </div>
        )}
      </div>
    </CardItemContainer>
  );
};

export default CardItem;
