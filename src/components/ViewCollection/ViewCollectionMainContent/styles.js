import styled from 'styled-components'

export const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 410px auto;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }

  .no-result {
    background: #222430;
    border-radius: 15px;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .empty-text {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #FFFFFF;
      margin-top: 40px;
      margin-bottom: 37px;
    }

    .action-buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        white-space: nowrap;
      }
    }
  }
`;

export const CardContainer = styled.div`
  position: relative;
  height: auto;
  overflow-y: auto;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0px;
    height: calc(100vh - 64px);
    padding: 22px 35px 22px 35px;
  }

  .activity-section {
    background: #222430;
    border-radius: 15px;
    height: 100%;
    overflow: auto;
  }

  .offer-section {
    background: #222430;
    border-radius: 15px;
    height: 100%;
    overflow: auto;
  }

  .hideNft-section {
    background: #222430;
    border-radius: 15px;
    height: 100%;
    overflow: auto;
  }

  .favorite-section {
    background: #222430;
    border-radius: 15px;
    height: 100%;
    overflow: auto;
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