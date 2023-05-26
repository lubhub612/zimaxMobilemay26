import styled from 'styled-components';

export const HeaderArea = styled.div`
  border-bottom: 1px solid #3e4049;
  padding: 15px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  background: #262831;
  z-index: 100;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const DashMenu = styled.div`
  color: #fff;
  background: #3c3e46;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  @media screen and (max-width: 991px) {
    background: #494b53;
    padding: 8px;
    border-radius: 6px;
    margin-left: 5px;
  }
`;

export const WalletDropMenu = styled.div`
  position: absolute;
  top: 70px;
  background: #34363f;
  padding: 15px 25px;
  right: 40px;
  z-index: 999;
  border-radius: 10px;
  min-width: 200px;
  color: #fff;

  ul {
    margin: 0;
    display: block;
  }

  ul li a svg {
    height: auto;
    width: 22px;
  }
  span {
    color: #fff;
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
  }

  ul li p {
    margin: 0;
    font-size: 12px;
    color: #ccc;
  }

  ul li strong {
    font-size: 12px;
    font-weight: 500;
  }

  ul {
    margin: 0;
  }

  ul li {
    margin: 15px 0;
  }
  @media screen and (max-width: 991px) {
    top: 60px;
    right: 10px;
  }
`;
export const WalletAddressInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  img {
    border-radius: 50px;
    width: 40px !important;
    height: auto !important;
  }
  span strong {
    display: block;
    font-size: 16px;
  }

  span {
    font-size: 12px;
    text-align: left;
  }
`;
export const LogoItem = styled.div`
  a {
    display: flex;
  }
`;
export const WalletButtonIcon = styled.span`
  cursor: pointer;
  display: flex;
  svg {
    color: #38c948;
  }
`;
export const WalletIcon = styled.span`
  button {
    cursor: default !important;
  }
  a {
    display: flex;
  }
  svg {
    color: #38c948;
  }
`;
export const ConnectWallets = styled.span`
  button {
    background: #fff !important;
    color: #000 !important;
  }
`;
export const Arrow = styled.svg`
  width: 10px;
  height: 10px;
  color: #a3a5a9;
`;
export const MoreMenuUL = styled.ul`
  position: absolute !important;
  bottom: 70px !important;
  width: 100% !important;
`;
export const MobileNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background: #34363f;
  width: 100%;
  border-top: 1px solid #444851;
  padding: 5px 40px 10px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    cursor: pointer;
  }
  .active {
    a {
      color: #fff;
    }
    svg {
      background: #38c948;
      color: #fff;
    }
  }

  svg {
    display: block;
    margin: auto;
    height: auto;
    width: 36px;
    padding: 8px;
    border-radius: 10px;
  }

  a {
    color: #9a9b9f;
    text-decoration: none;
    font-size: 12px;
    text-align: center;
    display: grid;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 40px;
  }
`;
export const LeftMenu = styled.div`
  display: block;
`;
export const MoreMenus = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #262731;
  height: 100%;
  overflow: auto;
  z-index: 99;
  padding-bottom: 100px;
  strong {
    position: fixed;
    right: 40px;
    color: #fff;
    top: 70px;
    cursor: pointer;
  }
  ul {
    background: #34363f;
    margin-bottom: 12px;
    padding: 0 20px;
    li:last-child {
      border-bottom: 0;
    }
  }

  li {
    color: #9a9b9f;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid #464751;
  }

  a {
    color: #9a9b9f;
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
  }

  svg {
    height: auto;
    width: 22px;
  }
  li.pencakeswapLink span {
    display: flex;
  }
`;
export const MobileHeader = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    background: #34363f;
    border-bottom: 1px solid #464851;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
  }
`;
export const Language = styled.div`
  position: fixed;
  background: #000000b3;
  border-radius: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    background: #34363f;
    color: #fff;
    width: 400px;
    min-height: 200px;
    border-radius: 15px;
    h2 {
      border-bottom: 1px solid #464851;
      padding: 15px;
      margin: 0;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      gap: 15px;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      svg {
        width: 34px;
        height: auto;
        cursor: pointer;
      }
    }
    ul {
      margin: 15px 10px;
      li {
        padding: 12px 15px;
        border-radius: 8px;
        &:hover {
          background: rgba(255, 255, 255, 0.04);
          cursor: pointer;
        }
      }
      .active {
        position: relative;
      }

      .active:before {
        content: '';
        position: absolute;
        left: -10px;
        top: 14px;
        background: #fff;
        width: 2px;
        height: 20px;
      }
    }
  }
`;
export const ThemeDropDown = styled.div`
  display: block;
  right: 40px;
  top: 65px;
  min-width: 250px;
  background: #34363f;
  border: 1px solid #464851;
  border-radius: 10px;
  position: absolute;
  z-index: 99;

  ul {
    list-style: none;
    margin: 0;
    padding: 10px;
    li {
      display: flex;
      align-items: center;
      color: #fff;
      text-decoration: none;
      gap: 20px;
      padding: 15px;
      border-radius: 10px;
      margin: 0px;
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background: #3c3d47;
      }
      span {
        background: #9a9b9f;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: #000;
        svg {
          width: 20px;
          height: auto;
        }
      }
    }
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    background: #3c3e46;
    color: #fff;
    border: none;
    padding: 9px 12px;
    border-radius: 10px;
    font-weight: 500;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    @media screen and (max-width: 991px) {
      background: #494b53;
      border-radius: 6px;
      padding: 8px 14px;
      font-size: 12px;
      font-weight: 500;
    }
    img {
      width: 18px;
      height: auto;
      margin-right: 5px;
      @media screen and (max-width: 991px) {
        margin-right: 0;
      }
    }
    svg {
      width: 18px;
      height: auto;
    }
  }
  .nav-logged-user-section {
    position: relative;
    img {
      border-radius: 50px;
      width: 19px;
      height: auto;
    }
  }
  .creator-icon {
    position: absolute;
    top: 3px;
    left: 12px;
    svg {
      height: auto !important;
      width: 14px !important;
    }
  }
`;

export const DropDownMenu = styled.div`
  position: absolute;
  top: 80px;
  z-index: 9999;
  background: #34363f;
  border: 1px solid #464851;
  left: 200px;
  border-radius: 10px;
  @media screen and (max-width: 991px) {
    position: fixed;
    top: unset;
    background: #000000de;
    border: unset;
    border-radius: 10px;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 999999;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
  div {
    @media screen and (max-width: 991px) {
      min-width: 100%;
      background: #34363f;
      border-radius: 10px;
    }
    h2 {
      font-size: 20px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 20px;
      color: #fff;
      border-bottom: 1px solid #464851;
      margin: 0;
      svg {
        cursor: pointer;
      }
    }
  }
  ul {
    margin: 0;
    padding: 10px;
    list-style: none;
    min-width: 250px;
    li {
      a {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        gap: 20px;
        padding: 15px;
        border-radius: 10px;
        margin: 0px;
        font-size: 16px;
        line-height: 22px;
        font-family: Manrope, Poppins, Inter, PingFangSC-Regular,
          'Microsoft YaHei', sans-serif;
        font-weight: 600;
        &:hover {
          background: #3c3d47;
        }
        img {
          width: 20px;
          vertical-align: middle;
        }
        strong {
          background: #fff;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
      }
    }
  }
`;
