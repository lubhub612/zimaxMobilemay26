import styled from 'styled-components'

export const FilterItemContainer = styled.div`
  width: 100%;

  .filter-item-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: capitalize;
    opacity: 1;
    color: ${props => props.theme.colors.textColor};
  }

  .filter-item-body {
    display: ${({ isFullWidth }) => isFullWidth ? 'block' : 'grid'};
    grid-template-columns: repeat(2,1fr);
  }  
`;