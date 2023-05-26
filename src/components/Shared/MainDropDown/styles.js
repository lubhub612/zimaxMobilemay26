import styled from 'styled-components';

export const DropDownContainer = styled.div`
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #c4c4c4;
  user-select: none;
`;

export const DropDownSelect = styled.div`
  position: relative;
`;

export const DropDownSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ isDarkMode }) => (isDarkMode ? '12px 20px' : '6px 20px')};
  box-sizing: border-box;
  border-radius: 6px;
  width: 100%;
  background: ${({ isDarkMode }) => (isDarkMode ? '#191B24' : '#222430')};
  font-weight: 600;
  font-size: ${({ isDarkMode }) => (isDarkMode ? '14px' : '12px')};
  line-height: 16px;
  color: ${({ isDarkMode }) => (isDarkMode ? '#C4C4C4' : '#38c948')};

  > div {
    font-weight: 600;
    font-size: ${({ isDarkMode }) => (isDarkMode ? '14px' : '12px')};
    line-height: 16px;
    color: ${({ isDarkMode }) => (isDarkMode ? '#C4C4C4' : '#38c948')};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ViewType = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: ${({ isDarkMode }) => (isDarkMode ? '14px' : '12px')};
    line-height: 16px;
    text-align: right;
    color: #c4c4c4;
  }

  .selected {
    color: #38c948;
  }
`;

export const DropDownList = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#191B24' : '#222430')};
  overflow: hidden;
  z-index: 999;
  border-radius: 5px;
  margin-top: 2px;
  box-shadow: 0px 0 8px rgba(0, 0, 0, 0.25);

  > div {
    padding: ${({ isDarkMode }) => (isDarkMode ? '12px 20px' : '6px 20px')};

    &:hover {
      background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#13141B' : '#1C1D24'};
    }
  }
`;
