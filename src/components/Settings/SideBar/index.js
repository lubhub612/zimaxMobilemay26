import React from 'react'
import { useNavigate } from "react-router-dom"
import { SideBarContainer, ToggleButton, SideBarLabel } from './styles'
import { SideToggleBar } from './styles';
import AiOutlineMenu from '@meronex/icons/ai/AiOutlineMenu';
import {
  AlramSharpIcon,
  ArrowLeftIcon,
  PersonSettingSharpIcon,
  ProgressUploadIcon,
  UserCircleFillSharpIcon,
} from '../../Shared/SvgIcons'
import HyperTooltip from '../../Shared/HyperTooltip';
import { SettingPageSections } from '..';
import { useAuth } from '../../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

export const SideBar = (props) => {
const{t}=useTranslation()
  const {
    isOpenSideMenu,
    setIsOpenSideMenu,
    closeSideMenu,
    activeSection,
    handleActiveSection
  } = props

  const navigate = useNavigate();

  const { auth } = useAuth();

  return (
    <SideBarContainer>
      <SideToggleBar>
        <ToggleButton>
          <div className="open-sharp" onClick={() => navigate('/')}>
            <ArrowLeftIcon />
            <div className="icon-group">
              <PersonSettingSharpIcon />
              <div className="icon-text">{t("Account Settings")}</div>
            </div>
          </div>
        </ToggleButton>
        <div style={{ padding: isOpenSideMenu ? "10px" : "5px" }}>
          <div
            className={activeSection === SettingPageSections.profile ? "profile-sharp active" : "profile-sharp"}
            onClick={() => handleActiveSection(SettingPageSections.profile)}
          >
            <HyperTooltip text="Profile">
              <UserCircleFillSharpIcon />
            </HyperTooltip>
            {isOpenSideMenu && (
              <SideBarLabel>{t("Profile")}</SideBarLabel>
            )}
          </div>
          <div
            className={activeSection === SettingPageSections.notification ? "notifications-sharp active" : "notifications-sharp"}
            onClick={() => handleActiveSection(SettingPageSections.notification)}
          >
            <HyperTooltip text="Notifications">
              <AlramSharpIcon />
            </HyperTooltip>
            {isOpenSideMenu && (
              <SideBarLabel>{t("Notifications")}</SideBarLabel>
            )}
          </div>
        </div>
      </SideToggleBar>
    </SideBarContainer>
  );
};