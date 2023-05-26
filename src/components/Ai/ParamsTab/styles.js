import styled from "styled-components";
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  

`;

export const Button = styled.button`
  background:transparent;
  color: white;
  border: none;
  padding: 0px 10px;
  font-size: 12px;
  cursor: pointer;
  height:50px;
  width:50px;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 0;
  left: -90px;
  margin-top: -5px;
  padding: 0;
  background-color: #222431;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropdownMenuItem = styled.li`
  display: block;
  padding: 8px 16px;
  color: black;
  textColor:black;
  cursor: pointer;
  font-weight:800;
  &:hover {
    background-color: #A3FF11;
    color:black;
  }
`;

export const DropDownHeading = styled.p`
display: block;
padding: 8px 16px;
color: black;
textColor:black;
cursor: pointer;
font-weight:800;
background-color: #A3FF11;
`
export const DropDownInput = styled.input`
  height: 50px;
  font-size: 25px;
  width: 100px;
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
//   text-align: center;
  color: #E5E5E5;
  border-radius: 10px;
  height: 30px;
  background: rgba(241, 241, 241, 0.1);
  text-overflow: ellipsis;
  border: none;
  outline: none;

  &:focus {
    background: rgba(21, 23, 32, 0.5);
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #E5E5E5;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #E5E5E5;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #E5E5E5;
  }

  @media (max-width: 1500px) {
    width: 100px;
  }

  @media (max-width: 1440px) {
    width: 100px;
  }

  @media (max-width: 1300px) {
    width: 100px;
  }

  @media (max-width: 1150px) {
    width: 100px;
  }

  @media (max-width: 1050px) {
    width: 100px;
  }

  @media (max-width: 1025px) {
    width: 100px;
  }
`;

// component
export const StackRow = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
width:100%;
gap:5px;
`
export const Input = styled.input`
  height: 30px;
  font-size: 25px;
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
//   text-align: center;
  color: #E5E5E5;
  border-radius: 5px;
  background: rgba(241, 241, 241, 0.1);
  text-overflow: ellipsis;
  border: none;
  outline: none;
  &:focus {
    background: rgba(21, 23, 32, 0.5);
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #E5E5E5;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #E5E5E5;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #E5E5E5;
  }

  @media (max-width: 1500px) {
    width: 100px;
  }

  @media (max-width: 1440px) {
    width: 100px;
  }

  @media (max-width: 1300px) {
    width: 100px;
  }

  @media (max-width: 1150px) {
    width: 100px;
  }

  @media (max-width: 1050px) {
    width: 100px;
  }

  @media (max-width: 1025px) {
    width: 100px;
  }
`;
export const InputSubmissionButton = styled.button`
  background:transparent;
  color: white;
  border: none;
  padding: 0px 10px;
  font-size: 12px;
  cursor: pointer;
  height:50px;
  width:50px;
`;

// left menu 
export const LeftMenu = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  border-radius:5px;
  padding:10px;
  background-color: #222431;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  .actions-group {
    display:flex;
    flex-direction:column;
    justifyContent:center;
    alignItems:center;
    gap:5px;
    margin-top:10px;
  }
  .actions {
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
  }
  .actions button {
    background: #fff;
    border: none;
    color: #000;
    padding: 10px 25px;
    text-align:center;
    font-size: 14px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    gap: 5px;
    width:140px;
    height:30px;
    align-items: center;
  }
 .actions .red-color {
    background: #db0d36;
    color: #fff;
  }
 .actions-input  {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:5px;
    padding: 0 5px 0 5px;
 }
 .active {
  background-color:#A3FF11;
  color:black;
 }
  }
`;