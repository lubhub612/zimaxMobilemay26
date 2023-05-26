import styled from 'styled-components'

export const FixedPriceContainer = styled.div`
  .price-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    margin-bottom: 15px;
  }
  .price-selection {
    display: flex;

    .nft-dropdown-container {
      margin-right: 20px;
      #select-input {
        width: 100%;
        > div:first-child {
          padding: 15px 12px;
        }
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
      input {
        width: 100%;
        height: 47px;
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
  }
  
  .price-description {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #C4C4C4;
  }

  .price-dates {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    #select-input {
      max-width: 223px;
      > div:first-child {
        padding: 15px 12px;
      }
      .select-arrow  {
        color: #C4C4C4;
        margin-left: 12px;
      }
      .item {
        padding: 10px 12px;
        white-space: nowrap;
      }
    }
    > div {
      flex: 1;
      input {
        height: 47px;
        font-size: 16px;
      }
      input::-webkit-calendar-picker-indicator {
        filter: invert(71%) sepia(50%) saturate(642%) hue-rotate(37deg) brightness(115%) contrast(101%);
      }
    }
  }

  .set-custom-date {
    margin: 10px 0px;
  }

  .copies {
    display: flex;
    flex-direction: column;
    margin-top: 26px;
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
      max-width: 223px;
      height: 47px;
      font-size: 16px;
      padding-left: 16px;
      margin-right: 20px;
    }

    .copy-balance {
      margin-top: auto;
      display: flex;
      align-items: center;
      width: 85%;
    }
  }

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

  @media (min-width: 768px) {
    .price-selection {
      .nft-dropdown-container {
        width: 33%;
      }
    }
  }
`

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  span {
    font-size: 16px;
    font-weight: 600;
  }
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  img {
    margin-right: 12px;
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
`
