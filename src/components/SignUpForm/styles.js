import styled from 'styled-components';

export const SignUpFormContainer = styled.div`
  .signup-checkbox-list {
    width: 100%;
    margin-top: 20px;
    padding: 0 22px;
  }

  .modal-divider-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0 16px;

    &::before {
      content: '';
      background-color: #c4c4c4;
      height: 1px;
      width: 100%;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .modal-divider-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #c4c4c4;
      background-color: #222430;
      padding: 0 16px;
      z-index: 10;
    }
  }

  .sign-in-mode {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #38c948;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
