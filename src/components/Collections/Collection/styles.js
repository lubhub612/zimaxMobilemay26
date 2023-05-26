import styled, { css } from 'styled-components';

export const CollectionContainer = styled.div`
  background: #0d1117;
  border: 1px solid #30363d;
  box-sizing: border-box;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  margin: 10px;
  overflow: hidden;
  width: calc(100% - 20px);
  cursor: pointer;

  @media (min-width: 576px) {
    width: calc(50% - 20px);
  }

  @media (min-width: 993px) {
    width: calc(33.33% - 20px);
  }
`;

export const HeaderImageStyled = styled.div`
  position: relative;
  height: 165px;

  ${({ bgimage }) =>
    bgimage &&
    css`
      background-repeat: no-repeat, repeat;
      background-size: cover;
      object-fit: cover;
      background-position: center;
    `}
`;

export const HeaderImage = (props) => {
  const style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`;
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`;
  }

  return (
    <HeaderImageStyled {...props} style={style}>
      {props.children}
    </HeaderImageStyled>
  );
};

export const CollectionLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -50px;
  position: relative;

  > img {
    width: 100px;
    height: 100px;
    min-width: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const DetailWrapper = styled.div`
  padding: 0px 16px 16px 16px;
  > h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 51px;
    text-align: center;
    color: #ffffff;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .link {
    text-align: center;
    > span {
      font-weight: 600;
      font-size: 13px;
      line-height: 17px;
      text-decoration-line: underline;
      color: #38c948;
      text-align: center;
    }
  }
`;

export const DetailInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  svg {
    font-size: 15px;
    margin-right: 5px;
  }

  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    color: #c4c4c4;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  margin: 16px 0px;
  overflow-wrap: anywhere;
  text-align: center;
`;
