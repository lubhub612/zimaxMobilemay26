import React, { useState, useEffect } from 'react';
import {
  OfferSectionContainer,
  OfferSectionHeader,
  OfferSectionBody,
  OfferTable,
  EventCreatorProfile,
  EventUserProfile,
  EventActionProfile
} from './styles';
import { useTheme } from 'styled-components';
import { EmptyActivityIcon, ActionCheckIcon, ActionCloseIcon } from '../SvgIcons';
import { useGlobal } from '../../../contexts/GlobalContext';
import { useCustomWallet } from '../../../contexts/WalletContext';
import { useParams } from 'react-router-dom';
import eventCreatorAvatar from '../../../assets/images/EventCreatorAvatar.png';
import { useContract } from '../../../contexts/ContractContext';
import useToast from '../../../hooks/useToast';
import { useAuth } from '../../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

const OfferSection = () => {

  const { auth } = useAuth();
  const theme = useTheme();
  const { address } = useParams()
  const { removeOffer, acceptOffer } = useContract()
  const { showLoading, hideLoading, toastInfo, toastSuccess, toastError } = useToast();

  const [offerList, setOfferList] = useState([])
  const [offerListRows, setOfferListRows] = useState([])
  const [users, setUsers] = useState([])
  const [nfts, setNFTs] = useState([]);
  const { wallet } = useCustomWallet()

  const { invokeServer } = useGlobal();

  // const offerList = [
  //   {id: 1, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 2, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 3, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 4, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 5, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 6, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 7, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  // ]

  useEffect(() => {
    let ac = new AbortController();
    let addressNow = address;
    if (addressNow === 'me') addressNow = wallet.address;

    invokeServer('get', `/api/offer?owner=${addressNow.toLowerCase()}`)
      .then(r => {
        if (ac.signal.aborted === false) {
          if (r.data.result === 1) {
            setOfferList(t => r.data.offers);
          }
        }
      })
      .catch(err => {
        console.log(`${err.message}`)
      })

    invokeServer('get', `/api/user?all=`)
      .then(r => {
        if (ac.signal.aborted === false) {
          if (r.data.result === 1) {
            setUsers(t => r.data.users);
          }
        }
      })
      .catch(err => {
        console.log(`${err.message}`)
      })

    invokeServer('get', `/api/nft`)
      .then(r => {
        if (ac.signal.aborted === false) {
          setNFTs(t => r.data.nft);
        }
      })
      .catch(err => {
        console.log(`${err.message}`)
      })

    return () => ac.abort();
  }, [wallet.address])

  const renderItemField = (ofr) => {
    let nftFound = nfts.filter(t => t.collectionAddress.toLowerCase() === ofr.collectionAddress.toLowerCase() && t.tokenId === ofr.tokenId);
    let nftAvatar = eventCreatorAvatar;
    let nftName = '---';
    let creator = '';
    if (nftFound?.length > 0) {
      nftAvatar = nftFound[0].avatarURI;
      nftName = nftFound[0].title;
      creator = nftFound[0].creatorName;
    }

    return (
      <EventCreatorProfile>
        <img src={nftAvatar} alt='nft' />
        <div>
          <div className="title">{creator}</div>
          <div className="value">{nftName}</div>
        </div>
      </EventCreatorProfile>
    )
  }

  const renderPriceField = (activity) => {
    switch (activity.paymentName) {
      case 'ZMX':
        return (
          <div className="price-div">
            <img src={theme.images.chainTokenIcon} alt='ZMX' />
            <div>{activity.price}</div>
          </div>
        )
      case 'BNB':
        return (
          <div className="price-div">
            <img src={theme.images.binanceTokenIcon} alt='bnb' />
            <div>{activity.price}</div>
          </div>
        )
      case 'BUSD':
        return (
          <div className="price-div">
            <img src={theme.images.binanceUsdIcon} alt='busd' />
            <div>{activity.price}</div>
          </div>
        )
      default:
        return (
          <div className="price-div">
            <div>{activity.basePrice} {activity.paymentName}</div>
          </div>
        )
    }
  }
const{t}=useTranslation()
  const renderUser = (address) => {
    let user = users.find(user => user.address.toLowerCase() === address.toLowerCase())

    let userAvatar = user?.avatarURI || eventCreatorAvatar;
    return (
      <EventUserProfile>
        <img src={userAvatar} alt='nft' />
        <div>
          <div className="value">{user?.name || '---'}</div>
        </div>
      </EventUserProfile>
    )
  }

  const renderTimeLeft = (ofr) => {
    let nowTick = (new Date()).getTime();
    let tLeft = ((new Date(ofr.start).getTime() + ofr.duration * 1000) - nowTick) / 1000;
    let days = parseInt(tLeft / (3600 * 24));
    let hours = parseInt((tLeft - days * 24 * 3600) / 3600);
    let minutes = parseInt((tLeft - days * 24 * 3600 - hours * 3600) / 60);
    let exp_date = (days > 0 ? `${days} days ` : '') + (hours > 0 ? `/ ${hours} h ` : '') + (minutes > 0 ? `/ ${minutes} m` : '');
    if (exp_date.slice(0, 2) == '/ ') exp_date = exp_date.slice(2);
    if (exp_date === '')
      exp_date = 'already expired';
    return exp_date;
  }

  const renderActions = (ofr) => {
    let nowTick = (new Date()).getTime();
    let tLeft = ((new Date(ofr.start).getTime() + ofr.duration * 1000) - nowTick) / 1000;
    return (
      <EventActionProfile>
        {tLeft < 0 ? <></> : <div onClick={() => handleAcceptOffer(ofr)}><ActionCheckIcon /></div>}
        <div onClick={() => handleCloseOffer(ofr)}><ActionCloseIcon /></div>
      </EventActionProfile>
    )
  }

  useEffect(() => {
    if (offerList.length > 0) {
      setOfferListRows(allRows =>
        offerList.map(ofr => {
          return (
            <tr key={ofr._id}>
              <td>{t("offer")}</td>
              <td>{renderItemField(ofr)}</td>
              <td>{renderPriceField(ofr)}</td>
              <td>{ofr.copy}</td>
              <td>{renderTimeLeft(ofr)}</td>
              <td>{renderUser(ofr.address)}</td>
              <td>{renderActions(ofr)}</td>
            </tr>
          )
        })
      )
    } else {
      setOfferListRows(allRows => []);
    }
  }, [offerList, nfts, users])

  const handleAcceptOffer = async (ofr) => {
    showLoading(auth.loggedUserName + ` is accepting an offer from ${ofr.name}...`);
    let tx = await acceptOffer({ saleId: ofr.saleId });

    if (tx !== undefined) {
      await invokeServer('post', '/api/trade', tx.events.Trade.returnValues)
        .then(r => {
          if (r.data.result === 1) {
            toastInfo('Accept offer', r.data.msg);
          } else {
            toastError('Accept offer', r.data.msg);
          }
        })
        .catch(err => {
          console.log(err.message);
          toastError('Accept offer', err.message);
        });
    }
    setOfferList(rows => rows.filter(t => t.saleId !== ofr.saleId))
    hideLoading();
  }

  const handleCloseOffer = async (ofr) => {
    showLoading(auth.loggedUserName + ` is removing an offer from ${ofr.name}...`);
    let tx = await removeOffer({ saleId: ofr.saleId });

    if (tx !== undefined) {
      await invokeServer('post', '/api/offer/remove', {
        saleId: parseInt(tx.events.RemoveFromSale.returnValues.saleId)
      })
        .then(r => {
          if (r.data.result === 1) {
            toastInfo('Offer', r.data.msg);
          } else {
            toastError('Offer', r.data.msg);
          }
        })
        .catch(err => {
          console.log(err.message);
          toastError('Offer', err.message);
        });
    }
    setOfferList(rows => rows.filter(t => t.saleId !== ofr.saleId))
    hideLoading();
  }

  return (
    <OfferSectionContainer>
      <OfferSectionHeader>
        <div className="header-text">{t("Offers")}</div>
      </OfferSectionHeader>
      <OfferSectionBody>
        <OfferTable>
          <table>
            <thead>
              <tr>
                <th>{t("Event")}</th>
                <th>{t("Item")}</th>
                <th>{t("Price")}</th>
                <th>{t("Quantity")}</th>
                <th>{t("Expiration Day")}</th>
                <th>{t("From")}</th>
                <th>{t("Action")}</th>
              </tr>
            </thead>
            <tbody>
              {offerListRows.length > 0 ? offerListRows : (
                <tr>
                  <td colSpan={8} style={{ paddingTop: '100px' }}>
                    <div className="no-result">
                      <EmptyActivityIcon />
                      <div className="empty-text">{t("There Are No stats Yet")}</div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </OfferTable>
      </OfferSectionBody>
    </OfferSectionContainer>
  )
}

export default OfferSection;
