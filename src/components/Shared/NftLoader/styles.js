import styled from 'styled-components';

export const NftLoaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: absolute;
  top: calc(50% - size/2);
  left: calc(50% - size/2);
  margin-top: -13px;
  margin-left: -13px;
  border-radius: 60px;
  animation: loader 1.2s linear infinite;
  -webkit-animation: loader 1.2s linear infinite;

  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      border: 6px solid rgba(170, 255, 38, 0.5);
      border-left-color: transparent;
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      border: 6px solid rgba(170, 255, 38, 0.8);
      border-left-color: transparent;
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      border: 6px solid #38c948;
      border-left-color: transparent;
    }
  }

  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      border: 6px solid rgba(170, 255, 38, 0.5);
      border-left-color: transparent;
    }
    50% {
      -webkit-transform: rotate(180deg);
      border: 6px solid rgba(170, 255, 38, 0.8);
      border-left-color: transparent;
    }
    100% {
      -webkit-transform: rotate(360deg);
      border: 6px solid #38c948;
      border-left-color: transparent;
    }
  }
`;
