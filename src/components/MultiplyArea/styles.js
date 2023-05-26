import styled from 'styled-components';

export const MainArea = styled.div`
  button {
    background: #ffdd00;
    border: none;
    font-weight: 600;
    font-size: 20px;
    border-radius: 10px;
    padding: 8px 30px 20px;
    border-bottom-left-radius: 0;
    cursor: pointer;
  }
  @media screen and (max-width: 991px) {
    padding: 30px;
    padding-bottom: 100px;
  }
`;
export const Header = styled.div``;
export const ActivePopUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000c7;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  padding: 30px;
  svg {
    height: auto;
    max-width: 60px;
  }

  div {
    background: #161620;
    border-radius: 20px;
    padding: 50px;
    text-align: center;
    color: #fff;
    min-width: 500px;
    position: relative;
    @media screen and (max-width: 991px) {
      min-width: unset;
    }
  }

  h2 {
    font-size: 30px;
    margin-top: 30px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: #d2d3d5;
  }

  h3 {
    margin: 0;
    margin-top: 10px;
    border-bottom: 1px solid #45454d;
    padding-bottom: 20px;
    margin-bottom: 15px;
  }

  p {
    margin: 10px 0;
  }

  button {
    display: block;
    background: #38c948;
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    border: none;
    margin-top: 30px;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  span svg {
    position: absolute;
    right: 20px;
    top: 20px;
    height: auto;
    width: 20px;
    cursor: pointer;
  }
`;
export const AreaInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  background: #161620;
  max-width: max-content;
  padding: 30px 50px;
  border-radius: 20px;
  margin-top: -13px;
  position: relative;
  @media screen and (max-width: 1270px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    max-width: unset;
  }
`;
export const Item = styled.div`
  min-width: 250px;
  background: transparent;
  border: 1px solid #22322f;
  border-radius: 20px;
  padding: 10px 20px;
  text-align: center;
  span svg {
    height: auto;
    max-width: 20px;
  }
  &.active {
    cursor: pointer;
    background: rgb(34, 38, 45);
    background: linear-gradient(
      145deg,
      rgba(34, 38, 45, 1) 0%,
      rgba(29, 64, 42, 1) 47%,
      rgba(23, 33, 37, 1) 100%
    );
    border: 1px solid #2f823a;
  }
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  span {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 14px;
  }
  strong {
    font-size: 18px;
  }
`;
export const Body = styled.div`
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #fff;
    font-weight: 700;
    font-size: 24px;
  }
`;
