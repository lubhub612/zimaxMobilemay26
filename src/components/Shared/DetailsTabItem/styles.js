import styled from 'styled-components';

export const DetailsTabItemContainer = styled.div`
  padding: 26px 58px;
`;

export const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .detail-name {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }

  .detail-value {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-decoration-line: underline;
    color: #38c948;
  }
`;
