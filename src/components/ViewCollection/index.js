import React, { useState, useEffect } from 'react'
import { ViewCollectionContainer, ViewCollectionSideBarMenuContainer } from './styles'
import { ViewCollectionMainContent } from './ViewCollectionMainContent'
import { ViewCollectionSideBar } from './ViewCollectionSideBar'
import { useWindowSize } from '../../hooks/useWindowSize'
import { ViewCollectionNavigatorBar } from './ViewCollectionNavigatorBar'
import { useParams } from 'react-router-dom'
import { useCustomWallet } from '../../contexts/WalletContext'

export const ProfilePageSections = {
  grid: 'grid',
  activity: 'activity',
  offer: 'offer',
  hideNFT: 'hideNFT',
  favorite: 'favorite'
}

export const ViewCollection = (props) => {
  const  {address,data}  = useParams();



  const { width } = useWindowSize()
  const { getWalletAddressBySessionKey } = useCustomWallet();

  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false)
  const [isMoreView, setIsMoreView] = useState(false)
  const [activeSection, setActiveSection] = useState(ProfilePageSections.grid)

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
    <ViewCollectionContainer isOpenRightMenu={isOpenSideMenu}>
      <ViewCollectionMainContent address={addressConv} isOpenRightMenu={isOpenSideMenu} isMoreView={isMoreView} activeSection={activeSection} />
      {width > 768 && (
        <ViewCollectionSideBarMenuContainer style={isOpenSideMenu ? {width: '340px'} : {width: '64px'}}>
          <ViewCollectionSideBar 
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
        </ViewCollectionSideBarMenuContainer>
      )}
      {width < 768 && (
        <ViewCollectionNavigatorBar
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
    </ViewCollectionContainer>
  )
}
