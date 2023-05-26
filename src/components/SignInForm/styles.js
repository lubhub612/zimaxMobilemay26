import styled from 'styled-components';

export const SignInFormContainer = styled.div`
  .forgot-password-label {
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #38c948;
    cursor: pointer;
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

  .sign-up-mode {
    color: #38c948;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 8px;
    margin-top: 8px;
    white-space: pre-wrap;
  }
`;
