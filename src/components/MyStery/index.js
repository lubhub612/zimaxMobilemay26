import React from "react";
import { MySteryContainer } from "./styles";
import MySteryBoxImage from '../../assets/images/MySteryBox.png';
import { useTranslation } from "react-i18next";

export const MyStery = () => {
 const { t }=useTranslation();
  return (
    <MySteryContainer>
      <div className="mystery-image">
        <img src={MySteryBoxImage} alt='myStery-img' /> 
      </div>
      <div className="coming-soon-text">{t("COMING SOON")}</div>
      <div className="mystery-text">{t("MyStery Box")}</div>
    </MySteryContainer>
  );
};