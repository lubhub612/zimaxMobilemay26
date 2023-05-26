import styled from 'styled-components';

export const ListItemForSaleContainer = styled.div`
  margin: 30px auto;
  position: relative;
  overflow-y: auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 96%;

  @media (min-width: 992px) {
    max-width: 1380px;
    justify-content: space-between;
    flex-direction: row;
    height: calc(100vh - 134px);
  }
`;

export const SaleContainer = styled.div`
  flex: 1;
  background: #222430;
  border-radius: 15px;
`;

export const SaleHeader = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 23px 25px;
  display: flex;
  align-items: center;

  span {
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin-left: 22px;
  }
`;
export const SellNowDetailContainer = styled.div`
  padding: 0px 25px 50px 25px;
  height: calc(100% - 74px);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #38c948;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #38c948;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #38c948;
  }

  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px 0;

    > div {
      width: initial;
      margin: 0 5px;
      &.active {
        button.btn-unnaked {
          color: #38c948;
        }
      }
    }
  }

  .set-royalites-fee {
    display: flex;
    flex-direction: column;

    label {
      color: #c4c4c4;
      margin-bottom: 15px;
    }
    input {
      max-width: 223px;
      height: 47px;
    }
  }

  .set-reserve {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    input {
      height: 47px;
      padding-left: 20px;
      font-size: 16px;
    }
  }

  input[type='number'] {
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      cursor: pointer;
      display: block;
      width: 8px;
      color: #333;
      text-align: center;
      position: relative;
    }
    &:hover::-webkit-inner-spin-button {
      background: #00000040 url('/icons/number-arrow.png') no-repeat 50% 50%;
      width: 14px;
      height: 14px;
      padding: 4px;
      position: relative;
      right: 4px;
      border-radius: 28px;
    }
  }
`;

export const PreviewImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 992px) {
    margin-top: 0;
    width: 50%;
  }
`;
