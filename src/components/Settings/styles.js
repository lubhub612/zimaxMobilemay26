import styled from 'styled-components'

export const SettingsContainer = styled.div`
  position: relative;
  display: grid;
  /* grid-template-columns: ${({ isOpenSideMenu }) => isOpenSideMenu ? '340px auto' : '64px auto'}; */
  width: 100%;
  padding: 0;
  -moz-box-align: start;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: grid;
    width: 100%;
    padding: 0;
    -moz-box-align: start;
    align-items: flex-start;
    margin: 0 auto;
  }
`;

export const SideBarMenuContainer = styled.div`
  position: absolute;
  left: 20px;
  height: calc(100vh - 64px);
  padding: 34px 0;
  top: 0px;
  z-index: 99;
`;