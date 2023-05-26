import styled from 'styled-components';

export const SellNowCardItemContainer = styled.div`
  position: relative;
  border-radius: 20px;
  width: 100%;
  max-width: 403px;
  text-align: left;
  display: flex;
  background: #314e02;
  transition: all 0.2s;
  max-width: 388px;

  @media (max-width: 1440px) {
    max-width: 388px;
  }

  .card-content {
    margin: 1px;
    background: #222430;
    border-radius: 20px;
    padding: 12px 0;
    height: calc(100% - 2px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .card-header {
    padding: 0 13px;
    display: flex;
    flex-direction: row;

    .item-title {
      flex: 1 1 auto;
      text-align: center;
      color: #38c948;
      font-weight: bold;
    }
  }

  .card-media {
    height: 100%;
    cursor: pointer;
    padding: 3px;
  }

  .card-video-container {
    position: relative;
    display: grid;
    height: 100%;
  }

  .card-image-container {
    position: relative;
    display: grid;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      max-height: 400px;
    }
  }

  .card-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      img {
        display: none;
      }
    }
  }

  .card-title {
    font-style: normal;
    font-weight: 700;
    margin-top: 16px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0;
    cursor: pointer;
    color: #efefef;
    white-space: pre-wrap;
  }

  .card-artist {
    margin-top: 8px;
    line-height: 18px;
    font-size: 12px;
    color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: pre-wrap;
  }

  .card-details {
    display: flex;
    justify-content: space-between;
    padding: 0 13px;
  }

  .card-action-detail {
    display: flex;
    align-items: center;

    .card-favorite,
    .card-message {
      display: flex;
      align-items: center;
      margin-right: 7px;

      > svg {
        width: 18px;
        height: 18px;
        color: #38c948;
      }

      > span {
        margin-left: 4px;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
      }
    }
  }

  .card-price-detail {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    color: #ffffff;
    white-space: pre-wrap;
    margin-top: 11px;

    .card-price-type {
      display: flex;
      align-items: center;

      > img {
        width: 10px;
        height: 10px;
      }

      > span {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #38c948;
      }
    }

    .card-price-value {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      text-align: right;
    }
  }

  .card-multiple {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0 10px;
  }

  .multiple-tile-1 {
    position: relative;
    overflow: hidden;
    height: 3px;

    &::before {
      content: '';
      display: block;
      height: 19px;
      background: #fff;
      border-radius: 4px;
      width: calc(100% - 2px);
      position: absolute;
      bottom: 1px;
      left: 1px;
      z-index: 1;
      background-color: #000;
    }

    &::after {
      content: '';
      display: block;
      height: 20px;
      border-radius: 5px;
      background: #efefef4d;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  .multiple-tile-2 {
    position: relative;
    overflow: hidden;
    height: 4px;

    &::before {
      content: '';
      display: block;
      height: 19px;
      background: #fff;
      border-radius: 4px;
      position: absolute;
      bottom: 1px;
      z-index: 1;
      background-color: #000;
      left: 11px;
      width: calc(100% - 22px);
      bottom: 2px;
    }

    &::after {
      content: '';
      display: block;
      height: 20px;
      border-radius: 5px;
      background: #efefef4d;
      position: absolute;
      width: calc(100% - 20px);
      bottom: 1px;
      left: 10px;
    }
  }
`;

export const CardAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > svg {
    width: 20px;
    height: 20px;
  }
`;
