import React from 'react';
import { 
  PopUpIconMenuContainer, 
  PopUpIconMenuTitle, 
} from './styles';

const PopUpIconMenu = (props) => {

  const {
    width='150px',
    right='-90px',
    icon,
    children
  } = props;

  return (
    <PopUpIconMenuContainer width={width} right={right}>
      <PopUpIconMenuTitle>
        {icon}
      </PopUpIconMenuTitle>
      <div className="dropdown-list-div">
        <div className="dropdown-list">
          {children}
        </div>
      </div>
    </PopUpIconMenuContainer>
  )
}

export default PopUpIconMenu;