import styled from 'styled-components';

export const MainModalContainer = styled.div`
  background: rgb(0 0 0 / 70%);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  overflow: auto;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const MainModalOverlayContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 0;
`;

export const MainModalContentContainer = styled.div`
  margin: 0 auto;
  position: relative;
  background: #222430;
  width: ${({ width }) => (width ? width : '420px')};
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    min-height: ${({ height }) => (height ? height : '85vh')};
    max-height: calc(100vh - 60px);
  }
`;

export const MainModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  .modal-title {
    display: flex;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    text-align: center;
    white-space: pre-wrap;

    .modal-title-icon {
      display: flex;
      align-items: center;
      > svg {
        width: 30px;
        height: 30px;
        color: #38c948;
        path {
          stroke: #38c948;
        }
      }
    }

    .modal-title-text {
      display: flex;
      align-items: center;
      margin-left: 20px;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      color: #ffffff;
    }
  }

  .modal-close {
    cursor: pointer;
    svg {
      color: #fff;
    }
  }
`;

export const MainModalBodyContainer = styled.div`
  max-height: calc(100vh - 220px);
  overflow-x: hidden;
  padding: 40px 16px;
  @media (min-width: 768px) {
    max-height: calc(100vh - 160px);
  }
`;
