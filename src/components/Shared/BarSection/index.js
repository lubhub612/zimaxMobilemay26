import React from 'react';
import { 
  BarSectionContainer, 
  BarSectionHeader, 
  BarSectionBody, 
} from './styles';

const BarSection = (props) => {
  
  return (
    <BarSectionContainer>
      <BarSectionHeader onClick={props.handleClick? () => props.handleClick(): () => {}}>
        {props.title}
      </BarSectionHeader>
      <BarSectionBody>
        <div>
          {props.children}
        </div>
      </BarSectionBody>
    </BarSectionContainer>
  )
}

export default BarSection;