import * as React from "react";
import { StackRow, Input, InputSubmissionButton } from "./styles";
import AiOutlineCheckCircle from '@meronex/icons/ai/AiOutlineCheckCircle';
import { useAiStylesContext } from "./../../../contexts/AIStyleContext";
const ParamInputField = (props) => {
    const [text, setText] = React.useState("");
    const { selectedParams } = useAiStylesContext();

    React.useEffect(() => {
        const selected = selectedParams.find(p => p.name === props.param.name);
        console.log("selected", selected);
        if (selected) {
            setText(selected.value);
        }
    }, [selectedParams])

    const handelChange = (e) => {
        setText(e.target.value);
    }
    const handleDropDownInputCheck = (param) => {
        props.handleCheck(param);
    }
    return <StackRow className="actions-input" onClick={(e) => e.stopPropagation()}>
        <Input value={text} onChange={(e) => handelChange(e)} />
        <InputSubmissionButton>
            <AiOutlineCheckCircle className="list-action" onClick={() => handleDropDownInputCheck({ name: props.param.name, tag: props.param.tag, value: text })} />
        </InputSubmissionButton>
    </StackRow>
}

export default ParamInputField;