import styled from 'styled-components';

export const ToggleButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 20px;
  border-radius: 15px;
  background: #c4c4c4;
  cursor: pointer;
  box-sizing: border-box;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin: 4px;
    background: #ffffff;
    border: 3px solid black;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    background: transparent;
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  border-radius: 15px;
  width: 30px;
  height: 15px;
  &:checked + ${CheckBoxLabel} {
    background: #38c948;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 13px;
      height: 13px;
      margin-left: 17px;
      transition: 0.2s;
    }
  }
`;
