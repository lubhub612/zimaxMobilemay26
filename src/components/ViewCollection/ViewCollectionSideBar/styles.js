import styled from 'styled-components'

export const SideBarContainer = styled.div`
  z-index: 999;  
  display: grid;
  overflow:visible !important;
  height: 100%;
  background: #222430;
  backdrop-filter: blur(40px);
  border-radius: 15px;

  @media (max-width: 800px) {
    display: block;
  }

  .total-result {
    font-weight: 500;
    color: #efefef;
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export const SideBarDiv = styled.div`
  z-index: 999;  
  overflow: hidden;
  width: 340px;
  height: 100%;

  .filter-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 26px;
    border-bottom: 1px solid #000;
    cursor: pointer;

    .filter-modal-header-user {
      display: flex;
      align-items: center;

      >svg {
        width: 20px;
        height: 20px;
        color: #AAFF26;
      }

      .filter-modal-header-text {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        padding-top: 4px;
        margin-left: 12px;
      }
    }
  } 

  .grid-sharp {
    margin: 0;

    >div {
      margin-left: auto;
      margin-right: auto;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const SideToggleBar = styled.div`
  padding: 35px 0;

  .active {
    background: #191B24;
  }

  .all-sharp {
    display: flex;
    cursor: pointer;
    padding: 20px;
    
    svg {
      width: 24px;
      height: 24px;
      margin-right: auto;
      margin-left: auto;
      color: #AAFF26;

      &:hover {
        path {
          fill: #FFFFFF;
        }
      }
    }

    &:hover {
      background: #191B24;
    }
  }

  .grid-sharp {
    display: flex;
    cursor: pointer;
    padding: 20px;

    &:hover {
      background: #191B24;
    }

    >div {
      margin-left: auto;
      margin-right: auto;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-left: auto;
      margin-right: auto;
      
      path {
        fill: #AAFF26;
      }
      &:hover {
        path {
          fill: #FFFFFF;
        }
      }
    }
  }

  .filter-sharp, .upload-sharp, .chart-sharp, .setting-sharp, .hide-sharp, .favorite-sharp, .offer-sharp {
    display: flex;
    cursor: pointer;
    padding: 20px;

    &:hover {
      background: #191B24;
    }

    >div{
      margin-right: auto;
      margin-left: auto;
    }
    
    svg {
      width: 24px;
      height: 24px;
      color: #AAFF26;

      &:hover {
        path {
          fill: #FFFFFF;
        }
      }
    }
  }
`;