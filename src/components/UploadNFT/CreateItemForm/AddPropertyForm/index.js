import React, { useState } from 'react'
import { Input, TextArea } from '../../../Shared/InputBox'
import GradientButton from '../../../Shared/GradientButton'

import {
  FormContainer,
  InputWrapper,
  ButtonWrapper,
} from './styles'
import { useTranslation } from 'react-i18next'

export const AddPropertyForm = (props) => {
  const {
    handleClose,
    handleSave
  } = props

  const [formState, setFormState] = useState({})
  const{t}=useTranslation();
  const onSave = () => {
    handleSave(formState)
    handleClose()
  }

  return (
    <FormContainer>
      <InputWrapper>
        <label>{t("Type")}</label>
        <Input
          name='type'
          value={formState?.type ?? ''}
          onChange={e => setFormState({ ...formState, type: e.target.value })}
          placeholder='Add property type'
          autoComplete='off'
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t("Name")}</label>
        <Input
          name='name'
          rows={5}
          placeholder='Add property Name'
          value={formState?.name ?? ''}
          onChange={e => setFormState({ ...formState, name: e.target.value })}
        />
      </InputWrapper>
      <ButtonWrapper>
        <GradientButton
          label='Add Prperty'
          isNoPadding
          width='160px'
          height='41px'
          handleClick={() => onSave()}
        />
      </ButtonWrapper>
    </FormContainer>
  )
}
