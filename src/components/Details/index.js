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
import { PlaceBid } from './PlaceBid';
import { OwnedBy } from '../Shared/OwnedBy';

import { useCustomWallet } from '../../contexts/WalletContext';
import { useGlobal } from '../../contexts/GlobalContext';
import useToast from '../../hooks/useToast';
import { useSaleItem } from '../../contexts/SaleContext';
import { useContract } from '../../contexts/ContractContext';
import { useData } from '../../contexts/DataContext';
import { useTranslation } from 'react-i18next';

export const Details = (props) => {
  const { category } = props;

  const { collection, tokenId } = useParams();

  const { auth } = useAuth();
  const { wallet } = useCustomWallet();
  const navigate = useNavigate();
  const location = useLocation();

  const { increaseVisitCount } = useData();
  const {
    saleInfo,
    nftItem,
    myFavorite,
    creatorInfo,
    sellerBalance,
    nftSalesOnPurchase,
    commentsOnPurchase,
    reloadSaleInfoToTrade,
  } = useSaleItem();
  const { approveToken, buySale, removeSale } = useContract();

  const { invokeServer, reloadSales, copyToClipboard, refreshPage } =
    useGlobal();
  const { toastSuccess, toastError, toastInfo, showLoading, hideLoading } =
    useToast();

  const [showCheckout, setShowCheckout] = useState(false);
  const [showPlaceBid, setShowPlaceBid] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isImage, setIsImage] = useState(true);
  const [isOwnedModal, setIsOwnedModal] = useState(false);
  const [isEndedSale, setIsEndedSale] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timeRemainingText, setTimeRemainingText] = useState('');
  const { t }= useTranslation();
  const offerTypes = ['Comments', 'Offer', 'Stats', 'Properties', 'Details'];
  const buyTypes = ['Comments', 'Buy', 'Stats', 'Properties', 'Details'];
  const bidTypes = [
    'Bid',
    'Auction',
    'Comments',
    'Stats',
    'Properties',
    'Details',
  ];
  const [activeTab, setActiveTab] = useState(
    category === 'bid' ? 'Bid' : 'Comments'
  );

  const videoRef = useRef();

  const moreDetailRef = useRef();

  const selectTypes = (c) => {
    if (c === 'offer') return offerTypes;
    else if (c === 'buy') return buyTypes;
    else if (c === 'bid') return bidTypes;
  };

  const handleClickOutside = (e) => {
    if (!isMenu) return;
    const outSideMenu = !moreDetailRef.current?.contains(e.target);
    if (outSideMenu) {
      setIsMenu(false);
    }
  };

  useEffect(() => {
    increaseVisitCount(collection, parseInt(tokenId));
  }, [collection, tokenId]);

  const handleSetFavorite = (t) => {
    if (t === true) {
      showLoading('Setting favorite...');

      invokeServer('put', '/api/favorite', {
        contract: nftItem.collectionAddress,
        tokenId: nftItem.tokenId,
        name: auth.loggedUserName,
        address: wallet.address,
        update: true,
      })
        .then((r) => {
          hideLoading();
          if (r.data.result === 1) {
            toastSuccess('Favorite', 'added');
            reloadSaleInfoToTrade();
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
        contract: nftItem.collectionAddress,
        tokenId: nftItem.tokenId,
        name: auth.loggedUserName,
        address: wallet.address,
        update: false,
      })
        .then((r) => {
          hideLoading();
          if (r.data.result === 1) {
            toastSuccess('Favorite', 'removed');
            reloadSaleInfoToTrade();
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

  useEffect(() => {
    setIsImage(nftItem?.video === true ? false : true);
  }, [nftItem]);

  useEffect(() => {
    if (isImage) return;
    videoRef.current.play();
  }, [isImage]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isMenu]);

  useEffect(() => {
    if (saleInfo?.start !== undefined) {
      if (saleInfo.duration > 0) {
        let endTime =
          new Date(saleInfo.start).getTime() / 1000 + saleInfo.duration;
        let nowTime = new Date().getTime() / 1000;

        if (category === 'bid') {
          setTimeRemaining(parseInt(endTime - nowTime));
        }

        if (endTime < nowTime) {
          setIsEndedSale(true);
        }
      }
    }
  }, [saleInfo]);

  useEffect(() => {
    if (saleInfo?.start === undefined) {
      return;
    }

    let ac = new AbortController();

    let timer;
    if (category === 'bid') {
      timer = setTimeout(() => {
        if (ac.signal.aborted === false) {
          let endTime =
            new Date(saleInfo.start).getTime() / 1000 + saleInfo.duration;
          let nowTime = new Date().getTime() / 1000;

          setTimeRemaining((t) => parseInt(endTime - nowTime));
          if (endTime >= nowTime) {
            let days = Math.floor(timeRemaining / (24 * 3600));
            let hours = Math.floor((timeRemaining - days * (24 * 3600)) / 3600);
            let minutes = Math.floor(
              (timeRemaining - days * (24 * 3600) - hours * 3600) / 60
            );
            let seconds = Math.floor(
              timeRemaining - days * (24 * 3600) - hours * 3600 - minutes * 60
            );
            setTimeRemainingText(
              `${days} days - ${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            );
          }
        }
      }, 1000);
    }

    return () => {
      ac.abort();
      if (category === 'bid') {
        clearInterval(timer);
      }
    };
  }, [timeRemaining, saleInfo]);

  const handleBuy = async (saleToBuy) => {
    if (saleToBuy.payment > 0) {
      showLoading(auth.loggedUserName + ` is approving for token payment...`);
      let tx = await approveToken({
        copy: saleToBuy.copy,
        payment: saleToBuy.payment,
        price: saleToBuy.price,
        fee: saleToBuy.fee,
      });
      if (tx === undefined) {
        hideLoading();
        toastError('Approve', 'Cancelled');
        return;
      }
    }

    showLoading(
      auth.loggedUserName +
        ` is buying ${saleToBuy.copy} NFTs from ${saleToBuy.sellerName}...`
    );
    let tx = await buySale({
      user: saleToBuy.sellerName,
      copy: saleToBuy.copy,
      saleId: saleToBuy.saleId,
      payment: saleToBuy.payment,
      price: saleToBuy.price,
      fee: saleToBuy.fee,
    });

    if (tx !== undefined) {
      // console.log('----------------', tx.events.Trade.returnValues);
      await invokeServer('post', '/api/trade', tx.events.Trade.returnValues)
        .then((r) => {
          if (r.data.result === 1) {
            toastInfo('Buy', r.data.msg);
            reloadSales();
            navigate('/explorer');
          } else {
            toastError('Buy', r.data.msg);
          }
        })
        .catch((err) => {
          console.log(err.message);
          toastError('Buy', err.message);
        });
    }
    hideLoading();
  };

  const handleRemoveSale = async (saleToRemove) => {
    showLoading(
      auth.loggedUserName +
        ` is removing his/her sale(${saleToRemove.saleId})...`
    );

    let tx = await removeSale(saleToRemove.saleId);
    if (tx !== undefined) {
      // console.log('----------------', tx.events.RemoveFromSale.returnValues);
      await invokeServer(
        'post',
        '/api/sale/remove',
        tx.events.RemoveFromSale.returnValues
      )
        .then((r) => {
          if (r.data.result === 1) {
            toastInfo('Remove', r.data.msg);
            reloadSales();
            navigate('/explorer');
          } else {
            toastError('Remove', r.data.msg);
          }
        })
        .catch((err) => {
          console.log(err.message);
          toastError('Remove', err.message);
        });
    }
    hideLoading();
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
    if (nftItem.collectionAddress === undefined) return;

    showLoading('Reporting...');
    invokeServer('post', '/api/comment', {
      collectionAddress: nftItem.collectionAddress,
      tokenId: nftItem.tokenId,
      content: `${auth.loggedUserName} reported`,
      user: auth.loggedUserName,
      address: wallet.address,
      role: auth.loggedUserRole,
    })
      .then((r) => {
        if (r.data.result === 1) {
          hideLoading();
          toastSuccess(auth.loggedUserName, 'Successfully reported');
          reloadSaleInfoToTrade();
        }
      })
      .catch((err) => {
        hideLoading();
        toastError(auth.loggedUserName, 'Failed to report');
      });
  };

  return (
    <DetailsContainer>
      <div className="item-container">
        <div className="media-container">
          {isImage ? (
            <div className="image">
              <img src={nftItem?.image} alt="product" />
            </div>
          ) : (
            <div className="media">
              <video
                src={nftItem?.image}
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
                <div className="nft-title">{nftItem?.title}</div>
                <div className="nft-review">
                  <IconLabelWrapper>
                    <ItemsIcon />
                    <span>
                      {nftItem?.totalSupply} {t("item")}
                      {nftItem?.totalSupply <= 1 ? '' : 's'}
                    </span>
                  </IconLabelWrapper>
                  <IconLabelWrapper
                    className="owned-by"
                    onClick={() => setIsOwnedModal(true)}
                  >
                    <UserListIcon />
                    <span>
                      {nftItem?.holderCount} {t("owner")}
                      {nftItem?.holderCount <= 1 ? '' : 's'}
                    </span>
                  </IconLabelWrapper>
                  <IconLabelWrapper>
                    {myFavorite &&
                      (myFavorite.set === true ? (
                        <SvgWrapper onClick={() => handleSetFavorite(false)}>
                          <HeartFillIcon />
                        </SvgWrapper>
                      ) : (
                        <SvgWrapper onClick={() => handleSetFavorite(true)}>
                          <HeartOutlineIcon />
                        </SvgWrapper>
                      ))}
                    <span>
                      {myFavorite?.count} {t("favorite")}
                      {myFavorite?.count <= 1 ? '' : 's'}
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
              {nftItem?.description && (
                <p className="description-content">{nftItem?.description}</p>
              )}
              <div className="action-container">
                <div className="button-container">
                  <div className="button-group">
                    {saleInfo?.seller.toLowerCase() !==
                    wallet.address.toLowerCase() ? (
                      <>
                        {auth.isLoggedIn &&
                          category === 'bid' &&
                          (sellerBalance >= saleInfo?.copy ? (
                            isEndedSale !== true ? (
                              <GradientButton
                                label={'Place a bid'}
                                height={'42px'}
                                width={'144px'}
                                fontSize={'18px'}
                                isNoPadding
                                handleClick={() => setShowPlaceBid(true)}
                              />
                            ) : (
                              <div className="warning">{t("sale ended")}</div>
                            )
                          ) : (
                            <></>
                          ))}
                        {auth.isLoggedIn &&
                          category === 'buy' &&
                          (sellerBalance >= saleInfo?.copy ? (
                            isEndedSale !== true ? (
                              <GradientButton
                                label={'Buy now'}
                                height={'42px'}
                                width={'144px'}
                                fontSize={'18px'}
                                isNoPadding
                                handleClick={() => setShowCheckout(true)}
                              />
                            ) : (
                              <div className="warning">{t("sale ended")}</div>
                            )
                          ) : (
                            <></>
                          ))}
                        {auth?.isLoggedIn !== true && (
                          <div className="warning">{t("Please sign-in")}</div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="nft-owner">
                          {t("You are the seller of this sale")}
                        </div>
                        {isEndedSale === true && (
                          <GradientButton
                            label={'Remove expired sale'}
                            height={'42px'}
                            width={'216px'}
                            fontSize={'18px'}
                            isNoPadding
                            handleClick={() => handleRemoveSale(saleInfo)}
                          />
                        )}
                      </>
                    )}
                  </div>
                  {auth?.isLoggedIn === true && (
                    <OutlineBox>
                      {category === 'buy'
                        ? `${saleInfo?.copy}/${sellerBalance}`
                        : category === 'bid'
                        ? `${saleInfo?.copy}/${sellerBalance}`
                        : ''}
                    </OutlineBox>
                  )}
                  <div className="time-remaining">{timeRemainingText}</div>
                </div>
              </div>
            </div>
          </div>
          <CommentContainer>
            <CommentTab
              category={category}
              types={selectTypes(category)}
              active={activeTab}
              setActive={setActiveTab}
              sales={nftSalesOnPurchase}
              saleInfo={saleInfo}
              nftItem={nftItem}
              comments={commentsOnPurchase}
              refresh={reloadSaleInfoToTrade}
            />
          </CommentContainer>
        </div>
      </div>

      {showCheckout && (
        <MainModal
          title={'Checkout'}
          icon={<FileCheckIcon />}
          width={'556px'}
          height={'756px'}
          handleClose={() => setShowCheckout(false)}
        >
          <CheckoutForm handleProcess={() => handleBuy(saleInfo)} />
        </MainModal>
      )}

      {showPlaceBid && (
        <MainModal
          title={'Place a bid'}
          icon={<SaleNowIcon />}
          width={'556px'}
          height={'559px'}
          handleClose={() => setShowPlaceBid(false)}
        >
          <PlaceBid sales={nftSalesOnPurchase} />
        </MainModal>
      )}

      {isOwnedModal && (
        <MainModal
          title={'Owned by'}
          icon={<UserListIcon />}
          width={'556px'}
          height={'auto'}
          handleClose={() => setIsOwnedModal(false)}
        >
          <OwnedBy
            collection={nftItem?.collectionAddress}
            tokenId={nftItem?.tokenId}
          />
        </MainModal>
      )}
    </DetailsContainer>
  );
};
