import styled, { css } from 'styled-components';

export const UploadNFTContainer = styled.div`
  overflow: auto;
  height: auto;

  @media (min-width: 992px) {
    display: flex;
    overflow: hidden;
    height: calc(100vh - 64px);
  }
`;

export const LeftContainer = styled.div`
  padding: 30px 20px;
  background: linear-gradient(
    144.82deg,
    rgba(34, 36, 48, 0.4) -3.51%,
    rgba(34, 36, 48, 0.1) 105.76%
  );

  @media (min-width: 992px) {
    width: 50%;
    height: calc(100vh - 64px);
    overflow: auto;
    padding: 50px 24px;
  }
`;

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
