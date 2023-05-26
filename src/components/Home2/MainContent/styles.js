import styled from 'styled-components'

export const MainContentContainer = styled.div`
  position: relative;
  height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: auto;
  padding: 22px 20px;

  .no-result {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    text-align: center;
  }
`;

export const CardList = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: ${({ isMoreView }) => isMoreView ? `repeat(auto-fit, 200px)` : `repeat(auto-fit, 251px)`};
  grid-gap: 20px;
  gap: 20px;
  justify-content: space-evenly;
`;