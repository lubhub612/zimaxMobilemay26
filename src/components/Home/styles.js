import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  padding: 0 0 0 20px;
  -moz-box-align: start;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: grid;
    width: 100%;
    padding: 0;
    -moz-box-align: start;
    align-items: flex-start;
    margin: 0 auto 70px auto;
  }
`;

export const SideBarMenuContainer = styled.div`
  right: 0;

  padding: 22px 0;
  top: 0px;
  z-index: 99;
  transition: all 0.2s;
`;
