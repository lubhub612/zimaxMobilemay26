import styled from 'styled-components';

export const LevelMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: max-content;
  gap: 40px;
  margin: auto;
  h4 {
    background: #ede8fd;
    text-align: center;
    padding: 30px 10px;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 30px;
    span {
      display: block;
      color: #787a9b;
      font-weight: 300;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    margin: 30px;
    margin-bottom: 100px;
  }
`;
export const LevelItem = styled.div`
  max-width: 380px;
  border-radius: 20px;
  padding: 40px 30px;
  background: linear-gradient(
      160.47deg,
      rgb(240, 243, 253) 0.35%,
      rgb(252, 240, 253) 99.18%
    ),
    rgb(255, 255, 255);
  position: relative;
  &:nth-child(2) {
    background: linear-gradient(
        158.87deg,
        rgb(226, 247, 249) 0%,
        rgb(211, 243, 245) 100%
      ),
      rgb(255, 255, 255);
    h4 {
      background: #c1eff2;
    }
  }
  &:nth-child(3) {
    background: linear-gradient(
      147.66deg,
      rgb(254, 241, 225) 0%,
      rgb(253, 242, 202) 88.25%
    );
    h4 {
      background: #fce6bd;
    }
  }
  &:nth-child(4) {
    background: linear-gradient(
        160.26deg,
        rgb(255, 234, 234) 5.25%,
        rgb(255, 245, 234) 100%
      ),
      rgb(255, 255, 255);
    h4 {
      background: #ffe2db;
    }
  }
  button {
    width: 100%;
    padding: 0;
    border: none;
    background: unset;
    a {
      color: #fff;
      text-decoration: none;
      background: #25273d;

      font-size: 18px;
      color: #fff;
      padding: 12px;
      border-radius: 50px;
      font-weight: 500;
      margin-top: 20px;
      margin-bottom: 10px;
      display: block;
    }
  }
  h3 {
    position: absolute;
    right: -20px;
    top: 20px;
    background: #575cfe;
    color: #fff;
    font-weight: 300;
    padding: 5px 15px;
    font-size: 12px;
    border-radius: 50px;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
    font-size: 14px;
    color: #78799c;
    strong {
      color: #25273d;
    }
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #575cfe;
      svg {
        height: auto;
        width: 20px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    max-width: unset;
  }
`;
export const LevelHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  h2 {
    font-size: 18px;
    color: #25273d;
    margin: 0;
  }
  p {
    color: #78799c;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 10px;
  }
  img {
    max-width: 100%;
  }
`;
export const LevelHeaderLeft = styled.div``;

export const SwapContent = styled.div`
  margin: auto;
  color: #d0dce8;
  max-width: 800px;
  text-align: center;
  h2 {
    font-size: 40px;
    margin: 0;
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
