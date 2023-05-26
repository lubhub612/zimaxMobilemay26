import styled from 'styled-components';

export const ProfilePanelContainer = styled.div`
  position: relative;
  background: #222430;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding-bottom: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: calc(100vh - 110px);
    overflow-y: auto;
    margin: 22px 20px;
    box-shadow: none;
  }
`;

export const ProfileBanner = styled.div`
  position: relative;
  height: 220px;

  .cover-image {
    width: 100%;
    height: 165px;
    object-fit: cover;
  }

  .logo-image {
    position: absolute;
    top: 125px;
    left: calc(100% / 2 - 50px);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const ProfileHeader = styled.div`
  margin-top: 70px;

  .header-title{
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 51px;
    color: #FFFFFF;
    text-align: center;

    display: flex:
    flex-direction: row;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  .header-link{
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #AAFF26;
    text-align: center;
    margin-top: 10px;
  }

  .header-review{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const ProfileContent = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #ffffff;
  padding: 20px;
`;

export const ProfileFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;

  .footer-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .item-value-flex {
      display: flex;
      align-items: center;

      > img {
        width: 20px;
        height: 18px;
        margin-right: 2px;
      }
    }

    .item-value {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 23px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #aaff26;
    }

    .item-name {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #c4c4c4;
      margin-top: 4px;
    }
  }
`;
