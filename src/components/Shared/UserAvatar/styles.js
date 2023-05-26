import styled from 'styled-components';

export const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ mr }) => (mr ? mr : '0')};

  > svg {
    width: ${({ size }) => (size ? size : '30px')};
    height: ${({ size }) => (size ? size : '30px')};
    color: ${({ color }) => (color ? color : '#38c948')};
    fill: ${({ color }) => (color ? color : '#38c948')};
  }
`;
