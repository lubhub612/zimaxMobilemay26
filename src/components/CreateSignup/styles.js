import React from 'react';
import styled, { css } from 'styled-components';

export const CreateSignupContainer = styled.div`
  width: 90%;
  max-width: 1220px;
  margin: 35px auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 134px);
  border-radius: 10px;
  overflow: auto;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    width: 84%;
  }
`;
export const FormContainer = styled.div`
  background: #222430;
  border-radius: 10px;
  flex: 1;

  @media (min-width: 992px) {
    border-radius: 0;
  }
`;
export const HeroContainerStyled = styled.div`
  ${({ bgimage }) =>
    bgimage &&
    css`
      background-repeat: no-repeat, repeat;
      background-size: cover;
      object-fit: cover;
      background-position: center;
    `}
  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const HeroContainer = (props) => {
  const style = {};
  style.backgroundImage = `url(${props.bgimage})`;

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  );
};
export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #40475d;
  padding: 16px 16px 0px 16px;

  @media (min-width: 768px) {
    padding: 16px 38px 0px 38px;
  }
`;
export const Tab = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
  position: relative;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: #38c948;
      &::after {
        content: '';
        background-color: #38c948;
        height: 1px;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
      }
    `}

  @media (min-width: 768px) {
    padding: 8px 18px;
    font-size: 18px;
  }
`;
