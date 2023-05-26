import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
  StatsEventTableContainer,
  StatsEventTableSectionBody,
  StatsEventTableSection,
  EventCreatorProfile,
  EventTimeFieldDiv,
  EventUserProfile
} from './styles';
import { useTheme } from 'styled-components';
import { EmptyActivityIcon, ExternalLinkIcon } from '../SvgIcons';
import eventCreatorAvatar from '../../../assets/images/EventCreatorAvatar.png';
import { useTranslation } from 'react-i18next';

const StatsEventTable = (props) => {

  const { eventList, nftFiltered, users } = props
  const {t}=useTranslation()
  const theme = useTheme();
  const [eventRows, setEventRows] = useState([]);

  useEffect(() => {

    if (eventList?.length > 0) {
      let rows = eventList.map((event, idx) => (
        <tr key={idx}>
          <td>{event.method}</td>
          <td>{renderItemField(event)}</td>
          <td>{renderPriceField(event)}</td>
          <td>{event.copy}</td>
          <td>{renderUser(event.seller)}</td>
          <td>{renderUser(event.winner)}</td>
          <td>{renderTimeField(event)}</td>
        </tr>
      ))

      setEventRows(tt => rows);
    } else {
      setEventRows(t => []);
    }
  }, [eventList, nftFiltered])

  const renderItemField = (event) => {
    let tt = nftFiltered.find(nft => nft.collectionAddress.toLowerCase() === event.collectionAddress.toLowerCase() && nft.tokenId === event.tokenId)

    let nftAvatar = tt?.image || eventCreatorAvatar;
    return (
      <EventCreatorProfile>
        <Link to={`/products/${event.collectionAddress.toLowerCase()}/${event.tokenId}/offer`}>
          <img src={nftAvatar} alt='nft' />
          <div>
            <div className="title">{tt?.creatorName}</div>
            <div className="value">{tt?.title || '---'}</div>
          </div>
        </Link>
      </EventCreatorProfile>
    )
  }

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

  const renderTimeField = (event) => {
    let tLeft = ((new Date()).getTime() - (new Date(event.when)).getTime()) / 1000;
    let days = parseInt(tLeft / (3600 * 24));
    let hours = parseInt((tLeft - days * 24 * 3600) / 3600);
    let minutes = parseInt((tLeft - days * 24 * 3600 - hours * 3600) / 60);
    let exp_date = (days > 0 ? `${days}days/` : '') + (hours > 0 ? `${hours}h/` : '') + (minutes > 0 ? `${minutes}m` : '');
    exp_date = exp_date + ' ago';
    return (
      <EventTimeFieldDiv>
        <div className="value">{exp_date}</div>
        {/* <ExternalLinkIcon /> */}
      </EventTimeFieldDiv>
    )
  }

  const renderPriceField = (activity) => {
    switch (activity.paymentName) {
      case 'ZMX':
        return (
          <div className="price-div">
            <img src={theme.images.chainTokenIcon} alt='ZiMax' />
            <div>{activity.basePrice}</div>
          </div>
        )
      case 'BNB':
        return (
          <div className="price-div">
            <img src={theme.images.binanceTokenIcon} alt='bnb' />
            <div>{activity.basePrice}</div>
          </div>
        )
      case 'BUSD':
        return (
          <div className="price-div">
            <img src={theme.images.binanceUsdIcon} alt='busd' />
            <div>{activity.basePrice}</div>
          </div>
        )
      default:
        break;
    }
  }

  return (
    <StatsEventTableContainer>
      <StatsEventTableSectionBody>
        <StatsEventTableSection>
          <table>
            <thead>
              <tr>
                <th className='width-10'>{t("Event")}</th>
                <th className='width-25'>{t("Item")}</th>
                <th className='width-15'>{t("Price")}</th>
                <th className='width-10'>{t("Quantity")}</th>
                <th className='width-10'>{t("From")}</th>
                <th className='width-10'>{t("To")}</th>
                <th className='width-15'>{t("Time")}</th>
              </tr>
            </thead>
            <tbody>
              {eventRows?.length > 0 ? eventRows : (
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
        </StatsEventTableSection>
      </StatsEventTableSectionBody>
    </StatsEventTableContainer>
  )
}

export default StatsEventTable;
