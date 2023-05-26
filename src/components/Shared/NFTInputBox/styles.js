import styled from 'styled-components'

export const NFTInputBoxContainer = styled.div`
  padding: 1px;
  > input, textarea {
    display: block;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border-radius: 10px;
    background: rgba(0,0,0,0.25);
    color: white;
    text-align: left;
    padding: 12px 16px;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    margin-top: ${({title}) => title ? "15px" : "0"};

    &::-webkit-input-placeholder { /* Edge */
      color: #C4C4C4;
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #C4C4C4;
    }

    &::placeholder {
      color: #C4C4C4;
    }
  }

  > textarea {
    height: 94px;
  }
`;

export const FormLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const FormDescription = styled.label`
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #FFFFFF;
`;