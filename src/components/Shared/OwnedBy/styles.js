import styled from "styled-components";

export const OwnedByContainer = styled.div``

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px;
  
  &:hover {
    background: #14161f;
  }

  span {
    color: ${props => props.theme.colors.textColor};
    span {
      font-weight: 600;
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
  }

  > div {
    p {
      margin: 0px;
      font-weight: 600;
      font-size: 15px;
      &:first-child {
        color: ${props => props.theme.colors.primary};
      }
      &:last-child {
        color: ${props => props.theme.colors.textColor};
      }
    }
  }
`