import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown';
import BsChevronUp from '@meronex/icons/bs/BsChevronUp';
import {
  IconDropDownContainer,
  IconDropDownSelect,
  IconDropDownSelected,
  IconDropDownList,
  ViewType
} from './styles'

export const IconDropDown = (props) => {
  const {
    viewTypeList,
    initialType,
    onChange
  } = props

  const theme = useTheme()
  const [selectedViewType, setSelectedVewType] = useState(initialType)
  const [isShowViewList, setIsShowViewList] = useState(false)
  const dropdownReference = useRef()

  const handleChangeViewType = (type) => {
    setSelectedVewType(type)
    setIsShowViewList(false)
    onChange && onChange(type)
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

  useEffect(() => {
    if (!initialType) return
    const viewType = viewTypeList.find(type => type.key === initialType)
    setSelectedVewType(viewType)
  }, [initialType])

  return (
    <IconDropDownContainer>
      <IconDropDownSelect>
        <IconDropDownSelected onClick={() => setIsShowViewList(prev => !prev)} ref={dropdownReference}>
          <ViewType>
            {selectedViewType.icon && <img src={selectedViewType.icon} alt={selectedViewType.key} />}
            <span>{selectedViewType.name}</span>
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
                {type.icon && <img src={type.icon} alt={type.key} />}
                <span>{type.name}</span>
              </ViewType>
            ))}
          </IconDropDownList>
        )}
      </IconDropDownSelect>
    </IconDropDownContainer>
  )
}
