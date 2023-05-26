import React, { useEffect, useState } from 'react';
import {
  ActivitySectionContainer,
  ActivitySectionHeader,
  ActivitySectionFilter,
  ActivitySectionBody,
  ActivityTable,
  EventCreatorProfile,
  EventUserProfile
} from './styles';

import BsGraphUp from '@meronex/icons/bs/BsGraphUp';
import { MainDropDown } from '../MainDropDown';
import ProfileStatsChart from '../ProfileStatsChart';
import { useTheme } from 'styled-components';
import { EmptyActivityIcon } from '../SvgIcons';
import { useGlobal } from '../../../contexts/GlobalContext';
import eventCreatorAvatar from '../../../assets/images/EventCreatorAvatar.png';
import { useTranslation } from 'react-i18next';

const ActivitySection = () => {

  const theme = useTheme();
  const [history, setHistory] = useState([]);
  const [historyRows, setHistoryRows] = useState([]);
  const [users, setUsers] = useState([]);
  const { invokeServer } = useGlobal();

  const periodList = [
    { id: 0, name: 'One hour', value: '3600' },
    { id: 1, name: '12 hours', value: '43200' },
    { id: 2, name: 'One day', value: '86400' },
    { id: 3, name: 'Last week', value: '604800' },
    { id: 4, name: 'Last 2 weeks', value: '1209600' },
    { id: 5, name: 'Last month', value: '2592000' },
    { id: 6, name: 'Last 2 months', value: '5184000' },
    { id: 7, name: 'Last 6 months', value: '15552000' },
    { id: 8, name: 'Last year', value: '31104000' },
    { id: 9, name: 'All Time', value: '0' }
  ]

  const activityList = [
    { id: 1, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago' },
    { id: 2, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago' },
    { id: 3, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago' },
    { id: 4, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago' },
    { id: 5, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago' },
    { id: 6, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago' },
    { id: 7, event: 'List', item: 'Joana Bruers', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago' },
  ]

  const [selectedPeriod, setSelectedPeriod] = useState('0');

  const renderPriceField = (activity) => {
    switch (activity.paymentName) {
      case 'ZMX':
        return (
          <div className="price-div">
            <img src={theme.images.chainTokenIcon} alt='ZMX' />
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
        return (
          <div className="price-div">
            <div>{activity.basePrice} {activity.paymentName}</div>
          </div>
        )
    }
  }

  useEffect(() => {
    let ac = new AbortController();

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
    return () => ac.abort();
  }, [])

  const renderItemField = (tt) => {
    let nftAvatar = tt?.image || eventCreatorAvatar;
    return (
      <EventCreatorProfile>
        <img src={nftAvatar} alt='nft' />
        <div>
          <div className="value">{tt?.name || '---'}</div>
        </div>
      </EventCreatorProfile>
    )
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

  useEffect(() => {
    if (history.length > 0) {
      setHistoryRows(allRows =>
        history.map(activity => {
          return (
            <tr key={activity._id}>
              <td>{activity.method}</td>
              <td>{renderItemField(activity)}</td>
              <td>{renderPriceField(activity)}</td>
              <td>{activity.copy}</td>
              <td>{renderUser(activity.seller)}</td>
              <td>{renderUser(activity.winner)}</td>
              <td>{activity.timeAgo}</td>
            </tr>
          )
        })
      )
    }
  }, [history, users])

  return (
    <ActivitySectionContainer>
      <ActivitySectionHeader>
        <BsGraphUp />
        <div className="header-text">{t("Activity")}</div>
      </ActivitySectionHeader>
      <ActivitySectionFilter>
        <MainDropDown
          dataList={periodList}
          initialValue="0"
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
      </ActivitySectionFilter>
      <ActivitySectionBody>
        <ProfileStatsChart period={parseInt(selectedPeriod)} setHistory={setHistory} />
        <ActivityTable>
          <table>
            <thead>
              <tr>
                <th>{t("Event")}</th>
                <th>{t("Item")}</th>
                <th>{t("Price")}</th>
                <th>{t("Quantity")}</th>
                <th>{t("From")}</th>
                <th>{t("To")}</th>
                <th>{t("Time")}</th>
              </tr>
            </thead>
            <tbody>
              {historyRows.length > 0 ? historyRows : (
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
        </ActivityTable>
      </ActivitySectionBody>
    </ActivitySectionContainer>
  )
}

export default ActivitySection;
