import React, { useState } from 'react';
import { HyperTooltipContainer } from './styles';

const HyperTooltip = (props) => {

  const { 
    text, 
    direction='right', 
    children 
  } = props

  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <HyperTooltipContainer
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction}`}>
          {text}
        </div>
      )}
    </HyperTooltipContainer>
  )
}

export default HyperTooltip;
