import styled from 'styled-components'

export const InputBoxContainer = styled.div`
  > input {
    display: block;
    width: 100%;
    border: none;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    text-align: left;
    padding: 11px 9px;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: white;
    outline: none;

    &::-webkit-input-placeholder { /* Edge */
      color: #C4C4C4;
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #C4C4C4;
    }

    &::placeholder {
      color: #C4C4C4;
    }
    &:focus {
      box-shadow: -2px -2px 3px rgba(170, 255, 38, 0.5), 2px 2px 3px rgba(170, 255, 38, 0.5);
    }
  }
`