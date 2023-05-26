import styled from 'styled-components';

export const NotificationItemContainer = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .user-logo {
    margin-right: 20px;

    img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export const NotificationItemDetail = styled.div`
  .user-name {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #38c948;
  }

  .user-comment {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
  }

  .sale-date {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #c4c4c4;
    text-align: left;
  }
`;
