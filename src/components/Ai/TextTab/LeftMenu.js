import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import BiEdit from '@meronex/icons/bi/BiEdit';
import AiOutlineCheckCircle from '@meronex/icons/ai/AiOutlineCheckCircle';

const LeftMenu = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  background-color: #222431;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  .actions-group {
    display:flex;
    flex-direction:column;
    justifyContent:center;
    alignItems:center;
    gap:10px;
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

const ActionInput = styled.div`
border:1px solid #fff;
background:none;
border-radius:10px;
`

const CloseMenuButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  border: none;
  background-color: #fff;
  color: #333;
  cursor: pointer;
`;

const SubMenu = styled.div`
  padding-left: 20px;
  
`;

const SubButton = styled(Button)`
  font-weight: normal;
`;

const Input = styled.input`
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
const EditButton = styled(BiEdit)`
height:20px;
width:20px;
color:white;

`
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:15px
`;
const LeftMenuButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [showIncludedOptions, setShowIncludedOptions] = useState(false);
  const [buttonPos, setButtonPos] = useState({ top: 0, left: 0 });
  const [weight, setWeight] = useState("");
  const [activeButton, setActiveButton] = useState('included');
  const [activePrompt, setActivePrompt] = useState("single-prompt");
  const buttonRef = useRef(null);

  // set weight value if exists
  useEffect(() => {
    setWeight(props.fields[props.fieldId]?.weight);
  }, [props.fields[props.fieldId]])

  const handleButtonClick = (e) => {
    setIsOpen(!isOpen);
    setDisplay(prevState => !prevState);
    let position = buttonRef.current.getBoundingClientRect();
    setButtonPos({
      ...position,
      left: position.left - 300,
      // top: position.top + 
    });

  }

  const handleIncludedClick = () => {
    setShowIncludedOptions(true);
    console.log("id", props.fields.find(field => field.id === props.fieldIs), props.fieldId);
    const fields = [...props.fields];
    fields[props.fieldId] = { ...props.fields[props.fieldId], action: "included" };
    props.setFields(fields);

  }

  const handleExcludedClick = () => {
    setShowIncludedOptions(false);

    const fields = [...props.fields];
    fields[props.fieldId] = { ...props.fields[props.fieldId], action: "excluded" };
    props.setFields(fields);
  }

  const handleCloseMenu = () => {
    setIsOpen(false);
    setDisplay(false);
  }

  const handleSinglePrompt = () => {
    const fields = [...props.fields];
    fields[props.fieldId] = { ...props.fields[props.fieldId], prompt: "single-prompt" };
    props.setFields(fields);
  }

  const handleMultiPrompt = () => {
    const fields = [...props.fields];
    fields[props.fieldId] = { ...props.fields[props.fieldId], prompt: "multi-prompt" };
    props.setFields(fields);
  }

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  }

  const handleWeightSubmission = () => {
    console.log("wi", weight);
    const fields = [...props.fields];
    fields[props.fieldId] = { ...props.fields[props.fieldId], weight: weight };
    props.setFields(fields);
  }

  return (
    <>

      <IconButton ref={buttonRef} onClick={handleButtonClick}>
        <EditButton />
      </IconButton>
      {
        display && <LeftMenu display={display} top={buttonPos.top} left={buttonPos.left}>
          <div className='actions-group'>
            <div className="actions">
              <button className={props.fields[props.fieldId]?.action === 'included' ? 'red-color' : ''} onClick={handleIncludedClick}>Included</button>
              <button className={props.fields[props.fieldId]?.action === 'excluded' ? 'red-color' : ''} onClick={handleExcludedClick}>Excluded</button>
            </div>
            {showIncludedOptions && (
              <>
                <div className="actions">
                  <button className={props.fields[props.fieldId]?.prompt === 'single-prompt' ? 'red-color' : ''} onClick={handleSinglePrompt}>Single-prompt</button>
                  <button className={props.fields[props.fieldId]?.prompt === 'multi-prompt' ? 'red-color' : ''} onClick={handleMultiPrompt}>Multi-prompt</button>
                </div>
                <ActionInput className="actions-input">
                  <Input placeholder="weight:" value={weight} onChange={(e) => handleWeightChange(e)} />
                  <AiOutlineCheckCircle className="list-action" onClick={() => handleWeightSubmission()} />
                </ActionInput>
              </>
            )}
          </div>
        </LeftMenu>
      }

    </>
  );
}

export default LeftMenuButton;
