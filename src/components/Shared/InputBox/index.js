import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${ ({error}) => error === true? 
    css`
      border: 1px solid #800;
    `:
    css`
      border: none;
    `}
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
`

export const TextArea = styled.textarea`
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
  resize: none;

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
`
