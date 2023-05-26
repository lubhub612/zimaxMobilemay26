import styled from 'styled-components';

export const CheckoutFormContainer = styled.div`
  padding: 0 84px;

  @media (max-width: 800px) {
    padding: 0 40px;
  }

  @media (max-width: 700px) {
    padding: 0px;
  }
`;

export const WelComeCheckout = styled.div`
  .welcome-text {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
  }

  .user-name {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 46px;
    color: #a3ff20;

    > span {
      font-size: 24px;
      color: white;
    }
  }
`;

export const CheckoutDetail = styled.div`
  margin-top: 70px;

  .divider {
    border-bottom: 1px solid #000;
    margin: 15px -30px 20px -30px;
  }

  .flex-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    margin-top: 5px;

    .purchase-label {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      color: #38c948;
    }

    .purchase-name {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 38px;
      text-align: center;
      color: #ffffff;
    }

    .purchase-desc {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

export const CheckoutTerms = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: justify;
  color: #c4c4c4;
  margin-top: 20px;
  margin-bottom: 87px;
`;
