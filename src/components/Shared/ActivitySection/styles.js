import styled from 'styled-components';

export const ActivitySectionContainer = styled.div`
  padding: 26px;
`;

export const ActivitySectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 38px;
  margin-left: 20px;

  svg {
    fill: #38c948;
  }

  .header-text {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    text-align: right;
    color: #ffffff;
    margin-left: 12px;
  }
`;

export const ActivitySectionFilter = styled.div`
  width: 130px;
  margin-top: 20px;
`;

export const ActivitySectionBody = styled.div``;

export const ActivityTable = styled.div`
  margin-top: 10px;

  table {
    width: 100%;
    color: #ffffff;
    border-collapse: collapse;
  }

  table th,
  table td {
    text-align: center;
    padding: 12px;
  }

  table th {
    background: #191b24;
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

export const EventCreatorProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    margin-right: 10px;
  }

  .title {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #c4c4c4;
    text-align: left;
  }

  .value {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    text-align: left;
  }
`;

export const EventUserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 50%;
  }

  .title {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #c4c4c4;
    text-align: left;
  }

  .value {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    text-align: left;
  }
`;
