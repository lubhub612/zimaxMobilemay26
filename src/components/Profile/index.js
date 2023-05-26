import React, { useState, useEffect } from 'react'
import { ProfileContainer, SideBarMenuContainer } from './styles'
import { MainContent } from './MainContent'
import { SideBar } from './SideBar'
import { useWindowSize } from '../../hooks/useWindowSize'
import { ProfileNavigatorBar } from './ProfileNavigatorBar'
import { useParams } from 'react-router-dom'
import { useCustomWallet } from '../../contexts/WalletContext'
import { useTranslation } from 'react-i18next'

export const ProfilePageSections = {
  grid: 'grid',
  activity: 'activity',
  offer: 'offer',
  hideNFT: 'hideNFT',
  favorite: 'favorite'
}

export const Profile = (props) => {
  const { address } = useParams();

  const { width } = useWindowSize()
  const { getWalletAddressBySessionKey } = useCustomWallet();

  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false)
  const [isMoreView, setIsMoreView] = useState(false)
  const [activeSection, setActiveSection] = useState(ProfilePageSections.grid)
  const { t }=useTranslation();
  const [categoryFilter, setCategoryFilter] = useState({})
  const [filterParams, setFilterParams] = useState({
    mintID: {
      minSetting: 0,
      maxSetting: 1000
    },
    price: {
      minSetting: 0,
      maxSetting: 1000
    }
  });

  const [addressConv, setAddressConv] = useState('');

  const handleMoreView = () => {
    setIsMoreView(prev => !prev)
  }

  const handleActiveSection = (selectedSection) => {
    setActiveSection(selectedSection);
  }

  

  useEffect(() => {
    if (address === 'me') {
      setAddressConv(t => getWalletAddressBySessionKey());
    } else {
      setAddressConv(t => address);
    }
  }, [address]);

  return (
    <ProfileContainer isOpenRightMenu={isOpenSideMenu}>
      <MainContent address={addressConv} isOpenRightMenu={isOpenSideMenu} isMoreView={isMoreView} activeSection={activeSection} />
      {width > 768 && (
        <SideBarMenuContainer style={isOpenSideMenu ? {width: '340px'} : {width: '64px'}}>
          <SideBar 
            {...props}
            isMoreView={isMoreView}
            handleMoreView={handleMoreView}
            isOpenSideMenu={isOpenSideMenu} 
            setIsOpenSideMenu={setIsOpenSideMenu}
            closeSideMenu={() => setIsOpenSideMenu(false)} 
            activeSection={activeSection}
            handleActiveSection={handleActiveSection}
            address={addressConv}
            filterParams={filterParams}
            setFilterParams={setFilterParams}
            noFilter
          />
        </SideBarMenuContainer>
      )}
      {width < 768 && (
        <ProfileNavigatorBar
          {...props}
          isMoreView={isMoreView}
          handleMoreView={handleMoreView}
          isOpenSideMenu={isOpenSideMenu} 
          setIsOpenSideMenu={setIsOpenSideMenu}
          closeSideMenu={() => setIsOpenSideMenu(false)} 
          activeSection={activeSection}
          handleActiveSection={handleActiveSection}
          address={addressConv}
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          noFilter
        />
      )}
    </ProfileContainer>
  )
}
