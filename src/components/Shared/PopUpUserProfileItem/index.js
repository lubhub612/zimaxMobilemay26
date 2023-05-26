import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { LinkItem, PopUpUserProfileItemContainer } from './styles';
import NotificationUserImage from '../../../assets/images/notification-user-sample.png';
import { useCustomWallet } from '../../../contexts/WalletContext';
import { useTranslation } from 'react-i18next';

const PopUpUserProfileItem = (props) => {
  let navigate = useNavigate();
  const { handleLogOut } = useAuth();
  const {t}=useTranslation();
  const { auth } = useAuth();
  const { wallet } = useCustomWallet();

  return (
    <PopUpUserProfileItemContainer>
      <LinkItem onClick={() => navigate('/profile/me')}>{t("Profile")}</LinkItem>
      {/* <LinkItem>Favorites</LinkItem> */}
      <LinkItem onClick={() => navigate('/settings')}>{t("Settings")}</LinkItem>
      <LinkItem onClick={handleLogOut}>Log Out</LinkItem>
    </PopUpUserProfileItemContainer>
  );
};

export default PopUpUserProfileItem;
