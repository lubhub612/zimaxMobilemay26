import styled from 'styled-components';

export const InputBoxWithIconContainer = styled.div`
  position: relative;
  padding: 1px;
  > svg {
    position: absolute;
    top: 11px;
    left: 16px;
    width: 28px;
    height: 28px;
  }
  > input {
    display: block;
    width: 100%;
    border: 1px solid #38c948;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    color: white;
    margin-bottom: 10px;
    text-align: left;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    outline: none;
    padding-left: 55px;

    &::-webkit-input-placeholder {
      /* Edge */
      color: #c4c4c4;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #c4c4c4;
    }

    &::placeholder {
      color: #c4c4c4;
    }

    &:focus {
      border: 1px solid #636e81;
    }

    &:focus-visible {
      border: 1px solid #636e81;
    }
  }
`;
