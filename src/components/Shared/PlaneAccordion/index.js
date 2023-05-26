import React, { useEffect, useState } from 'react';
import {
  PlaneAccordionContainer,
  AccordionHeader,
  AccordionIcon,
  AccordionArrow,
  AccordionBody
} from './styles';
import BsChevronDown from '@meronex/icons/bs/BsChevronDown';
import BsChevronRight from '@meronex/icons/bs/BsChevronRight';

const PlaneAccordion = (props) => {
  const [isOpen, setIsOpen] = useState(props.selected);

  const handleClick = () => {
    props.handleClick && props.handleClick()
  }

  return (
    <PlaneAccordionContainer {...props} isOpen={isOpen}>
      <AccordionHeader isOpen={isOpen}>
        <AccordionIcon>
          {props.iconUrl && (
            <img src={props.iconUrl} alt="accordion-icon" />
          )}
          <div className="text" style={!props.iconUrl ? props.selected === true? { margin: 0, color: '#a4ff16' } : { margin: 0 } : {}} onClick={handleClick}>{props.title}</div>
        </AccordionIcon>
        {
          props.count > 0 &&
          <AccordionArrow onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? (
              <BsChevronDown />
            ) : (
              <BsChevronRight />
            )}
          </AccordionArrow>
        }
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>
        <div>
          {props.children}
        </div>
      </AccordionBody>
    </PlaneAccordionContainer >
  )
}

export default PlaneAccordion;