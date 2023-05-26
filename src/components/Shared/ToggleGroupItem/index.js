import React from 'react';
import { 
  ToggleGroupItemContainer,
  ToggleGroupItemDiv
} from './styles';
import ToggleButton from '../ToggleButton'

const ToggleGroupItem = (props) => {

  const {
    title, 
    description,
    isChecked,
    toggleChecked
  } = props;
  
  return (
    <ToggleGroupItemContainer>
      <ToggleGroupItemDiv>
        <div className="toggle-title">{title}</div>
        <div className="toggle-description">{description}</div>
      </ToggleGroupItemDiv>
      <ToggleButton 
        isChecked={isChecked}
        handleToggle={() => toggleChecked()}
      />
    </ToggleGroupItemContainer>
  )
}

export default ToggleGroupItem;