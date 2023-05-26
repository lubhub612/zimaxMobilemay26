import React, { useState } from 'react'
import { SettingsContainer, SideBarMenuContainer } from './styles'
import { MainContent } from './MainContent'
import { SideBar } from './SideBar'
import { useWindowSize } from '../../hooks/useWindowSize'
import { SettingsNavigationBar } from './SettingsNavigationBar'

export const SettingPageSections = {
  profile: 'profile',
  // verification: 'verification',
  notification: 'notification'
}

export const Settings = (props) => {
  const { width } = useWindowSize()
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(true)
  const [activeSection, setActiveSection] = useState(SettingPageSections.profile)

  const handleActiveSection = (selectedSection) => {
    setActiveSection(selectedSection);
  }

  return (
    <SettingsContainer isOpenSideMenu={isOpenSideMenu}>
      {width > 800 && (
        <SideBarMenuContainer style={isOpenSideMenu ? {width: '340px'} : {width: '64px'}}>
          <SideBar 
            {...props}
            activeSection={activeSection}
            handleActiveSection={handleActiveSection}
            isOpenSideMenu={isOpenSideMenu} 
            setIsOpenSideMenu={setIsOpenSideMenu}
            closeSideMenu={() => setIsOpenSideMenu(false)} 
          />
        </SideBarMenuContainer>
      )}
      {width < 800 && (
        <SettingsNavigationBar
          {...props}
          activeSection={activeSection}
          handleActiveSection={handleActiveSection}
          isOpenSideMenu={isOpenSideMenu} 
          setIsOpenSideMenu={setIsOpenSideMenu}
          closeSideMenu={() => setIsOpenSideMenu(false)}
        />
      )}
      <MainContent isOpenRightMenu={isOpenSideMenu} activeSection={activeSection} />
    </SettingsContainer>
  )
}
