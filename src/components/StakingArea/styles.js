import styled from 'styled-components';

export const MainContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgb(0, 255, 240) 0%,
    rgb(0, 240, 255) 50%,
    rgb(255, 0, 249) 100%
  );
  border-radius: 10px;
  max-width: 900px;
  margin: auto;
  padding: 3px;
  @media screen and (max-width: 991px) {
    margin: 30px 30px 100px;
  }
`;
export const MainArea = styled.div`
  background: #1e1e1e;
  border-radius: 10px;
`;
export const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;
export const Item = styled.div`
  svg {
    cursor: pointer;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 70px;
    li {
      p {
        margin: 0;
        color: #38c948;
        font-size: 14px;
      }
      h2 {
        margin: 0;
        font-size: 14px;
        font-weight: 400;
      }
      strong {
        font-size: 14px;
        color: #717299;
        font-weight: 400;
      }
    }
    span {
      display: block;
      font-size: 14px;
      color: #c7c7e1;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 991px) {
    ul li:first-child {
      display: block;
    }
    ul li {
      display: none;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 40px;
    height: auto;
  }
`;
export const ProfileContent = styled.div`
  h2 {
    font-size: 16px;
    margin: 0;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    color: #c6c7e1;
    margin: 0;
  }
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #00ffff;
    border: none;
    border-top: none;
    border-right: 3px solid #000000;
    color: #000;
    padding: 10px;
    width: 100%;
    font-size: 12px;
    cursor: pointer;
    &.active {
      color: #fff;
      background: transparent;
    }
  }
`;
export const Body = styled.div`
  padding: 20px;
  color: #fff;

  h4 {
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    label {
      margin-right: 30px;
      @media screen and (max-width: 991px) {
        display: block;
        margin-bottom: 12px;
      }
    }
  }

  p {
    margin: 0;
  }
`;
export const LockArea = styled.div``;
export const LockInner = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  h5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    margin-bottom: 10px;
    font-weight: 400;
    color: #c7c7e1;
    span {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;
export const LockInnerLeft = styled.div`
  width: 100%;
  input {
    width: 100%;
    background: #0b0b1f;
    border: 1px solid #434253;
    padding: 15px;
    border-radius: 2px;
    color: #fff;
  }
`;
export const LockInput = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 8px;
    background: #00ffff;
    border: none;
    color: #000;
    top: 8px;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 2px;
  }
`;
export const LockInnerRight = styled.div`
  strong {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 240px;
    margin: auto;
    margin-bottom: 8px;
    span {
      background: #38c948;
      width: 100%;
      height: 3px;
    }
    svg {
      width: 24px;
      height: auto;
    }
  }
`;
export const LockInnerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  button {
    background: #00ffff;
    border: none;
    width: 100%;
    padding: 15px;
    border-radius: 2px;
    color: #000;
    font-size: 14px;
  }
`;
export const YourLock = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  h6 {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
  }
  ul {
    background: #22262d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    overflow: auto;
    overflow: auto;
    gap: 20px;
    li {
      font-size: 12px;
      padding: 18px;
      min-width: fit-content;
    }
  }
`;
export const UnLockArea = styled.div`
  p {
    color: #d0dce8;
    font-size: 14px;
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #101028;
    font-size: 12px;
    padding: 18px;
    overflow: auto;
    gap: 20px;
    li {
      min-width: fit-content;
    }
  }

  button {
    background: #00ffff;
    width: 100%;
    border: none;
    color: #000;
    padding: 15px;
    margin-top: 10px;
    cursor: pointer;
  }
`;
export const InfoArea = styled.div`
  li {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #22262d;
    word-break: break-all;
    color: #d0dce8;
    margin-bottom: 12px;
    strong {
      color: #fff;
      font-weight: 400;
    }
  }
`;
export const SwapContent = styled.div`
  text-align: center;
  margin: auto;
  color: #d0dce8;
  h2 {
    font-size: 40px;
    margin: 0;
    margin-bottom: 40px;
  }

  h2 strong {
    color: #38c948;
  }

  p {
    padding: 10px 50px 50px;
    line-height: 1.8;
  }
  @media screen and (max-width: 991px) {
    margin: 30px;
    h2 {
      font-size: 30px;
      margin: 0;
      margin-top: 50px;
    }
    p {
      padding: 0px 0px 30px;
      line-height: 1.8;
      font-size: 14px;
    }
  }
`;
