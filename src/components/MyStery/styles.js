import styled from 'styled-components';

export const MySteryContainer = styled.div`
  height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 450px;
  }

  .mystery-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mystery-text {
    font-weight: bold;
    font-size: 45px;
    line-height: 60px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
  }

  .coming-soon-text {
    font-weight: bold;
    font-size: 28px;
    line-height: 45px;
    text-align: center;
    color: #38c948;
  }

  @media (min-width: 576px) {
    .mystery-text {
      font-size: 70px;
      line-height: 90px;
    }
    .coming-soon-text {
      font-size: 35px;
      line-height: 58px;
    }
  }

  @media (min-width: 768px) {
    .coming-soon-text {
      font-size: 48px;
      line-height: 61px;
    }
    .mystery-text {
      font-size: 96px;
      line-height: 122px;
    }
  }
`;
