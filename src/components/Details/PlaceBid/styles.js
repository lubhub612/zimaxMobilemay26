import styled from 'styled-components'

export const TimeAuctionContainer = styled.div`
`
export const MethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;  

  input {
    height: 50px;
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

export const Description = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #C4C4C4;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TermsOf = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
