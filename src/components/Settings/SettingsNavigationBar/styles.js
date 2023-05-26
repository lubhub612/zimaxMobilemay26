import styled, { css } from 'styled-components';

export const NavigationBarContainer = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 70px;
  width: 100vw;
  background: #101118;
  box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const NavigationBarContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 13px 10px;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #669010;
  cursor: pointer;

  > svg {
    font-size: 24px;
    path {
      fill: #447010;
    }
  }
  span {
    margin-top: 3.5px;
    font-size: 14px;
    line-height: 16px;
  }

  ${({ active }) =>
    active &&
    css`
      color: #38c948;
      > svg {
        path {
          fill: #38c948;
        }
      }
    `}
`;
