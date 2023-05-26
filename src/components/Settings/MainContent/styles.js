import styled, { css } from 'styled-components';

export const ProfileSettingsContainer = styled.div`
  overflow: auto;
  min-height: 700px;
  height: 100%;
  background: #222430;
  padding: 20px 38px;
}
  padding-bottom: 50px;
  .profile-setting-inner {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 60px;
    grid-row-gap: 30px;
    padding-bottom: 20px;
  }
  h2 {
    color: #fff;
    font-weight: 700;
    font-size: 24px;
  }
  h3 {
    color: #fff;
    font-size: 16px;
    margin-bottom: 0;
  }
  p {
    color: #868d97;
    font-size: 12px;
    margin-bottom: 30px;
  }
  .social-tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }

  .social-tab span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  .social-tab button {
    background: #abff26;
    border: 0;
    padding: 10px 30px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }
  .social-tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }

  .social-tab span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  .social-tab button {
    background: #abff26;
    border: 0;
    padding: 10px 30px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 16px;
  }

  ul li {
    position: relative;
    list-style: none;
  }

  ul li input {
    background: #0f1017;
    border: none;
    padding: 8px 30px;
    margin: 2px 0;
    display: block;
    width: 100%;
    border-radius: 6px;
    color: #fff;
    &:focus {
      outline: none;
    }
  }
  ul li svg {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: #89939b;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
  }
  strong {
    color: #fff;
    margin-top: 30px;
    display: block;
  }
  .profile-setting-right strong {
    margin-bottom: 15px;
  }
  .logo-image {
    width: 130px;
    height: 130px;
    position: relative;
  }
  .logo-image:hover .overlay {
    visibility: visible;
    opacity: 1;
  }
  .logo-image .overlay {
    top: 0;
    position: absolute;
    background: #00000063;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 49px;
    visibility: hidden;
    transition: 0.3s;
    opacity: 0;
  }
  .logo-image img {
    object-fit: cover;
    width: 130px;
    height: 130px;
    border-radius: 50px;
  }
  .cover-image {
    width: 350px;
    overflow: hidden;
    position: relative;
    .overlay {
      position: absolute;
      top: 0;
      background: #00000063;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: hidden;
      opacity: 0;
      transition: 0.3s;
    }
  }
  .cover-image:hover .overlay {
    visibility: visible;
    opacity: 1;
  }
  .profile-setting-right {
    margin-right: 100px;
  }
  .cover-image img {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
  .overlay-text {
    position: absolute;
    margin-top: 50px;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    &:hover {
      color: #aaff27;
    }
  }
  @media (max-width: 991px) {
    padding: 20px;
    .profile-setting-inner {
      grid-template-columns: 1fr;
      padding-bottom: 50px;
    }
    .profile-setting-right {
      margin-right: 50px;
      margin-top: -50px;
    }
  }
`;

export const MainContentContainer = styled.div`
  position: relative;
  height: calc(100vh - 64px);
  overflow: hidden;
  padding: 24px;
  padding-bottom: 80px;

  @media (min-width: 800px) {
    padding: 34px 20px 34px 104px;
  }
`;

export const SettingFormContainer = styled.div`
  border-radius: 15px;
  height: 100%;
  overflow: hidden;

  @media (min-width: 800px) {
    max-width: 100%;
    margin-left: 320px;
  }

  @media (min-width: 1200px) {
    max-width: 950px;
    margin-left: 320px;
    margin-right: auto;
  }
`;

export const SettingBanner = styled.div`
  position: relative;
  display: flex;

  .cover-image {
    position: relative;
    height: 165px;
    width: 100%;

    &:hover {
      > .overlay {
        opacity: 0.8;
      }
    }

    > img {
      width: 100%;
      height: 165px;
      object-fit: cover;
    }
  }

  .logo-image {
    position: absolute;
    top: 125px;
    left: calc(100% / 2 - 50px);

    .overlay {
      border-radius: 50%;
    }

    &:hover {
      > .overlay {
        opacity: 0.8;
      }
    }

    > img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: #222222;
    transition: all 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .overlay-text {
      font-weight: 600;
      font-size: 13px;
      line-height: 17px;
      color: #ffffff;
      text-align: center;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: #38c948;
      }
    }
  }
`;

export const SettingForm = styled.div`
  padding: 62px 38px 38px 38px;
  background: #222430;
  height: calc(100% - 165px) !important;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #38c948;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #38c948;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #38c948;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const VerificationSection = styled.div`
  background: #222430;
  border-radius: 15px;
  height: 100%;
  overflow: auto;
  padding: 30px 15px;

  @media (min-width: 576px) {
    padding: 50px 38px;
  }
`;

export const NotificationSection = styled.div`
  background: #222430;
  border-radius: 15px;
  padding: 50px 38px;
  height: 100%;
  overflow: auto;

  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    color: #ffffff;
  }

  .description {
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: #ffffff;
    margin-top: 13px;
  }

  .content {
    margin-top: 45px;

    .content-item {
      margin-bottom: 18px;
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #40475d;
  margin-bottom: 40px;
`;

export const Tab = styled.div`
  padding: 9px 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
  position: relative;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      color: #38c948;
      &::after {
        content: '';
        background-color: #38c948;
        height: 1px;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
      }
    `}

  @media (min-width: 340px) {
    font-size: 16px;
    padding: 9px 10px;
  }

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

export const ProjectInfoWrapper = styled.div`
  > div {
    padding: 0;
  }
`;
