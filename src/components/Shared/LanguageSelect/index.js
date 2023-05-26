import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown';
import BsChevronUp from '@meronex/icons/bs/BsChevronUp';
import {
  LanguageSelectContainer,
  LanguageSelectSelect,
  LanguageSelectSelected,
  LanguageSelectList,
  ViewType
} from './styles'

export const LanguageSelect = (props) => {
  const {
    viewTypeList,
    initialType
  } = props

  const theme = useTheme()
  const [selectedViewType, setSelectedVewType] = useState({
    id: 1, name: 'USA', key: 'USA', icon: theme.images.flagUsa
  })
  const [isShowViewList, setIsShowViewList] = useState(false)
  const dropdownReference = useRef()

  const handleChangeViewType = (type) => {
    setSelectedVewType(type)
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

  useEffect(() => {
    if (!initialType) return
    const viewType = viewTypeList.find(type => type.key === initialType)
    setSelectedVewType(viewType)
  }, [initialType])

  return (
    <LanguageSelectContainer>
      <LanguageSelectSelect>
        <LanguageSelectSelected onClick={() => setIsShowViewList(prev => !prev)} ref={dropdownReference}>
          <ViewType>
            <img src={selectedViewType.icon} alt={selectedViewType.key} />
          </ViewType>
          {isShowViewList ? (
            <BsChevronUp />
          ) : (
            <BsChevronDown />
          )}
        </LanguageSelectSelected>
        {isShowViewList && (
          <LanguageSelectList>
            {viewTypeList.map((type, i) => (
              <ViewType key={i} onClick={() => handleChangeViewType(type)}>
                <img src={type.icon} alt={type.key} />
              </ViewType>
            ))}
          </LanguageSelectList>
        )}
      </LanguageSelectSelect>
    </LanguageSelectContainer>
  )
}
