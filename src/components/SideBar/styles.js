import styled from 'styled-components';

export const SideBarContainer = styled.div`
  background: #34363f;
  width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: grid;
  z-index: 999;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const SideBarTop = styled.div`
  padding: 20px 10px;
  ul ul {
    margin: 0;
    padding: 0 15px;
  }

  ul ul li {
    margin: 0;
  }

  ul ul li a {
    padding: 10px;
    font-size: 14px;
  }
  ul li.active ul a {
    background: unset;
    color: #d0dce8;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 30px;
    li {
      margin: 10px 0;
      &.active a {
        background-color: #00ffff;
        color: #000;
      }
      a {
        text-decoration: none;
        color: #d0dce8;
        font-size: 16px;
        font-weight: 500;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 10px 10px;
        border-radius: 8px;
        gap: 10px;
        transition: 0.3s;
        position: relative;
        span svg {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        &:hover {
          background-color: #00ffff;
          color: #000;
        }
      }
    }
  }
`;
export const SideBarBottom = styled.div`
  display: flex;
  align-items: flex-end;
  ul {
    margin: 0;
    padding: 0 10px;
    list-style: none;
    border-top: 1px solid #464851;
    li {
      &.active a {
        color: #38c948;
      }
      a {
        color: #d0dce8;
        padding: 15px 10px;
        align-items: center;
        display: flex;
        gap: 10px;
        font-size: 14px;
        text-decoration: none;
        font-size: 12px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  li.pencakeswapLink svg {
    height: auto;
    width: 18px;
  }
`;
export const LogoItem = styled.div`
  a {
    display: flex;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 150px;
  }
`;
export const Version = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 20px;
  color: #717379;
  margin-top: 100px;
  font-size: 12px;
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
`;
export const Arrow = styled.svg`
  width: 10px;
  height: 10px;
  color: #a3a5a9;
`;
export const SocialIcon = styled.div`
  ul {
    display: flex;
    align-items: center;
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
          background-color: #00ffff;
          color: #000;
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
