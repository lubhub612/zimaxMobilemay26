import styled from 'styled-components'

export const TimeAuctionContainer = styled.div`
  .price-fees {
    margin-bottom: 34px;

    .price-fee-title {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
      margin-bottom: 5px;
    }

    .price-fee-desc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;

      >div {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #C4C4C4;
      }
    }
  }
  .set-custom-date {
    margin: 10px 0px;
  }
`
export const MethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;  

  #select-input {
    .select-arrow {
      color: #C4C4C4;
    }
    .item {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`
export const CustomLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;  
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  line-height: 21px;
  font-size: 16px;
  font-weight: 500;
  color: #C4C4C4;

  img {
    margin-right: 12px;
  }
`

export const StartingPriceContainer = styled.div`
  display: flex;
  flex-direction: column; 

  .nft-dropdown-container {
    margin-bottom: 15px;

    #select-input {
      width: 100%;
      .select-arrow  {
        color: #C4C4C4;
        margin-left: 12px;
      }
      .item {
        padding: 10px 12px;
        white-space: nowrap;
      }
    }
  }

  .nft-input-container {
    flex: 1 1;
    position: relative;
    max-width: 340px;
    input {
      width: 100%;
      height: 51px;
      font-size: 16px;
      padding-left: 22px;
    }
    span {
      position: absolute;
      right: 1px;
      top: 0;
      background: #4C4E55;
      padding: 0 5px;
      min-width: 68px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 10px 10px 0
    }
  }
  @media (min-width: 768px) {
    flex-direction: row; 

    .nft-dropdown-container {
      width: 33%;
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  .copy-balance {
    margin-top: auto;
    display: flex;
    align-items: center;

    input[type=number] {
      width: 120px;
      height: 47px;
      font-size: 16px;
      padding-left: 16px;
    }
  }

  > div {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    label {
      color: white;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 15px;
      span {
        color: #F55555;
      }
    }

    input[type=number] {
      height: 47px;
      width: 120px;
      font-size: 16px;
      padding-left: 16px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    > div {
      width: 223px;
      &:first-child {
        margin-right: 20px;
      }
    }
  }
`
export const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;

  #select-input {
    min-width: 223px;
    .select-arrow  {
      color: #C4C4C4;
      margin-left: 12px;
    }
    .item {
      padding: 10px 12px;
      white-space: nowrap;
    }
  }
  input {
    font-size: 16px;
    height: 51px;
    flex: 1;
    &::-webkit-calendar-picker-indicator {
      filter: invert(71%) sepia(50%) saturate(642%) hue-rotate(37deg) brightness(115%) contrast(101%);
    }
  }

  > div:not(:first-child) {
    flex: 1;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    input {
      max-width: 263px;
    }
  }
`
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  max-width: 540px;

  span {
    font-size: 16px;
    font-weight: 600;
  }
`

export const OutlineBox = styled.div`
  border: 1px solid #40475D;
  border-radius: 10px;
  color: #C4C4C4;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 25px;
  margin: 0px 10px;
`
