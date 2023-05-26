import styled from 'styled-components';

export const NftCal = styled.div`
  padding: 0 20px;
  h2 {
    background: linear-gradient(180deg, #ffbe47, #ff4eaa);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    text-align: center;
    margin: 0;
    font-size: 50px;
  }
  h3 {
    font-size: 50px;
    color: #fff;
    text-align: center;
    margin: 20px;
  }
  p {
    text-align: center;
    color: #bdbebe;
    max-width: 800px;
    margin: auto;
    font-weight: 600;
  }
  @media screen and (max-width: 991px) {
    padding: 60px 20px 10px;
    h2 {
      font-size: 35px;
    }
    h3 {
      font-size: 35px;
    }
  }
`;
export const NftGrid = styled.div`
  margin: 50px 0;
  padding: 0 20px;

  .nftGridItem {
    background: rgba(36, 37, 38, 1);
    padding: 50px;
    border-radius: 30px;
    color: #fff;
    max-width: 900px;
    margin: auto;
    margin-bottom: 50px;
  }

  .nftGridItem:nth-child(2) {
    .nftGridItemHeading h2 span,
    .nftGridBody ul li.active {
      background: #7737ff;
    }
  }

  .nftGridItem:nth-child(3) {
    .nftGridItemHeading h2 span,
    .nftGridBody ul li.active {
      background: #d03a94;
    }
  }

  .nftGridItem:nth-child(4) {
    .nftGridItemHeading h2 span,
    .nftGridBody ul li.active {
      background: #ffa242;
    }
  }

  .nftGridItemHeading {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .nftGridItemHeading h2 {
    border: 3px solid #2f2f2f;
    filter: drop-shadow(5px 5px 12px rgba(0, 0, 0, 0.15))
      drop-shadow(-5px -5px 12px #2f2f2f);
    padding: 20px 40px 20px 15px;
    margin: 0;
    border-radius: 20px;
  }

  .nftGridItemHeading h2 span {
    background: #00cbcb;
    padding: 12px 15px;
    border-radius: 15px;
    margin-right: 20px;
  }

  .nftGridItemHeading p {
    color: #c4c4c4;
    max-width: 420px;
    font-size: 16px;
  }

  .nftGridBody {
    display: flex;
    gap: 90px;
    align-items: center;
    margin-top: 50px;
  }

  .nftGridBody ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }

  .nftGridBody ul li {
    background: #403f41;
    border-radius: 10px;
    padding: 18px 20px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    &.active {
      background: #00cbcb;
    }
  }

  .nftInfo p strong {
    display: block;
    margin-top: 14px;
    color: #fff;
    font-size: 20px;
  }

  .nftInfo p {
    color: #c5c5c5;
    margin: 0;
  }

  .nftInfo h2 strong {
    display: block;
    font-size: 30px;
    margin-top: 5px;
    color: #fff;
  }

  .nftInfo h2 {
    color: #c5c5c5;
    font-weight: 400;
    font-size: 18px;
    margin: 0;
    margin-top: 30px;
  }
  @media screen and (max-width: 991px) {
    .nftGridItem {
      padding: 30px;
    }
    .nftGridItemHeading {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .nftGridBody {
      display: grid;
      grid-template-columns: 1fr;
      gap: 60px;
      margin-top: 30px;
    }

    .nftGridItemHeading h2 {
      padding: 20px 0px 20px 10px;
      font-size: 18px;
    }
    .nftGridItemHeading h2 span {
      font-size: 14px;
    }
    .nftGridBody ul {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
    }
    .nftGridBody ul li {
      padding: 14px 15px;
      font-size: 14px;
    }
  }
`;

export const NftTotal = styled.div`
  background: #622aff;
  max-width: 900px;
  margin: auto;
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 160px;
  border-radius: 30px;

  h2 {
    margin: 0;
    color: #c5b7ff;
    font-weight: 400;
    font-size: 18px;
  }

  h2 strong {
    display: block;
    color: #fff;
    font-size: 36px;
    margin-top: 5px;
  }
  @media screen and (max-width: 991px) {
    margin: 0 30px 100px;
    display: grid;
    gap: 30px;
    padding: 40px 10px;
  }
`;
