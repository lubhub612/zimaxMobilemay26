import React, { useState, useEffect, useRef } from 'react'
import BsChevronDown from '@meronex/icons/bs/BsChevronDown';
import BsChevronUp from '@meronex/icons/bs/BsChevronUp';
import {
  DropDownContainer,
  DropDownSelect,
  DropDownSelected,
  DropDownList,
  ViewType
} from './styles'

export const MainDropDown = (props) => {
  const {
    dataList,
    initialValue,
    selectedPeriod,
    setSelectedPeriod,
    isDarkMode
  } = props

  const [isShowViewList, setIsShowViewList] = useState(false)
  const dropdownReference = useRef()

  const handleChangeViewType = (type) => {
    setSelectedPeriod(type.value)
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
    if (!initialValue) return
    const viewType = dataList?.find(type => type.value === initialValue)
    viewType && setSelectedPeriod(viewType.value)
  }, [initialValue])

  const getName = () => {
    let vv = dataList?.find(type => type.value === selectedPeriod);
    return vv === undefined? '': vv.name;
  }

  return (
    <DropDownContainer>
      <DropDownSelect>
        <DropDownSelected isDarkMode={isDarkMode} onClick={() => setIsShowViewList(prev => !prev)} ref={dropdownReference}>
          <div>{getName()}</div>
          {isShowViewList ? (
            <BsChevronUp />
          ) : (
            <BsChevronDown />
          )}
        </DropDownSelected>
        {isShowViewList && (
          <DropDownList isDarkMode={isDarkMode}>
            {dataList?.map((type, i) => (
              <ViewType key={i} onClick={() => handleChangeViewType(type)} isDarkMode={isDarkMode}>
                <span className={selectedPeriod === type.value ? 'selected' : ''}>{type.name}</span>
              </ViewType>
            ))}
          </DropDownList>
        )}
      </DropDownSelect>
    </DropDownContainer>
  )
}