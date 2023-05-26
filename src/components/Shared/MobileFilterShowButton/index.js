import React from 'react';
import { MobileFilterShowButtonContainer } from './styles';
import FilterIcon from '../../../assets/images/filter-icon.svg'
import { useTranslation } from 'react-i18next';

const MobileFilterShowButton = (props) => {
const{t}=useTranslation()
  return (
    <MobileFilterShowButtonContainer onClick={props.handleClick}>
      <button onClick={props.handleClick}>
        <div className="filter-button-content">
          <img src={FilterIcon} alt="filter-icon" width="24" />
          <div className="filter-button-text">{t("Filters")}</div>
        </div>
      </button>
    </MobileFilterShowButtonContainer>
  )
}

export default MobileFilterShowButton;
