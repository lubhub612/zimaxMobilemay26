import React from 'react'
import { Input } from '../../Shared/InputBox'
import GradientButton from "../../Shared/GradientButton";

import {
  ImoprtNFTContainer,
  InputWrapper
} from './styles'
import { useTranslation } from 'react-i18next';

export const ImoprtNFT = (props) => {
  const{t}=useTranslation()
  return (
    <ImoprtNFTContainer>
      <h1>{t("Import file from other side")}</h1>
      <InputWrapper>
        <label>{t("NFT Address")}</label>
        <Input
          placeholder='Enter NFT Address'
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t("NFT ID")}</label>
        <Input
          placeholder='Enter NFT ID'
        />
      </InputWrapper>
      <p>{t("Accepte file types (JPG, PNG, MOV, MP4, GIF) Max upload size 50MB")}</p>
      <GradientButton
        label='Import File'
        width='106px'
        height='41px'
      />
    </ImoprtNFTContainer>
  )
}