import React, { useState, useEffect, useRef } from 'react'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown';
import BsChevronUp from '@meronex/icons/bs/BsChevronUp';
import {
  NFTDropDownContainer,
  IconDropDownSelect,
  IconDropDownSelected,
  IconDropDownList,
  ViewType
} from './styles'

export const NFTDropDown = (props) => {
  const {
    viewTypeList,
    selectedType,
    handleChange
  } = props
  
  const [isShowViewList, setIsShowViewList] = useState(false)
  const dropdownReference = useRef()

  const handleChangeViewType = (type) => {
    handleChange(type)
    setIsShowViewList(false)
  }

  const closeSelect = (e) => {
    if (isShowViewList) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setIsShowViewList(false)
      }
    }
  }

  useEffect(() => {
    if (isShowViewList) {
      window.addEventListener('click', closeSelect)
      return () => window.removeEventListener('click', closeSelect)
    }
  }, [isShowViewList])

  return (
    <NFTDropDownContainer>
      <IconDropDownSelect>
        <IconDropDownSelected onClick={() => setIsShowViewList(prev => !prev)} ref={dropdownReference}>
          <ViewType>
            <img src={selectedType.icon} alt={selectedType.key} />
            <span>{selectedType.name}</span>
          </ViewType>
          {isShowViewList ? (
            <BsChevronUp />
          ) : (
            <BsChevronDown />
          )}
        </IconDropDownSelected>
        {isShowViewList && (
          <IconDropDownList>
            {viewTypeList.map((type, i) => (
              <ViewType key={i} onClick={() => handleChangeViewType(type)}>
                <img src={type.icon} alt={type.key} />
                <span>{type.name}</span>
              </ViewType>
            ))}
          </IconDropDownList>
        )}
      </IconDropDownSelect>
    </NFTDropDownContainer>
  )
}
