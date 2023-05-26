import styled from 'styled-components';

export const HeaderSearchBoxContainer = styled.div`
  position: relative;

  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: #38c948;
      transition: 0.3s;
      width: 20px;
      height: 20px;
    }
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;

export const Input = styled.input`
  height: 50px;
  font-size: 25px;
  width: 100%;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 30px;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e5e5e5;
  border-radius: 10px;
  width: 600px;
  height: 30px;
  background: rgba(241, 241, 241, 0.1);
  text-overflow: ellipsis;
  border: none;
  outline: none;

  &:focus {
    background: rgba(21, 23, 32, 0.5);
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #e5e5e5;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #e5e5e5;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #e5e5e5;
  }

  @media (max-width: 1500px) {
    width: 500px;
  }

  @media (max-width: 1440px) {
    width: 450px;
  }

  @media (max-width: 1300px) {
    width: 400px;
  }

  @media (max-width: 1150px) {
    width: 350px;
  }

  @media (max-width: 1050px) {
    width: 300px;
  }

  @media (max-width: 1025px) {
    width: 100%;
  }
`;
