import styled from 'styled-components';

export const PlaneAccordionContainer = styled.div`
  width: 100%;
  padding: 4px 0px;
  padding-left: ${(props) => props.depth * 6}px;
`;

export const AccordionHeader = styled.div`
  width: 100%;
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  // padding: ${(props) => (props.isOpen ? '8px 12px' : '4px 0px')};
  // background: ${(props) =>
    props.isOpen ? 'rgba(0,0,0,0.1)' : 'transparent'};
  // border-radius: 8px;
`;

export const AccordionIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .text {
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #ffffff;

    &:active {
      color: #38c948;
    }
  }
`;

export const AccordionArrow = styled.div`
  > svg {
    color: white;
  }
  cursor: pointer;
`;

export const AccordionBody = styled.div`
  color: #efefef;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? 'fit-content' : '0')};
  transition: all 2s;
`;
