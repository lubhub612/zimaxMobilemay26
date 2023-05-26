import styled from 'styled-components'

export const SideBarFilterSectionContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const FilterContent = styled.div`
  height: calc(100% - 134px);
  overflow-x: hidden;
  overflow-y: auto;

  .sort-div, .collection-div, .rarity-div {
    padding: 0 12px;
  }

  @media (min-width: 768px) {
    height: calc(100% - 95px);
  }
`;