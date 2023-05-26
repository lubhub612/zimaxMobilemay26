import styled, { css } from 'styled-components'

export const CollectionsContainer = styled.div`
  padding-top: 40px;
  height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: auto;
`

export const Header = styled.div`
  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 46px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 0px;
    margin-bottom: 28px;
  }
`

export const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #30363D;
`

export const MenuItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  padding: 10px 18px;
  cursor: pointer;
  position: relative;

  ${({ active }) => active && css`
    &::after {
      content: "";
      background-color: #A3FF12;
      height: 1px;
      width: 100%;
      position: absolute;
      top: 100%;
      left: 0;
    }
  `}
`

export const CollectionListWrapper = styled.div`
  display: flex;
  padding: 30px 20px;
  flex-wrap: wrap;
`

export const CreateButtonWrapper = styled.div`
  margin-top: 30px;
`

export const LoadingScreen = styled.div`    position: fixed;
width: 100%;
height: 100%;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;`
