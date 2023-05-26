import styled, { css } from 'styled-components';

export const ResourcesDropDownContainer = styled.div`
  position: relative;

  .dropdown-list-div {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    padding-top: 22px;
    z-index: 9999;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
  }

  .dropdown-list {
    width: 230px;
    background: #191b24;
    border-radius: 12px;
    z-index: 2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    a {
      display: block;
      padding: 8px !important;
      margin: 0 !important;
      font-size: 14px !important;
      text-align: center;
      color: #c4c4c4;

      &:hover {
        color: #38c948;
      }
    }
  }

  &:hover {
    .dropdown-list-div {
      display: block;
    }
  }
`;

export const ResourcesDropDownTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  transition: all 0.3s;
  position: relative;

  &:hover {
    color: #38c948;
  }

  ${({ active }) =>
    active &&
    css`
      color: #38c948;

      &::after {
        content: '';
        position: absolute;
        background-color: white;
        height: 1px;
        width: calc(100% + 10px);
        top: 200%;
        left: -5px;
      }
    `}
`;

export const UserDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  line-height: 24px;
  text-align: center;

  > div {
    padding: 0px 15px;
  }
`;
