import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import {
  PersonSettingSharpIcon,
  UserCircleSharpIcon,
  FourGridIcon,
  NineGridIcon,
  GraphIcon,
  EyeHideIcon,
  MoreIcon,
  MakeOfferIcon,
  ProgressUploadSharpIcon,
  GrayEyeIcon
} from '../../Shared/SvgIcons'
import { useAuth } from '../../../contexts/AuthContext';
import {
  NavigationBarContainer,
  NavigationBarContent,
  MenuItemWrapper
} from './styles'
import { ProfilePageSections } from '..';
import { useCustomWallet } from '../../../contexts/WalletContext';
import { useTranslation } from 'react-i18next';

export const ViewCollectionNavigatorBar = (props) => {
  const {
    isMoreView,
    handleMoreView,
    isOpenSideMenu,
    setIsOpenSideMenu,
    closeSideMenu,
    activeSection,
    handleActiveSection,
    filterParams,
    setFilterParams,
    address,
    noFilter
  } = props

  const { auth } = useAuth();
  const navigate = useNavigate()
  const [isExpand, setIsExpand] = useState(false)
  const [isOperator, setIsOperator] = useState(false)
  const { wallet } = useCustomWallet();

  useEffect(() => {
    console.log('------------------', wallet.address.toLowerCase(), address.toLowerCase());
    setIsOperator(t => wallet.address.toLowerCase() === address.toLowerCase());
  }, [wallet.address, address])
  const{t}=useTranslation()
  const gridHandleOnClick = () => {
    if (activeSection === ProfilePageSections.grid) {
      handleMoreView()
    } else {
      handleActiveSection(ProfilePageSections.grid)
    }
  }

  const handleExpandIcons = () => {
    setIsExpand(!isExpand)
  }

  console.log(ProfilePageSections)

  return (
    <>
      <NavigationBarContainer>
        <NavigationBarContent>
          <MenuItemWrapper
            active={activeSection === ProfilePageSections.grid}
            onClick={() => gridHandleOnClick()}
          >
            {isMoreView ? (
              <FourGridIcon />
            ) : (
              <NineGridIcon />
            )}
            <span>{t("Items")}</span>
          </MenuItemWrapper>
          <MenuItemWrapper
            active={activeSection === ProfilePageSections.activity}
            onClick={() => handleActiveSection(ProfilePageSections.activity)}
          >
            <GraphIcon />
            <span>{t("Activity")}</span>
          </MenuItemWrapper>
          {auth.isLoggedIn && (
            <>
              {/* <MenuItemWrapper
                active={activeSection === ProfilePageSections.hideNFT}
                onClick={() => handleActiveSection(ProfilePageSections.hideNFT)}
              >
                <GrayEyeIcon />
                <span>Hidden</span>
              </MenuItemWrapper> */}

              {
                (isOperator === true) ?
                  <MenuItemWrapper
                    active={activeSection === ProfilePageSections.favorite}
                    onClick={() => handleActiveSection(ProfilePageSections.favorite)}
                  >
                    <UserCircleSharpIcon />
                    <span>{t("Favorites")}</span>
                  </MenuItemWrapper> : <></>
              }
              {
                isExpand && (isOperator === true) ? (
                  <>
                    <MenuItemWrapper
                      active={activeSection === ProfilePageSections.offer}
                      onClick={() => handleActiveSection(ProfilePageSections.offer)}
                    >
                      <MakeOfferIcon />
                      <span>{t("Offer")}</span>
                    </MenuItemWrapper>
                    <MenuItemWrapper
                      onClick={() => navigate('/upload')}
                    >
                      <ProgressUploadSharpIcon />
                      <span>{t("Upload")}</span>
                    </MenuItemWrapper>
                    <MenuItemWrapper
                      onClick={() => navigate('/settings')}
                    >
                      <PersonSettingSharpIcon />
                      <span>{t("Settings")}</span>
                    </MenuItemWrapper>
                  </>
                ) : <></>
              }
              {
                isOperator === true && <MenuItemWrapper
                  onClick={() => handleExpandIcons()}
                >
                  <MoreIcon />
                  <span>{isExpand === true? 'Less': 'More'}</span>
                </MenuItemWrapper>
              }
            </>
          )}

        </NavigationBarContent>
      </NavigationBarContainer>
    </>
  )
}