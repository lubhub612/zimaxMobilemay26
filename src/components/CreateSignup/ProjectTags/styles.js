import styled, { css } from 'styled-components';

export const ProjectTagsContainer = styled.div`
  padding: 25px;
  @media (min-width: 768px) {
    padding: 41px 38px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin-bottom: 13px;

    span {
      color: #f55555;
    }
  }
  input {
    max-width: 440px;
    margin-bottom: 24px;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  ${({ isModal }) =>
    isModal &&
    css`
      margin-top: 20px;
    `}

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
`;
export const AddTagButtonContainer = styled.div`
  border-bottom: 1px solid #40475d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 440px;
  padding: 8px 0;

  > div {
    display: flex;
    align-items: center;
    span {
      color: white;
      font-size: 16px;
      font-weight: 600;
      margin-left: 11px;
    }
  }
`;
export const AddTagButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4c4e55;
  border-radius: 5px;
  width: 24px;
  height: 24px;
  svg {
    color: #222430;
    font-size: 16px;
  }

  &:hover {
    background: #38c948;
  }
  &:active {
    background: #466811;
  }
`;
export const TagListContainer = styled.div`
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 440px;
`;
export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  width: calc(50% - 16px);
  margin: 8px;
  background: #191b24;
  border-radius: 8px;

  span {
    color: white;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    flex: 1;
    text-align: center;
  }

  svg {
    color: #f55555;
    font-size: 16px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    width: calc(33.33% - 16px);
  }
`;
