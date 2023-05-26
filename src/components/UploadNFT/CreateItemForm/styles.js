import styled from 'styled-components';

export const CreateItemFormContainer = styled.div`
  flex: 1;
  padding: 20px;
  background: #222430;
  margin: 0 20px 20px 20px;

  h1 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 0;
  }
  @media (min-width: 768px) {
    padding: 24px 35px;
    margin: 0;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 64px);
    overflow: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #38c948;
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #38c948;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #38c948;
    }
  }
`;
export const CreateItemFormDetails = styled.div`
  padding: 0px;

  @media (min-width: 768px) {
    padding: 0 35px;
  }
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  label {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: white;
  }

  input,
  textarea {
    font-size: 16px;
    padding: 10px 15px;
    background: #191b24;
  }

  #select-input {
    background: #191b24;
    .select-arrow {
      color: #c4c4c4;
    }
    .item {
      padding: 5px 20px;
    }

    #list {
      background: #191b24;
    }
  }
`;
export const Option = styled.div`
  line-height: 27px;
  font-size: 16px;
`;
export const AddPropertiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #191b24;
  border-radius: 10px;
  padding: 5px 16px;
  margin-bottom: 16px;

  span {
    font-size: 16px;
    font-weight: 600;
    color: #c4c4c4;
    line-height: 30px;
  }

  svg {
    color: #c4c4c4;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      color: #38c948;
    }
    &:active {
      color: #466811;
    }
  }
`;
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  span {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
`;
export const PropertyListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 16px);
  margin-left: -8px;
  margin-bottom: 8px;
`;
export const PropertyItem = styled.div`
  background: #38c9481a;
  border: 1px solid #38c948;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: calc(50% - 16px);
  margin: 8px;

  > span {
    &.property-name {
      color: white;
    }
    &.property-type {
      color: #38c948;
    }
    &.percentage {
      text-align: right;
      font-size: 12px;
    }
  }

  svg {
    position: absolute;
    color: #f24e1e;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: calc(33.33% - 16px);
  }

  @media (min-width: 1024px) {
    width: calc(25% - 16px);
  }
`;
