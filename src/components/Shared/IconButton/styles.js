import styled from 'styled-components';

export const IconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  border: 1px solid #38c948;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLabel = styled.div`
  margin-left: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  color: #ffffff;
`;

export const DisplayPopular = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  color: #c4c4c4;
`;
