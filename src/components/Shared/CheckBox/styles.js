import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: #808080;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
`;

export const CheckBoxAppreance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-right: 10px;
  margin-top: 0;
  border: ${({ active }) =>
    active ? '1px solid #38c948' : '1px solid #C4C4C4'};
`;

export const CheckBoxLabel = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? '#38c948' : '#C4C4C4')};
  user-select: none;
`;
