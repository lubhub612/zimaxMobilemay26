import styled from 'styled-components';

export const PopUpUserProfileItemContainer = styled.div`
  .user-image {
    display: flex;
    flex-direction: row;
  }
`;

export const LinkItem = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #38c948;
  }

  @media (min-width: 992px) {
    padding: 20px 8px;
  }

  @media (min-width: 1440px) {
    padding: 20px 16px;
  }

  @media (min-width: 1600px) {
    padding: 20px 26px;
  }

  @media (min-width: 1800px) {
    padding: 20px 32px;
  }
`;
