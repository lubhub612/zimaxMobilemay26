import React, { useState } from 'react';
import { IconLabelContainer } from './styles';

const IconLabel = (props) => {

  const { icon, label, isImage, isActionLabel, actionIcon } = props

  const [actionCount, setActionCount] = useState(parseInt(label));
  const [isAction, setIsAction] = useState(false);

  const toggleAction = () => {
    setIsAction(prev => !prev);
    if(isAction) {
      setActionCount(prev => prev - 1);
    }else{
      setActionCount(prev => prev + 1);
    }
  }

  return (
    <>
      {isActionLabel ? (
        <IconLabelContainer onClick={() => toggleAction()}>
          {isAction 
          ? isImage ? (
              <img src={actionIcon} alt='icon-label' />
            ) : (
              actionIcon
            )
          : isImage ? (
              <img src={icon} alt='icon-label' />
            ) : (
              icon
            )
          }
          <div className="label-text">{actionCount}</div>
        </IconLabelContainer>
      ) : (
        <IconLabelContainer>
          {isImage ? (
            <img src={icon} alt='icon-label' />
          ) : (
            icon
          )}
          <div className="label-text">{label}</div>
        </IconLabelContainer>
      )}
    </>
  )
}

export default IconLabel;
