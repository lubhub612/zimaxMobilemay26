import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Option = styled.div`
  padding: 5px;
  min-width: 70px;
  font-size: 13px;
  color: #c4c4c4;
  cursor: pointer;
  &:hover {
    background-color: ${darken(0.05, '#191B24')};
  }
  ${(props) =>
    props.selected &&
    css`
      color: #38c948;
    `}
  svg {
    vertical-align: text-top;
  }
  ${({ withIcons }) =>
    withIcons &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 3px;
        ${(props) =>
          props.theme?.rtl &&
          css`
            margin-left: 3px;
            margin-right: 0px;
          `}
      }
    `}
`;

export const Options = styled.div`
  position: absolute;
  min-width: 100%;
  background-color: #191b24;
  margin-top: 5px;
  z-index: 10000;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 5%);
  border-radius: 10px;
  overflow: hidden;
  ${({ position }) =>
    position?.toLowerCase() === 'left' &&
    css`
      left: 0;
      margin-left: -1px;
      ${(props) =>
        props.theme?.rtl &&
        css`
          margin-right: -1px;
          margin-left: 0px;
          right: 0;
          left: initial;
        `}
    `}
  ${({ position }) =>
    position?.toLowerCase() === 'right' &&
    css`
      right: 0;
      margin-right: -1px;
      ${(props) =>
        props.theme?.rtl &&
        css`
          margin-left: -1px;
          margin-right: 0px;
          left: 0;
          right: initial;
        `}
    `}
`;

export const Selected = styled.div`
  padding: 5px 20px;
  font-size: 13px;
  line-height: 17px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;
`;

export const Select = styled.div`
  display: inline-block;
  border-radius: 10px;
  background-color: #191b24;
  color: #c4c4c4;
  position: relative;

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
  ${(props) =>
    props.open &&
    css`
      background-color: ${darken(0.07, '#191B24')};
    `}
`;

export const Chevron = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  color: #38c948;
  ${(props) =>
    props.theme?.rtl &&
    css`
      margin-right: 5px;
      margin-left: 0;
    `}
`;

export const Header = styled.div`
  flex: 1;
  svg {
    font-size: 13px;
  }
`;

export const SelectImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 1000px;
  margin-left: 5px;
  overflow: hidden;
  ${(props) =>
    props.theme?.rtl &&
    css`
      margin-left: 5px;
      margin-right: 0;
    `}
  img {
    width: 100%;
    height: 100%;
  }
`;
