import React from 'react';
import { InputBoxWithIconContainer } from './styles';

const InputBoxWithIcon = (props) => {

  const { 
    name, 
    type, 
    value, 
    icon,
    placeholder, 
    onChange
  } = props;

  return (
    <InputBoxWithIconContainer>
      {icon}
      <input 
        name={name}
        type={type}
        value={value} 
        placeholder={placeholder} 
        autoComplete={'off'}
        onChange={onChange}
      />
    </InputBoxWithIconContainer>
  )
}

export default InputBoxWithIcon;
