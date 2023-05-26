import React from 'react';
import { useTranslation } from 'react-i18next';
import NotificationItem from '../NotificationItem';
import { NotificationEmptyIcon } from '../SvgIcons';
import { 
  PopUpNotificationItemContainer
} from './styles';

const PopUpNotificationItem = (props) => {
const{t}=useTranslation()
  const {
    notificationList
  } = props

  return (
    <PopUpNotificationItemContainer>
      <div className="popup-title">
        {t("Notifications")}
      </div>
      {notificationList.length === 0 && (
        <div className="notification-empty">
          <div className="notification-empty-icon">
            <NotificationEmptyIcon />
          </div>
          <div className="title">{t("No notifications yet")}</div>
          <div className="description">{t("Stay tuned! Notifications about your activity will show up here")}</div>
        </div>
      )}
      {notificationList.map(item => (
        <NotificationItem key={item._id} notification={item} />
      ))}
    </PopUpNotificationItemContainer>
  )
}

export default PopUpNotificationItem;
