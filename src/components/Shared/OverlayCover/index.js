import React from 'react';
import { OverlayCoverContainer } from './styles';

const OverlayCover = (props) => {
  return (
    <OverlayCoverContainer onClick={props.handleClick}>

    </OverlayCoverContainer>
  );
}

export default OverlayCover;