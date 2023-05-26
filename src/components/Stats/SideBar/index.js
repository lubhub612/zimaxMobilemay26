import React from 'react'
import { SideBarContainer, SideBarDiv } from './styles'
import { SideToggleBar } from './styles';
import { SideBarFilterSection } from '../../Shared/SideBarFilterSection'
import { 
  FilterSharpIcon, 
} from '../../Shared/SvgIcons'
import HyperTooltip from '../../Shared/HyperTooltip';

export const SideBar = (props) => {

  const { 
    isOpenSideMenu,
    setIsOpenSideMenu,
    closeSideMenu,
    filterParams,
    setFilterParams,
  } = props

  const updateSelectedSection = (selSection) => {
    setIsOpenSideMenu(true);
  }
  
  return (
    <SideBarContainer>
      {isOpenSideMenu ? ( 
        <SideBarDiv>
            <SideBarFilterSection 
              listType={'event'}
              closeSideMenu={closeSideMenu}
              filterParams={filterParams}
              setFilterParams={setFilterParams}
            />
        </SideBarDiv>
      ) : (
        <SideToggleBar>
          <div className="filter-sharp" onClick={() => updateSelectedSection('filter')}>
            <HyperTooltip text="Filters">
              <FilterSharpIcon />
            </HyperTooltip>
          </div>
        </SideToggleBar>
      )}
    </SideBarContainer>
  );
};