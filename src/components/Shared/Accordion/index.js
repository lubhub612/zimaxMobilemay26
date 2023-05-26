import React, { useState } from 'react';
import { 
  AccordionContainer, 
  AccordionHeader, 
  AccordionIcon, 
  AccordionArrow,
  AccordionBody
} from './styles';
import BsChevronDown from '@meronex/icons/bs/BsChevronDown';
import BsChevronUp from '@meronex/icons/bs/BsChevronUp';

const Accordion = (props) => {

  const {
    title,
    iconUrl,
    isOpened=true,
    children
  } = props

  const [isOpen, setIsOpen] = useState(isOpened);
  
  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setIsOpen(prev => !prev)}>
        <AccordionIcon>
          {iconUrl && (
            <img src={iconUrl} alt="accordion-icon" />
          )}
          <div className="text" style={!iconUrl ? {margin: 0} : {}}>{title}</div>
        </AccordionIcon>
        <AccordionArrow>
          {isOpen ? (
            <BsChevronDown />
          ) : (
            <BsChevronUp />
          )}
        </AccordionArrow>
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>
        <div>
          {children}
        </div>
      </AccordionBody>
    </AccordionContainer>
  )
}

export default Accordion;