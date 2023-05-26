import styled from 'styled-components';

export const SideBarContainer = styled.div`
  z-index: 999;
  display: grid;
  overflow: visible !important;
  height: 100%;
  background: #222430;
  backdrop-filter: blur(40px);
  border-radius: 15px;

  @media (max-width: 800px) {
    display: block;
  }

  .total-result {
    font-weight: 500;
    color: #efefef;
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export const SideToggleBar = styled.div`
  .open-sharp,
  .close-sharp {
    display: flex;
    cursor: pointer;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      width: 24px;
      height: 24px;
      color: #38c948;

      &:hover {
        path {
          fill: #ffffff;
        }
      }
    }
  }

  .open-sharp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 26px;

    .icon-group {
      display: flex;
      align-items: center;

      .icon-text {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        margin-left: 12px;
      }
    }

    svg {
      width: 17px;
      height: 17px;
    }
  }

  .close-sharp {
    padding: 32px 20px;
  }

  .profile-sharp,
  .verification-sharp,
  .notifications-sharp {
    display: flex;
    cursor: pointer;
    padding: 16px;

    svg {
      width: 24px;
      height: 24px;
      color: #38c948;

      &:hover {
        path {
          fill: #ffffff;
        }
      }
    }

    &:hover {
      background: rgba(21, 23, 32, 0.4);

      > svg {
        path {
          fill: #ffffff;
        }
      }
      > div {
        color: #38c948;
      }
    }
  }

  .active {
    background: rgba(21, 23, 32, 0.4);
  }
`;

export const SideBarLabel = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  color: #ffffff;
  margin-left: 10px;
  padding-top: 3px;
`;

export const ToggleButton = styled.div``;
