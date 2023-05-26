import styled, { css } from 'styled-components';

export const SideBarAllSectionContainer = styled.div`
  height: 100%;
  overflow: hidden;

  .no-wallet-attached {
    width: 100%;
    text-align: center;
    padding: 10px;
    color: #a4ff20;
  }
`;

export const SideBarAllContent = styled.div`
  height: calc(100% - 95px);
  overflow-x: hidden;
  overflow-y: auto;
`;

export const UserDetailContainer = styled.div`
  padding: 20px 28px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #202020;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 18px;
    margin-right: 16px;
  }
`;

export const UserWelcome = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #38c948;
`;

export const MysteryContainer = styled.div`
  padding: 13.5px 28px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  color: #38c948;
  border-bottom: 1px solid #000;
`;
export const GameTypeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 12px 0;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      color: #38c948;
    `}
`;
