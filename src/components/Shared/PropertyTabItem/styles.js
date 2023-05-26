import styled from 'styled-components';

export const PropertyTabItemContainer = styled.div`
  padding: 10px;
  width: 100%;

  @media (min-width: 576px) {
    width: auto;
  }
`;

export const PropertyItem = styled.div`
  min-width: 25%;
  background: linear-gradient(
    to top,
    rgba(34, 36, 48, 0.5),
    rgba(170, 255, 38, 0.2)
  );
  border: 1px solid #38c948;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  .property-name {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
  }

  .property-type {
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    color: #38c948;
  }

  .property-desc {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #c4c4c4;
  }
`;
