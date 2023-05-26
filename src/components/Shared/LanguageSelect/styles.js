import styled from 'styled-components';

export const LanguageSelectContainer = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #c4c4c4;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageSelectSelect = styled.div`
  position: relative;
`;

export const LanguageSelectSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  width: 100%;

  > svg {
    fill: #38c948;
  }
`;

export const ViewType = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #38c948;
  }
`;

export const LanguageSelectList = styled.div`
  position: absolute;
  top: 25px;
  border-radius: 6px;
  width: 100%;
  background: #222430;
  overflow: hidden;
  z-index: 999;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > div {
    padding: 12px;

    &:hover {
    }
  }
`;
