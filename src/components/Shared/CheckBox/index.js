import React from 'react';
import EnCheck from '@meronex/icons/en/EnCheck';
import { CheckBoxContainer, CheckBoxAppreance, CheckBoxLabel } from './styles';

const CheckBox = (props) => {
  const { id, label, isChecked, onChange } = props;

  const handleClick = () => {
    if (!onChange) return;
    onChange(id);
  };

  return (
    <CheckBoxContainer onClick={() => handleClick()}>
      <CheckBoxAppreance active={isChecked}>
        {isChecked && <EnCheck color="#38c948" />}
      </CheckBoxAppreance>
      <CheckBoxLabel active={isChecked}>{label}</CheckBoxLabel>
    </CheckBoxContainer>
  );
};

export default CheckBox;
