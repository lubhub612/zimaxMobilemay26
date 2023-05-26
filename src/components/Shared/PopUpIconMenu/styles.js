import styled from 'styled-components';

export const PopUpIconMenuContainer = styled.div`
  position: relative;

  .popup-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    padding: 12px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .user-image {
    > img {
      width: 29px;
      height: 29px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .dropdown-list-div {
    display: none;
    position: absolute;
    right: ${({ right }) => right};
    top: 100%;
    padding-top: 19px;
    z-index: 9999;
  }

  .dropdown-list {
    width: ${({ width }) => width};
    background: #191b24;
    border-radius: 12px;
    padding: 12px 22px;
    text-align: left;
    z-index: 2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    a {
      display: block;
      padding: 8px !important;
      margin: 0 !important;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;

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

export const PopUpIconMenuTitle = styled.div`
  color: #000000;
  font-size: 16px;
  padding: 0 8px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    svg {
      path {
        fill: white;
      }
    }
  }

  > img {
    border-radius: 50%;
  }
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
