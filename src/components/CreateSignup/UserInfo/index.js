import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import GradientButton from '../../Shared/GradientButton'
import { Input } from '../../Shared/InputBox'

import {
  UserInfoContainer,
  InputWrapper
} from './styles'

export const UserInfo = (props) => {
  const {
    creatorInfo,
    setCreatorInfo,
    handleNext
  } = props

  const [password, setPassword] = useState(creatorInfo.password);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  const { t } = useTranslation();
  const handleNextDetail = () => {
    if (password !== passwordConfirm) {
      setWrongPassword(true);
    } else {
      setCreatorInfo(t => { return {
        ...t,
        password: password
      }});
      handleNext();
    }
  }

  return (
    <UserInfoContainer>
      <InputWrapper>
        <label>{t("*Username")}</label>
        <Input
          value={creatorInfo.name}
          placeholder='Choose a username for your profile'
          onChange={e => setCreatorInfo(t => {
            return {
              ...t,
              name: e.target.value
            }
          })}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t("*Email")}</label>
        <Input
          value={creatorInfo.email}
          placeholder='This is where push notifications and account updates will be sent.'
          onChange={e => setCreatorInfo(t => {
            return {
              ...t,
              email: e.target.value
            }
          })}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t("*Password")}</label>
        <Input
          value={password}
          type='password'
          placeholder='Enter your password'
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type='password'
          error={wrongPassword}
          value={passwordConfirm}
          placeholder='Confirm Password'
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </InputWrapper>
      <p>
        {t("Our account ownership is controlled by your wallet. The above wallet address currently controls access to you account")}
      </p>
      <GradientButton
        width='160px'
        height='41px'
        label='Next'
        handleClick={handleNextDetail}
      />
    </UserInfoContainer>
  )
}
