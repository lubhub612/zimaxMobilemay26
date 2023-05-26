import styled from 'styled-components'

export const OverlayCoverContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  overflow: hidden;
  background: #000;

  @media (max-width: 800px) {
    display: none;
  }
`;