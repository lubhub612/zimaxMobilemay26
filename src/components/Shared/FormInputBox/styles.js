import styled from 'styled-components'

export const FormInputBoxContainer = styled.div`
  padding: 1px;
  > input, textarea {
    display: block;
    width: 100%;
    height: 38px;
    background: rgba(0, 0, 0, 0.25) !important;
    border: none;
    box-sizing: border-box;
    border-radius: 10px;
    background: transparent;
    color: white;
    text-align: left;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    outline: none;
    margin-top: 13px;
    margin-bottom: 13px;
  }

  > textarea {
    height: 94px;
  }
`;

export const FormLabel = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const FormDescription = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
`;

export const FormWarning = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #f66;
  padding-left: 10px;
`;