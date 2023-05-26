import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;

  .collection-search {
    display: block;
    width: 100%;
    border: 1px solid #b2b2b2;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    color: #b2b2b2;
    margin-bottom: 10px;
    text-align: left;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    outline: none;

    &:focus {
      border: 1px solid #636e81;
    }
  }

  .clear-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    border-radius: 7px;
    border: 1px solid #efefef;
    background: #000;
    color: #efefef;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }

  .collection-list {
    max-height: 200px;
    overflow-y: auto;
  }

  .slider-div {
    padding-top: 25px;
  }
`;

export const AccordionHeader = styled.div`
  width: 100%;
  display: -moz-box;
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  padding: 16px 30px;
  background: #222430;
  cursor: pointer;
`;

export const AccordionIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .text {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #38c948;
    user-select: none;
  }
`;

export const AccordionArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    color: white;
  }
`;

export const AccordionBody = styled.div`
  color: #efefef;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? 'fit-content' : '0')};
  transition: all 2s;
  background: #262835;
  border-bottom: 1px solid #000;

  > div {
    padding: 22px 30px;
  }
`;
