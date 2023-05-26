import styled from 'styled-components'

export const IconDropDownContainer = styled.div`
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #C4C4C4;
  user-select: none;
`

export const IconDropDownSelect = styled.div`
  position: relative;
`

export const IconDropDownSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 12px;
  box-sizing: border-box;
  border-radius: 6px;
  width: 100%;
  background: #222430;

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
  border-radius: 6px;
  width: 100%;
  background-color: #222430;
  overflow: hidden;
  z-index: 999;

  > div {
    padding: 15px 12px;

    &:hover {
      background-color: #1C1D24;
    }
  }
`