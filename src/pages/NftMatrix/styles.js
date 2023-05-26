import styled from 'styled-components';

export const MainArea = styled.div`
  h2 {
    font-size: 36px;
    color: #fff;
    margin: 0 0 50px;
  }

  .list-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  .list-item {
    padding: 30px;
    border-radius: 20px;
  }
  .list-item h3 {
    font-size: 26px;
  }
  .list-item-x3 {
    background-image: linear-gradient(to bottom right, #1b1c1e, #344da7);
    a {
      background: #416aff;
    }
  }
  .list-item-x4 {
    background-image: linear-gradient(to bottom right, #1b1c1e, #5430a8);
    a {
      background: #7738ff;
    }
  }
  .list-item-zzz {
    background-image: linear-gradient(to bottom right, #1b1c1e, #832e62);
    a {
      background: #d03a94;
    }
  }
  .list-item-xgold {
    background-image: linear-gradient(to bottom right, #1b1c1e, #996736);
    a {
      background: #ffa244;
    }
  }
  .list-item h3 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 30px;
  }

  .list-item-inner {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    gap: 200px;
    align-items: end;
    @media screen and (max-width: 1600px) {
      gap: 100px;
    }
    @media screen and (max-width: 1300px) {
      gap: 30px;
    }
    @media screen and (max-width: 1140px) {
      grid-template-columns: 1fr;
    }
  }

  .list-item-inner ul li {
    background: #416aff;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
  }

  .list-item-inner a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    max-width: fit-content;
    padding: 12px 30px;
    border-radius: 10px;
    color: #fff;
    gap: 15px;
    margin-left: auto;
    font-weight: 700;
  }
  .footer-list {
    margin-top: 50px;
  }

  .footer-list-area {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 50px;
    align-items: flex-start;
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  .footer-list-left ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    border-bottom: 1px solid #3a3b3c;
    padding: 15px 0;
  }

  .footer-list-left ul li span {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .footer-list-left ul li span:last-child {
    color: #8c8c8d;
  }
  .footer-list-left ul li span:last-child svg {
    cursor: pointer;
  }
  .footer-list-left ul li span:first-child svg {
    color: #2cff4e;
    background: #2cff4e29;
    height: auto;
    width: 45px;
    padding: 10px;
    border-radius: 20px;
  }

  .footer-right-item {
    background: #3d3d46;
    padding: 30px;
    color: #fff;
    border-radius: 15px;
  }

  .footer-right-item h4 {
    margin: 0;
    color: #929293;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .footer-right-item h4 svg {
    color: #fff;
  }

  .footer-right-item h5 {
    font-size: 30px;
    margin: 0;
  }

  .footer-right-item span {
    color: #2cff4e;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 11px;
  }

  .footer-list-right {
    display: grid;
    gap: 30px;
  }
  .footer-list-id {
    color: #416aff;
    background: #416aff26;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .footer-right-item ul li span:first-child {
    color: #8c8c8d;
  }

  .footer-right-item ul li {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: 1px solid #dddddd36;
    padding: 15px 0;
  }

  .footer-right-item ul li span:last-child {
    display: flex;
    margin-left: auto;
    color: #fff;
    gap: 20px;
  }

  .footer-right-item ul li span:last-child svg {
    cursor: pointer;
  }

  .footer-right-item ul li:first-child {
    padding-top: 0;
  }
  @media screen and (max-width: 991px) {
    margin: 20px 20px 100px;
  }
`;
