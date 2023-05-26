import React from 'react';
import { 
  ToggleButtonContainer,
  CheckBox,
  CheckBoxLabel
} from './styles';

const ToggleButton = (props) => {

  const {isChecked, handleToggle} = props;
  
  return (
    <ToggleButtonContainer>
      <CheckBox id="checkbox" type="checkbox" checked={isChecked} onChange={() => null}/>
      <CheckBoxLabel htmlFor="checkbox" onClick={() => handleToggle()}/>
    </ToggleButtonContainer>
  )
}

export default ToggleButton;