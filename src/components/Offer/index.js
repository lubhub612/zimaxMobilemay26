import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  DetailsContainer,
  CommentContainer,
  MoreDetailWrapper,
  MenuList,
  IconLabelWrapper,
  SvgWrapper,
  OutlineBox,
} from './styles';
import { useTheme } from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import GradientButton from '../Shared/GradientButton';
import mobileLogo from '../../assets/images/logo-mobile.png';
import CommentTab from '../Shared/CommentTab';
import UserAvatar from '../Shared/UserAvatar';
import { useLocation } from 'react-router-dom';
import {
  FileCheckIcon,
  HeartOutlineIcon,
  HeartFillIcon,
  SaleNowIcon,
  VerifiedIcon,
  ItemsIcon,
  UserListIcon,
  MoreDetailIcon,
} from '../Shared/SvgIcons';
import MainModal from '../Shared/MainModal';
import { CheckoutForm } from '../Shared/CheckoutForm';
import MakeOfferModal from '../Shared/MakeOfferModal';
import { OwnedBy } from '../Shared/OwnedBy';

import { useCustomWallet } from '../../contexts/WalletContext';
import { useGlobal } from '../../contexts/GlobalContext';
import useToast from '../../hooks/useToast';
import { useSaleItem } from '../../contexts/SaleContext';
import { useContract } from '../../contexts/ContractContext';
import { useOfferInfo } from '../../contexts/OfferContext';
import { useData } from '../../contexts/DataContext';
import { useTranslation } from 'react-i18next';

