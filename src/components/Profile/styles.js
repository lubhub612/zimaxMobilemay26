import styled from 'styled-components'

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 20px;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: ${({ isOpenRightMenu }) => isOpenRightMenu ? 'auto 340px' : 'auto 64px'};
    padding: 0 20px 0 0;
    margin: 0 auto;
  }
`;

export const SideBarMenuContainer = styled.div`
  right: 0;
  height: calc(100vh - 64px);
  padding: 22px 0;
  margin-left: 10px;
  top: 0px;
  z-index: 99;
`;