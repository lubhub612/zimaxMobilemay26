import React from 'react';
import { 
  ResourcesDropDownContainer, 
  ResourcesDropDownTitle, 
} from './styles';

const ResourcesDropDown = (props) => {

  const {
    title,
    children,
    handleClick,
    active
  } = props;

  return (
    <ResourcesDropDownContainer>
      <ResourcesDropDownTitle
        onClick={() => handleClick && handleClick()}
        active={active}
      >
        {title}
      </ResourcesDropDownTitle>
      <div className="dropdown-list-div">
        <div className="dropdown-list">
          {children}
        </div>
      </div>
    </ResourcesDropDownContainer>
  )
}

export default ResourcesDropDown;