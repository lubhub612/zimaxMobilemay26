
import styled from 'styled-components'
export const AddTagFormContainer = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 74px;
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

    span {
      color: #F55555;
    }
  }
  input {
    margin-bottom: 24px;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  > div {
    width: initial;
    padding: 5px 10px;
  }
`