import styled from 'styled-components';

export const MakeOfferModalContainer = styled.div`
  background: rgb(0 0 0 / 92%);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  overflow: auto;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const MakeOfferModalOverlayContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 0;
`;

export const MakeOfferModalContentContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  position: relative;
  background: #222430;
  width: ${({ width }) => (width ? width : '420px')};
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  color: #fff;
  min-height: ${({ height }) => (height ? height : '85vh')};
  border-radius: 15px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: block;
    padding: 0;
  }
`;

export const MakeOfferModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 31px;
  border-bottom: 1px solid #000;

  .modal-title {
    display: flex;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    text-align: center;
    white-space: pre-wrap;

    .modal-title-icon {
      display: flex;
      align-items: center;
      > svg {
        width: 20px;
        height: 20px;
        color: #38c948;
      }
    }

    .modal-title-text {
      margin-left: 22px;
      color: #ffffff;
      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      color: #ffffff;
    }
  }

  .modal-close {
    cursor: pointer;
    svg {
      color: #fff;
    }
  }
`;

export const MakeOfferModalDetailContainer = styled.div`
  flex: 1 1;
  max-height: calc(100vh - 160px);
  overflow-x: hidden;

  @media (max-width: 900px) {
    margin-right: 0;
  }

  .set-custom-date {
    margin: 10px 0px;
  }
`;

export const MakeOfferDetailContainer = styled.div`
  padding: 20px 25px;

  .balance-frame {
    display: flex;
    flex-direction: row;
    align-items: start;

    .balance-item {
      flex: 1 1 auto;
      margin-right: 10px;
    }
  }

  .owner-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-top: 3px;
    margin-left: 10px;
  }

  .owner-dropdown {
    margin-top: 15px;
  }

  .price-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .price-selection {
    display: flex;
    justify-content: space-between;

    .nft-dropdown-container {
      width: 33%;
    }

    .nft-input-container {
      flex: 1 1;
      margin-left: 20px;
    }
  }

  .price-description {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #c4c4c4;
  }

  .price-dates {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    > div {
      width: 50%;

      flex: 1;
      input {
        height: 47px;
        font-size: 16px;
      }
      input::-webkit-calendar-picker-indicator {
        filter: invert(71%) sepia(50%) saturate(642%) hue-rotate(37deg)
          brightness(115%) contrast(101%);
      }
    }
  }

  .temrs-container {
    margin-top: 50px;
    margin-bottom: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MakeOfferModalImageContainer = styled.div`
  width: 400px;
  max-height: calc(100vh - 160px);
  overflow-x: hidden;

  @media (max-width: 900px) {
    padding: 20px;
  }
`;
