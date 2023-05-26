import styled from 'styled-components'

export const NFTDropDownContainer = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #C4C4C4;
  user-select: none;
  height: 40px;
`

export const IconDropDownSelect = styled.div`
  position: relative;
`

export const IconDropDownSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  background: rgba(0,0,0,0.25);

  > svg {
    
  }
`

export const ViewType = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #C4C4C4;
  }
`

export const IconDropDownList = styled.div`
  position: absolute;
  border-radius: 6px;
  width: 100%;
  background-color: #191B24;
  overflow: hidden;
  z-index: 999;

  > div {
    padding: 15px 12px;

    &:hover {
      background-color: #13141B;
    }
  }
`