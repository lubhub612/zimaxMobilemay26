import styled from 'styled-components';

export const StyledInputField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  height: 100%;
  padding: 0 10px;
  background-color: transparent;
  border: none;
  color:white;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 0 10px;
  &:focus,
  &:active {
    outline: none;
  }
`;

export const AddImageButton = styled(Button)`
  border-radius: 0 5px 5px 0;
`;




export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  
  border-radius:5px;
  &:hover .overlay {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 768px) {
    /* Tablet */
    max-width: ${props => props.tabletMaxWidth || props.maxWidth || '100%'};
  }

  @media (min-width: 992px) {
    /* PC */
    max-width: ${props => props.pcMaxWidth || props.tabletMaxWidth || props.maxWidth || '100%'};
  }

  @media (min-width: 1200px) {
    /* Large screen */
    max-width: ${props => props.largeScreenMaxWidth || props.pcMaxWidth || props.tabletMaxWidth || props.maxWidth || '100%'};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ImageUrl = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Icon = styled.svg`
width: 50px;
  height: 50px;
  margin: 10px;
  fill: #fff;

`;



