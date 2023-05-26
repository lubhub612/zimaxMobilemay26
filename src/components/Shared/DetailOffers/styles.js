import styled from 'styled-components';

export const OfferSectionContainer = styled.div`
  margin-top: 20px;
`;

export const OfferSectionBody = styled.div``;

export const OfferTable = styled.div`
  margin-top: 10px;

  table {
    width: 100%;
    color: #ffffff;
    border-collapse: collapse;

    .usd_price {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #6b749a;
    }

    .from {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #38c948;
    }

    .action {
      > div {
        padding: 0px;
      }
    }
  }

  table td {
    text-align: center;
    padding: 7px 12px;
    &:first-child {
      text-align: left;
      padding-left: 40px;
    }
    &:last-child {
      padding-right: 40px;
    }
  }

  table th {
    text-align: center;
    padding: 12px;
    background: #191b24;
    &:first-child {
      text-align: left;
      padding-left: 40px;
    }
    &:last-child {
      padding-right: 40px;
    }
  }

  .price-div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 6px;
    }
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 15px;
    height: 15px;
    min-width: 15px;
    margin-right: 5px;
  }
`;
