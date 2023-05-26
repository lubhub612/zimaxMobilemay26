import styled from 'styled-components';
import SuCrossCircle from '@meronex/icons/su/SuCrossCircle';
import AiOutlineDelete from '@meronex/icons/ai/AiOutlineDelete';
export const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  color: #000;
//   padding: 8px;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const CrossIcon = styled(SuCrossCircle)`

  &:hover {
    color:pink
  }
`;


export const StyleImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyleImage = styled.img`
  display: block;
  width: 100%;
`;

export const ActionIcon = styled.span`

  font-size: 20px;
  color: #fff;
  
  cursor: pointer;
`;

export const ActionOverlay = styled.div`
  position: absolute;
  top: 4px;
  left: 0%;
  display:flex;
  justify-content: flex-start;
  align-items:flex-start;
  gap:5px;
  padding:4px;
  // transform: translateX(-50%);
  // background-color: #fff;
  // border: 1px solid #ccc;
  // border-radius: 4px;
  // padding: 5px 10px;
  // cursor: pointer;
`;

export const ActionButton = styled.button`
height:25px;
width:auto
padding:5px;
background-color:black;
border:1px solid white;
border-radius:4px;
color:white;
cursor:pointer;
position:relative;

`
export const DeleteIcon = styled(AiOutlineDelete)`
height:20px;
width:20px;
color:white;

`
export const StyleTitle = styled.div`
height:30px;
font-size: 16px;
font-weight: 400;
padding:4px;
background-color:${({ background }) => background};
&:first-child {
  text-color: ${({ color }) => color}
}
`
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
  }
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
//   border-bottom: 2px solid #333;
  background-color: transparent;

  &:focus,&:active {
    outline:none
  }
`;
export const ActionInputs = styled.div`
border:1px solid #fff;
background:none;
border-radius:10px;
`
export const MenuStackRow = styled.div`
display:flex;
justify-content:center;
width:100%;
align-items:center;
gap:5px;
`

export const MenuInput = styled.input`

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