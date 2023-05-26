import * as React from "react";
import { MainArea, Texttab, ParamArea } from '../styles';
import FormBuilder from "./FormBuilder";

const TextTab = ({ text, handleInputChange }) => {
    return (<Texttab>
        <FormBuilder />
    </Texttab>)
}

export default TextTab;