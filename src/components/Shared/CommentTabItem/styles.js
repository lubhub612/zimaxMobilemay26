import styled from 'styled-components';

export const CommentTabItemContainer = styled.div`
  padding: 15px 30px;
  display: flex;
  align-items: center;

  .user-logo {
    margin-right: 20px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }

  @media (min-width: 576px) {
    padding: 24px 55px;
  }
`;

export const CommentDetail = styled.div`
  .user-name {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #38c948;
    margin-bottom: 9px;
  }

  .user-comment {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin-bottom: 9px;
  }

  .user-review {
    display: flex;

    .review-icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    .review-count {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #c4c4c4;
      margin-left: 10px;
    }

    .review-date {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #c4c4c4;
      margin-left: 13px;
    }
  }
`;
