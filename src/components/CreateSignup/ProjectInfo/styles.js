import styled from 'styled-components'

export const ProjectInfoContainer = styled.div`
  padding: 25px;
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
    margin-bottom: 24px;
  }
`
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  label {
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin-bottom: 13px;
  }

  #select-input {
    .item {
      padding: 5px 20px;
    }
  }
`
export const Option = styled.div`
  line-height: 27px;
`
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  > div {
    width: initial;
    padding: 5px;

    button.btn-unnaked {
      width: 125px;
    }
  }

  @media (min-width: 768px) {
    > div {
      button.btn-unnaked {
        width: 160px;
      }
    }
  }
`