export const Offer = (props) => {
  const { category } = props;

  const { collection, tokenId } = useParams();

  const { auth } = useAuth();
  const { wallet } = useCustomWallet();
  const navigate = useNavigate();
  const { increaseVisitCount } = useData();
  const location = useLocation();
  const { t } =useTranslation();
  const {
    itemLoaded,
    favorite,
    comments,
    creatorInfo,
    unlistedInfo,
    reloadSaleInfoToOffer,
    nftSalesOnPurchase,
  } = useOfferInfo();

  const { invokeServer, copyToClipboard, refreshPage } = useGlobal();
  const { toastSuccess, toastError, toastInfo, showLoading, hideLoading } =
    useToast();

  const [showMakeOffer, setShowMakeOffer] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isImage, setIsImage] = useState(true);
  const [isOwnedModal, setIsOwnedModal] = useState(false);
  const [offerInfo, setOfferInfo] = useState();
  const [offerLoaded, setOfferLoaded] = useState([]);

  const offerTypes = ['Comments', 'Offer', 'Stats', 'Properties', 'Details'];
  const [activeTab, setActiveTab] = useState('Comments');

  const videoRef = useRef();

  const moreDetailRef = useRef();

  useEffect(() => {
    increaseVisitCount(collection, parseInt(tokenId));
  }, [collection, tokenId]);

  const handleClickOutside = (e) => {
    if (!isMenu) return;
    const outSideMenu = !moreDetailRef.current?.contains(e.target);
    if (outSideMenu) {
      setIsMenu(false);
    }
  };

  const refreshOfferList = () => {
    invokeServer(
      'get',
      `/api/offer?collectionAddress=${itemLoaded?.collectionAddress.toLowerCase()}&tokenId=${
        itemLoaded?.tokenId
      }`
    )
      .then((r) => {
        setOfferLoaded((t) => r.data.offers);
      })
      .catch((err) => {
        console.log(`${err.message}`);
      });
  };

  const handleSetFavorite = (t) => {
    if (t === true) {
      showLoading('Setting favorite...');

      invokeServer('put', '/api/favorite', {
        contract: itemLoaded.collectionAddress,
        tokenId: itemLoaded.tokenId,
        name: auth.loggedUserName,
        address: wallet.address,
        update: true,
      })
        .then((r) => {
          hideLoading();
          if (r.data.result === 1) {
            toastSuccess('Favorite', 'added');
            reloadSaleInfoToOffer();
          } else {
            toastError('Favorite', 'failed to add');
          }
        })
        .catch((err) => {
          hideLoading();
          toastError('Favorite', err.message);
        });
    } else {
      showLoading('Removing favorite...');

      invokeServer('put', '/api/favorite', {
        contract: itemLoaded.collectionAddress,
        tokenId: itemLoaded.tokenId,
        name: auth.loggedUserName,
        address: wallet.address,
        update: false,
      })
        .then((r) => {
          hideLoading();
          if (r.data.result === 1) {
            toastSuccess('Favorite', 'removed');
            reloadSaleInfoToOffer();
          } else {
            toastError('Favorite', 'failed to remove');
          }
        })
        .catch((err) => {
          hideLoading();
          toastError('Favorite', err.message);
        });
    }
  };

  const handleShare = () => {
    copyToClipboard(window.location.href);
    toastInfo('Copy to clipboard', window.location.href);
  };

  const handleRefresh = () => {
    refreshPage();
    toastInfo('Refresh', 'Page refreshing...');
  };

  const handleReport = () => {
    // Add commnet submit function
    if (itemLoaded.collectionAddress === undefined) return;

    showLoading('Reporting...');
    invokeServer('post', '/api/comment', {
      collectionAddress: itemLoaded.collectionAddress,
      tokenId: itemLoaded.tokenId,
      content: `${auth.loggedUserName} reported`,
      user: auth.loggedUserName,
      address: wallet.address,
      role: auth.loggedUserRole,
    })
      .then((r) => {
        if (r.data.result === 1) {
          hideLoading();
          toastSuccess(auth.loggedUserName, 'Successfully reported');
          reloadSaleInfoToOffer();
        }
      })
      .catch((err) => {
        hideLoading();
        toastError(auth.loggedUserName, 'Failed to report');
      });
  };

  useEffect(() => {
    unlistedInfo && setOfferInfo(unlistedInfo[0]);
  }, [unlistedInfo]);

  useEffect(() => {
    itemLoaded.collectionAddress &&
      setIsImage(itemLoaded?.video === true ? false : true);
    itemLoaded.collectionAddress && refreshOfferList();
  }, [itemLoaded]);

  useEffect(() => {
    if (isImage) return;
    videoRef.current.play();
  }, [isImage]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isMenu]);

  return (
    <DetailsContainer>
      <div className="item-container">
        <div className="media-container">
          {isImage ? (
            <div className="image">
              <img src={itemLoaded?.image} alt="product" />
            </div>
          ) : (
            <div className="media">
              <video
                src={itemLoaded?.image}
                preload="auto"
                autoPlay
                controls
                loop
                muted
                ref={videoRef}
              ></video>
            </div>
          )}
        </div>
        <div className="detail-container">
          <div className="about-container">
            <div className="title-container">
              <div>
                <div className="nft-title">{itemLoaded?.title}</div>
                <div className="nft-review">
                  <IconLabelWrapper>
                    <ItemsIcon />
                    <span>
                      {itemLoaded?.totalSupply} {t("item")}
                      {itemLoaded?.totalSupply <= 1 ? '' : 's'}
                    </span>
                  </IconLabelWrapper>
                  <IconLabelWrapper
                    className="owned-by"
                    onClick={() => setIsOwnedModal(true)}
                  >
                    <UserListIcon />
                    <span>
                      {itemLoaded?.holderCount} {t("owner")}
                      {itemLoaded?.holderCount <= 1 ? '' : 's'}
                    </span>
                  </IconLabelWrapper>
                  <IconLabelWrapper>
                    {favorite &&
                      (favorite.set === true ? (
                        <SvgWrapper onClick={() => handleSetFavorite(false)}>
                          <HeartFillIcon />
                        </SvgWrapper>
                      ) : (
                        <SvgWrapper onClick={() => handleSetFavorite(true)}>
                          <HeartOutlineIcon />
                        </SvgWrapper>
                      ))}
                    <span>
                      {favorite?.count} {t("favorite")}
                      {favorite?.count <= 1 ? '' : 's'}
                    </span>
                  </IconLabelWrapper>
                </div>
              </div>
              <div className="user-detail">
                <div
                  onClick={() => navigate(`/profile/${creatorInfo?.address}`)}
                >
                  <div className="username-label">{creatorInfo?.name}</div>
                  <div className="username-value">
                    {creatorInfo?.address?.slice(0, 6) +
                      '...' +
                      creatorInfo?.address?.slice(-4)}
                  </div>
                </div>
                <div
                  onClick={() => navigate(`/profile/${creatorInfo?.address}`)}
                >
                  {creatorInfo?.avatarURI && creatorInfo?.avatarURI !== '' ? (
                    <img src={creatorInfo?.avatarURI} alt="" />
                  ) : (
                    <UserAvatar />
                  )}
                </div>
                <MoreDetailWrapper>
                  <span onClick={() => setIsMenu(true)} ref={moreDetailRef}>
                    <MoreDetailIcon />
                  </span>

                  {isMenu && (
                    <MenuList>
                      <div onClick={handleShare}>{t("Share")}</div>
                      <div onClick={handleRefresh}>{t("Refresh")}</div>
                      {auth.isLoggedIn === true ? (
                        <div onClick={handleReport}>{t("Report")}</div>
                      ) : (
                        <></>
                      )}
                    </MenuList>
                  )}
                </MoreDetailWrapper>
              </div>
            </div>
            <div className="description-container">
              {itemLoaded?.description && (
                <p className="description-content">{itemLoaded?.description}</p>
              )}
              <div className="action-container">
                <div className="button-container">
                  <div className="button-group">
                    {auth.isLoggedIn && (
                      <>
                        <GradientButton
                          label={'Make Offer'}
                          height={'42px'}
                          width={'144px'}
                          fontSize={'18px'}
                          isNoPadding
                          handleClick={() => setShowMakeOffer(true)}
                        />
                      </>
                    )}
                    {auth?.isLoggedIn !== true && (
                      <div className="warning">{t("Please sign-in")}</div>
                    )}
                  </div>
                  {auth?.isLoggedIn === true && (
                    <OutlineBox>{`${offerInfo?.copy}`}</OutlineBox>
                  )}
                </div>
              </div>
            </div>
          </div>
          <CommentContainer>
            <CommentTab
              category={category}
              types={offerTypes}
              active={activeTab}
              setActive={setActiveTab}
              sales={nftSalesOnPurchase}
              nftItem={itemLoaded}
              comments={comments}
              refresh={reloadSaleInfoToOffer}
              offers={offerLoaded}
            />
          </CommentContainer>
        </div>
      </div>

      {isOwnedModal && (
        <MainModal
          title={'Owned by'}
          icon={<UserListIcon />}
          width={'556px'}
          height={'auto'}
          handleClose={() => setIsOwnedModal(false)}
        >
          <OwnedBy
            collection={itemLoaded?.collectionAddress}
            tokenId={itemLoaded?.tokenId}
          />
        </MainModal>
      )}

      {showMakeOffer && (
        <MakeOfferModal
          title={'Make an Offer'}
          icon={<SaleNowIcon />}
          width={'556px'}
          height={'644px'}
          offerInfo={offerInfo}
          nftItem={itemLoaded}
          refresh={refreshOfferList}
          handleClose={() => setShowMakeOffer(false)}
        ></MakeOfferModal>
      )}
    </DetailsContainer>
  );
};
