import React, { useState } from 'react'
import { Input, TextArea } from '../../../Shared/InputBox'
import GradientButton from '../../../Shared/GradientButton'

import {
  AddTagFormContainer,
  InputWrapper,
  ButtonGroup,
} from './styles'
import { useTranslation } from 'react-i18next'

export const AddTagForm = (props) => {
  const {
    handleClose,
    handleSave
  } = props

  const [formState, setFormState] = useState({})

  const onSave = () => {
    handleSave(formState)
    handleClose()
  }
  const { t } =useTranslation();
  return (
    <AddTagFormContainer>
      <InputWrapper>
        <label><span>{t("*")}</span>{t("Name:")}</label>
        <Input
          name='name'
          value={formState?.name ?? ''}
          onChange={e => setFormState({ ...formState, name: e.target.value })}
          placeholder='Enter tag name'
          autoComplete='off'
        />
      </InputWrapper>
      <InputWrapper>
        <label><span>{t("*")}</span>{t("Description:")}</label>
        <TextArea
          name='description'
          rows={5}
          placeholder='Enter description'
          value={formState?.description ?? ''}
          onChange={e => setFormState({ ...formState, description: e.target.value })}
        />
      </InputWrapper>
      <ButtonGroup isModal>
        <GradientButton
          label='Cancel'
          isNoPadding
          isDarkMode
          width='106px'
          height='41px'
          handleClick={() => handleClose()}
        />
        <GradientButton
          isNoPadding
          label='Save'
          width='106px'
          height='41px'
          handleClick={() => onSave()}
        />
      </ButtonGroup>
    </AddTagFormContainer>
  )
}
