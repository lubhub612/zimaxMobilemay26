import styled from 'styled-components';


export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin-bottom: 13px;
  }

  #select-input {
    .item {
      padding: 5px 20px;
    }
  }
`
export const MainArea = styled.div`
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
export const Main = styled.div`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #dddddd;
    font-weight: 300;
    margin-top: 30px;
  }

  h3 img {
    max-width: 14px;
  }

  h3 strong {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h3 strong span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  button {
    background: #00ffff;
    border: none;
    color: #000;
    font-weight: 600;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Item = styled.div`
  display: grid;
  align-items: center;
  background: #22262d;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  grid-template-columns: 1fr 2fr;
`;
export const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 20px;
  img {
    max-width: 30px;
    height: auto;
  }
`;
export const ItemRight = styled.div`
  position: relative;
  input {
    background: #1f2125;
    border: none;
    color: #fff;
    font-weight: 600;
    padding: 16px;
    border-radius: 10px;
    width: 100%;
    font-size: 20px;
  }
  span {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #afb0b3;
    font-size: 14px;
  }
`;
export const SwapContent = styled.div`
  margin: auto;
  color: #d0dce8;
  max-width: 700px;
  text-align: center;
  h2 {
    font-size: 40px;
    margin: 0;
  }

  h2 strong {
    color: #38c948;
  }

  p {
    padding: 10px 50px 30px;
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
