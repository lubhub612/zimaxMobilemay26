import styled from 'styled-components'

export const StatsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${({ isOpenSideMenu }) => isOpenSideMenu ? '340px auto' : '64px auto'};
  width: 100%;
  padding: 0 0 0 20px;
  -moz-box-align: start;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: grid;
    width: 100%;
    padding: 0 0 0 10px;
    -moz-box-align: start;
    align-items: flex-start;
    margin: 0 auto;
  }
`;

export const SideBarMenuContainer = styled.div`
  right: 0;
  height: calc(100vh - 64px);
  padding: 22px 0;
  top: 0px;
  z-index: 99;
  transition: all 0.2s;
`;