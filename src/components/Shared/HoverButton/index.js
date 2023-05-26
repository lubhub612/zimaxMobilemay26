import React from 'react';
import { HoverButtonContainer } from './styles';

const HoverButton = (props) => {

  const {
    label,
    isNaked,
    handleClick
  } = props

  return (
    <HoverButtonContainer onClick={handleClick}>
      <div className={isNaked ? "btn-naked" : "btn-unnaked"}>{label}</div>
    </HoverButtonContainer>
  )
}

export default HoverButton;
