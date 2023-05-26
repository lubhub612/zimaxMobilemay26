import styled from 'styled-components';

export const Main = styled.div`
  @media screen and (max-width: 991px) {
    margin: 30px;
    margin-bottom: 100px;
  }
`;
export const CardOne = styled.div`
  background: #28293c;
  border: 1px solid #363853;
  position: relative;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
  }
  span {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 8px;
    display: block;
  }
  h2 {
    margin: 0;
    font-size: 28px;
    color: #00ffff;
    font-weight: 600;
  }
  h1 {
    margin: 0;
    color: #00ffff;
  }
  p {
    margin: 0;
    color: #00ffff;
    h5 {
      margin: 0;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 70px;
    margin-top: 10px;
  }
  @media screen and (max-width: 991px) {
    ul {
      gap: 20px;
      display: grid;
    }
    img {
      width: 150px;
    }
  }
`;
export const AreaOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;
export const MiniCardArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;
export const CardTwo = styled.div`
  background: #28293c;
  border: 1px solid #363853;
  position: relative;
  padding: 15px 15px;
  border-radius: 10px;
  color: #fff;
  display: grid;
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    svg {
      color: #777891;
      width: 24px;
      height: auto;
    }
  }
  p {
    color: #7c7d96;
    font-size: 12px;
    font-weight: 500;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 700;
    svg {
      color: #38c948;
      height: auto;
      width: 12px;
    }
  }
`;
export const CardThree = styled.div`
  background: #28293c;
  border: 1px solid #363853;
  position: relative;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  h3 {
    margin: 0;
    font-size: 16px;
    color: #fff;
  }

  p {
    font-size: 14px;
    color: #7c7d96;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }

  svg {
    color: #38c948;
    height: auto;
    width: 12px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;
export const CardFour = styled.div`
  background: #28293c;
  border: 1px solid #363853;
  position: relative;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    position: relative;
    span {
      font-size: 12px;
      background: #000000;
      padding: 5px 10px;
      border-radius: 10px;
    }
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 5px;
    gap: 10px;
    span {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
    }
    strong {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      gap: 10px;
    }
    strong button {
      background: #5f3b43;
      border: none;
      color: #ff7c7c;
      border-radius: 50px;
      padding: 4px 7px;
      font-size: 12px;
    }
  }

  h5 {
    background: #303144;
    margin: 0;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    span {
      color: #7c7d96;
      font-weight: 400;
    }
  }

  ul {
    background: #303144;
    border-radius: 10px;
    padding: 15px;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #7c7d96;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 10px;
  }

  ul li span {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    font-weight: 500;
  }

  li span strong {
    background: #5e6088;
    width: 13px;
    height: 13px;
    border-radius: 50px;
  }

  li:first-child span strong {
    background: #58b5c1;
  }

  ul li p {
    margin: 0;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    width: 100%;
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  ul li p span,
  ul li p strong {
    height: 5px;
    background: #58b5c1;
    display: block;
    border-radius: 50px;
    width: 100%;
  }

  ul li:last-child {
    margin-bottom: 0;
  }

  ul li p strong {
    background: #5e6088;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  h6 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
  }

  h6 span {
    font-size: 14px;
    color: #7c7d96;
  }

  h2 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
    svg {
      color: #38c948;
      height: auto;
      width: 12px;
    }
  }
`;
export const AreaLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  div {
    display: grid;
    gap: 10px;
  }
`;
export const CardFive = styled.div`
  display: grid;
  background: #28293c;
  border: 1px solid #363853;
  position: relative;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  z-index: 1;
  overflow: hidden;

  h3 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
  }

  h3 span {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  h3 strong {
    font-size: 12px;
    background: #000000;
    padding: 5px 10px;
    border-radius: 10px;
  }
  img {
    position: absolute;
    right: 0px;
    top: -20px;
    max-width: 150px;
    z-index: -1;
  }
  h6 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }

  h6 svg {
    color: #38c948;
    height: auto;
    width: 12px;
  }
`;

export const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin: 20px 0;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  p {
    color: #7c7d96;
    font-size: 14px;
  }

  ul li {
    display: inline-block;
    margin: 0 10px 10px;
    @media screen and (max-width: 991px) {
      margin: 0 5px 10px;
    }
  }

  ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    display: block;
  }

  ul li a svg {
    background: #303146;
    display: block;
    border-radius: 15px;
    height: auto;
    width: 49px;
    padding: 16px;
    margin: auto;
    margin-bottom: 5px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const AreaRight = styled.div`
  display: grid;
  gap: 10px;

  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ol li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #33344e;
    padding: 12px 0;
    @media screen and (max-width: 991px) {
      display: grid;
      gap: 20px;
    }
  }

  ol li p {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 12px;
    margin: 0;
    color: #7c7d96;
    font-weight: 500;
    @media screen and (max-width: 991px) {
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  ol li p span {
    display: flex;
    align-items: center;
    gap: 15px;
    min-width: 100px;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }

  ol li:last-child {
    border-bottom: 0;
  }

  ol li a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    &:hover {
      opacity: 0.8;
    }
    @media screen and (max-width: 991px) {
      justify-content: space-between;
    }
  }

  ol li a svg {
    color: #38c948;
    height: auto;
    width: 12px;
  }
`;

export const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  color: #fff;
  margin-top: 50px;
  align-items: center;
  max-width: 1060px;
  img {
    max-width: 100%;
    height: auto;
    border: 1px solid #363853;
    border-radius: 15px;
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;
export const InfoContent = styled.div`
  max-width: 400px;
  h2 {
    font-size: 30px;
    margin: 0;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    text-decoration: none;
    background: #00ffff;
    padding: 12px 20px;
    color: #000;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 20px;
  }
`;
