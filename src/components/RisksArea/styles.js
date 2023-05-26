import styled from 'styled-components';

export const Main = styled.div`
  text-align: center;
  color: #fff;
  max-width: 850px;
  margin: auto;
  margin-bottom:: 50px;
  @media screen and (max-width: 991px) {
    padding: 30px;
  }
  svg {
    margin-top: -50px;
  }
  h2 {
    margin: 0;
    margin-top: -20px;
    font-weight: 400;
    strong {
      color: #38C948;
    }
  }
  h3 {
    font-weight: 400;
    font-size: 15px;
    color: #bebebe;
    margin-bottom: 50px;
  }
`;
export const MainList = styled.div``;

export const Item = styled.div`
  margin-bottom: 50px;
  h3 {
    text-align: left;
    color: #000;
    background: #00ffff;
    border-top-right-radius: 100px;
    border-top-left-radius: 30px;
    font-size: 18px;
    font-weight: 500;
    width: 380px;
    height: 58px;
    background-size: 100% 80px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    margin-bottom: 0;
    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }
`;
export const ItemContent = styled.div`
  background: #161620;
  text-align: left;
  color: #bebebe;
  padding: 20px;
  border-radius: 15px;
  margin-top: -5px;

  p {
    margin: 0 0 14px;
  }

  a {
    text-decoration: none;
    color: #bebebe;
    display: block;
    margin-bottom: 10px;
    svg {
      margin-left: 10px;
    }
  }
`;
