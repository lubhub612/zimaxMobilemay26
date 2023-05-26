import React from 'react';
import { NotificationItemContainer, NotificationItemDetail } from './styles';
import EventCreatorAvatarPng from '../../../assets/images/EventCreatorAvatar.png'

const NotificationItem = (props) => {
  const {
    notification
  } = props

  return (
    <NotificationItemContainer>
      <div className="user-logo">
        <img src={notification.avatarURI || EventCreatorAvatarPng} alt='' />
      </div>
      <NotificationItemDetail>
        <div className="user-name">
          {notification.username}
          <span className="user-comment">{' '}{notification.text}</span>
        </div>
        <div className="sale-date">{notification.timespan}</div>
      </NotificationItemDetail>
    </NotificationItemContainer>
  )
}

export default NotificationItem;
