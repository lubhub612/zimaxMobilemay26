import styled, { css } from 'styled-components'

export const NavigationBarContainer = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 70px;
  width: 100vw;
  background: #101118;
  box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const NavigationBarContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 13px 10px;
  overflow: auto;
`

export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #669010;
  cursor: pointer;
  padding: 0px 10px;

  > svg {
    font-size: 24px;
    height: 24px;
    path {
      fill: #447010;
    }
  }
  span {
    margin-top: 3.5px;
    font-size: 14px;
    line-height: 16px;
  }

  ${({ active }) => active && css`
    color: #AAFF26;
    > svg {
      path {
        fill: #AAFF26;
      }
    }
  `}
`

export const FilterContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  min-height: 100vh;
  background: #222430;

  .filter-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 30px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
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
`
