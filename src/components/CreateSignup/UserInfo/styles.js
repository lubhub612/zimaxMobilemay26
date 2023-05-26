import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  padding: 25px;

  > p {
    font-size: 13px;
    line-height: 17px;
    color: white;
    margin-top: 0;
  }

  @media (min-width: 768px) {
    padding: 41px 38px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin-bottom: 13px;
  }
  input {
    max-width: 440px;
    margin-bottom: 22px;
  }
`
