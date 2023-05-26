import React from 'react'
import {
  PersonSettingSharpIcon,
  UserCircleSharpIcon,
  AlramSharpIcon,
  ArrowLeftIcon,
  ProgressUploadIcon,
  UserCircleFillSharpIcon,
} from '../../Shared/SvgIcons'
import { SettingPageSections } from '..';
import {
  NavigationBarContainer,
  NavigationBarContent,
  MenuItemWrapper
} from './styles'
import { useAuth } from '../../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

export const SettingsNavigationBar = (props) => {
  const {
    activeSection,
    handleActiveSection
  } = props

  const { auth } = useAuth();
const{t}=useTranslation()
  return (
    <>
      <NavigationBarContainer>
        <NavigationBarContent>
          <MenuItemWrapper
            active={SettingPageSections.profile === activeSection}
            onClick={() => handleActiveSection(SettingPageSections.profile)}
          >
            <UserCircleFillSharpIcon />
            <span>{t("Profile")}</span>
          </MenuItemWrapper>  
          <MenuItemWrapper
            active={SettingPageSections.notification === activeSection}
            onClick={() => handleActiveSection(SettingPageSections.notification)}
          >
            <AlramSharpIcon />
            <span>{t("Notifications")}</span>
          </MenuItemWrapper>
        </NavigationBarContent>
      </NavigationBarContainer>
    </>
  )
}