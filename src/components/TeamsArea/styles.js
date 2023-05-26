import styled from 'styled-components';

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
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  background: #252831;
  max-width: 900px;
  svg {
    cursor: pointer;
    color: #fff;
  }
`;
export const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    display: grid;
    gap: 40px;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
  img {
    max-width: 120px;
    border-radius: 50%;
  }
`;
export const ProfileContent = styled.div`
  span {
    display: block;
    color: #828282;
    font-weight: 500;
  }

  strong {
    font-size: 30px;
    font-weight: 700;
    margin: 5px 0;
    display: block;
  }

  p {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media screen and (max-width: 991px) {
    strong {
      font-size: 20px;
    }

    p {
      font-size: 12px;
    }
  }
`;
export const MyLink = styled.div`
  background: #161620;
  max-width: 450px;
  border-radius: 10px;
  padding: 25px;

  h3 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #828182;
    font-size: 16px;
    margin-bottom: 20px;
  }

  a {
    color: #38c948;
    text-decoration: none;
    font-weight: 700;
    font-size: 26px;
    @media screen and (max-width: 1040px) {
      font-size: 18px;
    }
  }

  p {
    color: #fff;
    margin: 0;
    margin-top: 10px;
  }
`;
export const ItemInner = styled.div`
  display: flax;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
  img {
    max-width: 50px;
    border-radius: 50%;
  }
`;
export const ListArea = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  @media screen and (max-width: 991px) {
    display: grid;
    gap: 30px;
  }
`;
export const ItemContent = styled.div`
  h4 {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
  }

  h5 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    margin: 0;
    margin-top: 5px;
  }
`;
export const Item = styled.div`
  background: #161620;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  width: 445px;
  @media screen and (max-width: 991px) {
    width: unset;
  }
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0;
    strong:hover p {
      visibility: visible;
    }
    p {
      position: absolute;
      top: -93px;
      background: #353535;
      color: #fff;
      padding: 12px;
      border-radius: 10px;
      left: -20px;
      visibility: hidden;
    }
    span {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #828182;
      font-weight: 400;
      font-size: 16px;
    }
    strong {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
export const ExtraInfo = styled.div`
  h5 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 10px;
  }

  p {
    margin: -0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 20px;
  }
`;
export const FaceId = styled.div`
  background: #161620;
  max-width: 920px;
  border-radius: 10px;
  margin: 30px 0 0;
  padding: 20px;
  min-height: 500px;

  p {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #fff;
    font-weight: 700;
    background: #23222c;
    padding: 10px 20px;
    max-width: fit-content;
    border-radius: 10px;
    img {
      max-width: 30px;
      border-radius: 50%;
    }
  }
`;
export const FaceIdInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const FaceIdItem = styled.div`
  span {
    display: block;
    color: #828182;
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  strong {
    color: #fff;
    font-size: 24px;
  }
`;

export const FaceRefItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  a {
    text-decoration: none;
  }
  p {
    white-space: nowrap;
  }
`;
