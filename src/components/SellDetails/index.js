import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { useLocation } from "react-router-dom";

import {
  SellDetailsContainer,
  CommentContainer,
  MoreDetailWrapper,
  MenuList,
  IconLabelWrapper,
  SvgWrapper,
  OutlineBox
} from "./styles";

import { useAuth } from '../../contexts/AuthContext';
import GradientButton from "../Shared/GradientButton";
import CommentTab from "../Shared/CommentTab";
import UserAvatar from "../Shared/UserAvatar";
import {
  HeartOutlineIcon,
  HeartFillIcon,
  ItemsIcon,
  UserListIcon,
  MoreDetailIcon
} from "../Shared/SvgIcons";
import MainModal from "../Shared/MainModal";
import { OwnedBy } from "../Shared/OwnedBy";

import useToast from "../../hooks/useToast";
import { useGlobal } from "../../contexts/GlobalContext";
import { useCustomWallet } from "../../contexts/WalletContext";
import { useContract } from "../../contexts/ContractContext";
import { useNFTItem } from "../../contexts/NFTContext";
import { useTranslation } from "react-i18next";

export const SellDetails = () => {
  const { t }=useTranslation()
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { wallet } = useCustomWallet()
  const { itemLoaded, favorite, creatorInfo, balance, saleCount, nftSale, comments, requestReloadNFT } = useNFTItem();
  const { collection, tokenId } = useParams();

  const { showLoading, hideLoading, toastSuccess, toastError, toastInfo } = useToast();
  const { invokeServer, copyToClipboard, refreshPage } = useGlobal();

  const [isMenu, setIsMenu] = useState(false)
  const [isImage, setIsImage] = useState(true);
  const [isOwnedModal, setIsOwnedModal] = useState(false)

  const sellTypes = ['Comments', 'Listing', 'Stats', 'Properties', 'Details'];
  const [activeTab, setActiveTab] = useState('Comments');

  const videoRef = useRef();

  const moreDetailRef = useRef()

  const handleClickOutside = (e) => {
    if (!isMenu) return
    const outSideMenu = !moreDetailRef.current?.contains(e.target)
    if (outSideMenu) {
      setIsMenu(false)
    }
  }

  const reloadInfoFunc = () => {
    requestReloadNFT(itemLoaded.collectionAddress, itemLoaded.tokenId);
  }

  const handleSetFavorite = (t) => {
    if (t === true) {
      showLoading('Setting favorite...');

      invokeServer('put', '/api/favorite', {
        contract: itemLoaded.collectionAddress,
        tokenId: itemLoaded.tokenId,
        name: auth.loggedUserName,
        address: wallet.address,
        update: true
      })
        .then(r => {
          hideLoading();
          if (r.data.result === 1) {
            requestReloadNFT(itemLoaded.collectionAddress, itemLoaded.tokenId);
            toastSuccess('Favorite', 'added');
          } else {
            toastError('Favorite', 'failed to add');
          }
        })
        .catch(err => {
          hideLoading();
          toastError('Favorite', err.message);
        })
    } else {
      showLoading('Removing favorite...');

      invokeServer('put', '/api/favorite', {
        contract: itemLoaded.collectionAddress,
        tokenId: itemLoaded.tokenId,
        name: auth.loggedUserName,
        address: wallet.address,
        update: false
      })
        .then(r => {
          hideLoading();
          if (r.data.result === 1) {
            requestReloadNFT(itemLoaded.collectionAddress, itemLoaded.tokenId);
            toastSuccess('Favorite', 'removed');
          } else {
            toastError('Favorite', 'failed to remove');
          }
        })
        .catch(err => {
          hideLoading();
          toastError('Favorite', err.message);
        })
    }
  }

  const handleShare = () => {
    copyToClipboard(window.location.href);
    toastInfo('Copy to clipboard', window.location.href);
  }

  const handleRefresh = () => {
    refreshPage();
    toastInfo('Refresh', 'Page refreshing...');
  }

  const handleReport = () => {
    // Add commnet submit function
    if (itemLoaded.collectionAddress === undefined)
      return;

    showLoading('Reporting...');
    invokeServer('post', '/api/comment', {
      collectionAddress: itemLoaded.collectionAddress,
      tokenId: itemLoaded.tokenId,
      content: `${auth.loggedUserName} reported`,
      user: auth.loggedUserName,
      address: wallet.address,
      role: auth.loggedUserRole,
    })
      .then(r => {
        if (r.data.result === 1) {
          hideLoading();
          toastSuccess(auth.loggedUserName, 'Successfully reported');
          reloadInfoFunc();
        }
      })
      .catch(err => {
        hideLoading();
        toastError(auth.loggedUserName, 'Failed to report');
      })
  }

  useEffect(() => {
    setIsImage(itemLoaded?.video === true ? false : true);
  }, [itemLoaded]);

  useEffect(() => {
    if (isImage) return;
    videoRef.current.play();
  }, [isImage])

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isMenu])

  return (
    <SellDetailsContainer>
      <div className="item-container">
        <div className="media-container">
          {isImage ? (
            <div className="image">
              <img src={itemLoaded?.image} alt='product' />
            </div>
          ) : (
            <div className="media">
              <video src={itemLoaded?.image} preload="auto" autoPlay controls loop muted ref={videoRef}></video>
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
                    <span>{itemLoaded?.totalSupply} {t("item")}{itemLoaded?.totalSupply <= 1 ? '' : 's'}</span>
                  </IconLabelWrapper>
                  <IconLabelWrapper className="owned-by" onClick={() => setIsOwnedModal(true)}>
                    <UserListIcon />
                    <span>{itemLoaded?.holderCount} {t("owner")}{itemLoaded?.holderCount <= 1 ? '' : 's'}</span>
                  </IconLabelWrapper>
                  <IconLabelWrapper>
                    {favorite && (favorite.set === true ? (
                      <SvgWrapper
                        onClick={() => handleSetFavorite(false)}
                      >
                        <HeartFillIcon />
                      </SvgWrapper>
                    ) : (
                      <SvgWrapper
                        onClick={() => {
                          handleSetFavorite(true)
                        }}
                      >
                        <HeartOutlineIcon />
                      </SvgWrapper>
                    ))}
                    <span>{favorite?.count} {t("favorite")}{favorite?.count <= 1 ? '' : 's'}</span>
                  </IconLabelWrapper>
                </div>
              </div>
              <div className="user-detail">
                <div onClick={() => navigate(`/profile/${creatorInfo?.address}`)}>
                  <div className="username-label">{creatorInfo?.name}</div>
                  <div className="username-value">{creatorInfo?.address?.slice(0, 6) + '...' + creatorInfo?.address?.slice(-4)}</div>
                </div>
                <div onClick={() => navigate(`/profile/${creatorInfo?.address}`)}>
                  {
                    creatorInfo.avatarURI && creatorInfo.avatarURI !== '' ?
                      <img src={creatorInfo.avatarURI} alt='' /> :
                      <UserAvatar />
                  }
                </div>
                <MoreDetailWrapper>
                  <span onClick={() => setIsMenu(true)} ref={moreDetailRef}>
                    <MoreDetailIcon />
                  </span>

                  {isMenu && (
                    <MenuList>
                      <div onClick={handleShare}>{t("Share")}</div>
                      <div onClick={handleRefresh}>{t("Refresh")}</div>
                      { auth.isLoggedIn === true? <div onClick={handleReport}>{t("Report")}</div> : <></>}
                    </MenuList>
                  )}
                </MoreDetailWrapper>
              </div>
            </div>
            <div className="description-container">
              {itemLoaded?.description && (
                <p className="description-content">
                  {itemLoaded?.description}
                </p>
              )}
              <div className="action-container">
                <div className="button-container">
                  <div className="button-group">
                    {auth.isLoggedIn && (balance > saleCount ? (
                      <GradientButton
                        label={'Sell now'}
                        height={'42px'}
                        width={'144px'}
                        fontSize={'18px'}
                        isNoPadding
                        handleClick={() => navigate(`/products/${collection}/${tokenId}/sale`)}
                      />
                    ) : (<div className='no-balance'>{t("No one to sell")}</div>)
                    )}
                    {auth.isLoggedIn !== true && (
                      <div className='signin-please'>{t("Please sign-in")}</div>
                    )}
                  </div>
                  {auth.isLoggedIn === true && <OutlineBox>{balance - saleCount}/{balance}</OutlineBox>}
                </div>
              </div>
            </div>
          </div>
          <CommentContainer>
            <CommentTab category={'sell'} types={sellTypes} active={activeTab} setActive={setActiveTab} sales={nftSale} nftItem={itemLoaded} comments={comments} refresh={reloadInfoFunc} />
          </CommentContainer>
        </div>
      </div>

      {isOwnedModal && (
        <MainModal
          title={'Owned by'}
          icon={<UserListIcon />}
          width={'556px'}
          height={'auto'}
          handleClose={() => setIsOwnedModal(false)}>
          <OwnedBy collection={itemLoaded?.collectionAddress} tokenId={itemLoaded?.tokenId}/>
        </MainModal>
      )}
    </SellDetailsContainer>
  );
};
