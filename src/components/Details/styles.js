import styled, { css } from 'styled-components'

export const DetailsContainer = styled.div`
  height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: auto;

  .broadcrum-bar {
    color: white;
    margin: 2vh auto 2vh 2rem;

    span {
      font-weight: regular;
      font-size: 14px;
      letter-spacing: 1.4px;
      color: #efefef;
      cursor: pointer;
      opacity: .6;
      padding: 0 3px;
    }

    .broadcrum-title {
      font-weight: regular;
      font-size: 14px;
      letter-spacing: 1.4px;
      color: #efefef;
      opacity: 1.0;
    }
  }

  .item-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 100%;
    height: 100%;

    @media only screen and (max-width: 429px){
      flex-direction: column;
      height: auto;
      margin-top: 5vh;
      grid-gap: 5vh;
      gap: 5vh;
    }

    @media only screen and (max-width: 800px) {
      flex-direction: column;
      height: auto;
      margin-top: 5vh;
      grid-gap: 5vh;
      gap: 5vh;
    }

    .media-container {
      flex: 1 1;
      height: 100%;
      display: flex;
      -moz-box-align: center;
      align-items: center;
      position: relative;

      @media only screen and (max-width: 1300px) {
        padding: 0 3vh;
        justify-content: center;
        align-self: center;
        margin-left: 0;
      }

      @media only screen and (max-width: 429px) {
        padding: 0 21px;
        margin-left: 0;
      }

      .image {
        width: 100%;
        height: 100%;
        overflow: hidden;
        
        >img {
          width: 100%;
          height: 100%;
          object-fit: scale-down;
        }
      }

      .media {
        width: 100%;
        height: 100%;
        padding: 50px;

        @media only screen and (max-width: 1300px) {
          width: 100%;
          height: 60vh;
          padding: 0 3vh;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .detail-container {
      height: calc(100vh - 64px);
      flex: 1 1;
      max-width: 700px;
      color: #efefef;
      min-height: 80vh;
      overflow: auto;
      background: #222430;
      display: flex;
      flex-direction: column;

      
      @media only screen and (max-width: 1300px) {
        align-self: auto;
        margin-left: 0px;
        justify-content: unset;
        min-height: unset;
      }
      
      @media only screen and (max-width: 429px) {
        align-self: auto;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
      }

      .about-container {
        display: flex;
        flex-direction: column;
        padding: 20px 25px;
        
        .title-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          flex-direction: column-reverse;

          .user-detail {
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 19px;
            text-align: right;
            color: #FFFFFF;
            cursor: pointer;
            align-self: flex-end;
            margin-bottom: 10px;

            svg {
              margin-left: 10px;
            }

            img {
              margin-left: 10px;
              width: 24px;
              height: 24px;
              border-radius: 50%;
            }
          }

          .nft-title {
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
            line-height: 38px;
            display: flex;
            align-items: center;
            color: #FFFFFF;
          }

          .nft-review {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 5px;
          }
          
          @media (min-width: 576px) {
            padding: 24px 35px;
            flex-direction: row;
            align-items: center;
            .nft-title {
              text-align: center;
              font-size: 36px;
              line-height: 46px;
            }
            .user-detail {
              align-self: center;
              margin-bottom: 0px;
            }
          }
        }

        .description-container {
          margin-bottom: 0px;

          .description-title {
            display: flex;
            -moz-box-orient: horizontal;
            -moz-box-direction: normal;
            flex-direction: row;
            grid-gap: 10px;
            gap: 10px;

            .description-text {
              text-align: left;
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 1.6px;
              margin-bottom: 10px;
              margin-top: 10px;
            }
            .description-arrow {
              transform: rotate(180deg);
              display: flex;
              -moz-box-orient: vertical;
              -moz-box-direction: normal;
              flex-direction: column;
              -moz-box-pack: center;
              justify-content: center;
            }
          }

          .description-content {
            text-align: justify;
            font-size: 15px;
            font-weight: 400;
            margin-top: 0;
            margin-bottom: 0;
            line-height: 20px;
            overflow-y: auto;
            span {
              color: #FFFFFF;
              font-weight: bold;
              margin-right: 10px;
            }
          }

          .cate-list {
            display: flex;
            align-items: center;
            margin-top: 10px;
          }
        }

        .action-container {
          display: flex;
          flex-direction: column;
          margin-top: 50px;

          .total-container {
            display: flex;
            grid-gap: 10px;
            gap: 10px;

            .total-label {
              text-align: left;
              font-size: 16px;
              font-weight: 400;
              margin-bottom: 16px;
            }

            .total-value {
              text-align: left;
              font-size: 16px;
              font-weight: 400;
              margin-bottom: 16px;
            }
          }

          .button-container {
            margin-top: auto;
            display: flex;
            align-items: center;
            width: 85%;

            .time-remaining {
              color: #A4FF20;
              font-weight: 600;
              margin: 0px 10px;
            }
          }

          .button-group {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-right: 20px;
            flex-direction: column;

            .nft-owner {
              font-weight: 600;
              color: #FF8000;
            }

            .warning {
              font-weight: 600;
              color: #FF8000;
            }

            @media (min-width: 576px) {
              flex-direction: row;
            }
          }
        }
      }
    }
  }

  .footer-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    left: 0;
    position: relative;
    height: 290px;
    padding: 27px 120px;
    background: #000;
    color: #fff;

    @media (max-width: 1620px){
      padding: 27px 120px;
    }
  }
  
`;

export const CommentContainer = styled.div`
  flex: 1;
`;

export const MoreDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  span {
    display: flex;
    align-items: center;
  }
`

export const MenuList = styled.div`
  position: absolute;
  right: 0px;
  top: 100%;
  background: #191B24;
  border-radius: 10px;
  padding: 5px 0px 15px 0px;
  min-width: 162px;
  margin-top: 15px;
  > div {
    padding: 5px 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    text-align: left;
    transition: all 0.3s linear;

    &:hover {
      background: #222430;
    }
  }
`

export const IconLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #C4C4C4;
    margin-left: 10px;
    padding-top: 2px;
    user-select: none;
  }

  
  &.owned-by {
    cursor: pointer;
    &:hover {
      span {
        color: ${props => props.theme.colors.primary};
      }
      svg {
        path {
          stroke: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`
export const SvgWrapper = styled.div`
  cursor: pointer;
  display: flex;
`
export const OutlineBox = styled.div`
  border: 1px solid #40475D;
  border-radius: 10px;
  color: #C4C4C4;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 25px;
`
