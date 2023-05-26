import * as React from "react";
import HiOutlinePencilAlt from '@meronex/icons/hi/HiOutlinePencilAlt';
import AiOutlineCheckCircle from '@meronex/icons/ai/AiOutlineCheckCircle';
import { useAiStylesContext } from "../../../contexts/AIStyleContext"
import { MainArea, Texttab, ParamArea } from '../styles';
import { Button, Dropdown, DropdownMenu, DropdownMenuItem, DropDownHeading, DropDownInput, DropDownStackRow, StackRow, Input, InputSubmissionButton, LeftMenu } from "./styles";
import LeftMenuDropDown from "./LeftMenu";
import ParamInputField from "./ParamInput";
// demo data
const demoParams = [
    { name: "Version", value: ["v1", "v2", "v3", "v4"], type: "select", tag: "--v" },
    { name: "Aspect Ratio", type: "input", tag: "--ar" },
    { name: "Chaos", type: "input", tag: "--chaos" },
    { name: "Image Weight", type: "input", tag: "--iw" },
    { name: "Seed", type: "input", tag: "--seed" },
    { name: "Stylize", type: "input", tag: "--s" },
    { name: "Upbeta", value: ["yes", "no"], type: "select", tag: "--upbeta" },
    { name: "Tile", value: ["yes", "no"], type: "select", tag: "--tile" },
    { name: "Anime Style", value: ["yes", "no"], type: "select", tag: "--niji" },
    { name: "Quality", type: "input", tag: "--q" },
    { name: "Light Upscale", type: "input", tag: "--uplight" },
    { name: "Stop Earlier At", type: "input", tag: "--stop" }
]

const ParamsTab = (props) => {
    // const [selectedParam, setSelectedParams] = React.useState(-1);
    const [inputTexts, setInputTexts] = React.useState([]);
    const [showMenu, setShowMenu] = React.useState(false);
    const [buttonPos, setButtonPos] = React.useState({ top: 0, left: 0 });
    const { selectedParams, setSelectedParams } = useAiStylesContext();
    const toggleRef = React.useRef(null);

    const handleToggleMenu = (e) => {
        setShowMenu(!showMenu);
        let position = toggleRef.current.getBoundingClientRect();
        setButtonPos({
            ...position,
            left: 100,
            top: 100,
        });

    }

    const handleParamSelection = (paramIndex, e) => {
        setSelectedParams(paramIndex)
        handleToggleMenu(e);
    }
    // handle param selection type select
    const handleDropDownSelect = (selectedParam) => {
        // check param match 
        const index = selectedParams.findIndex(param => param.name === selectedParam.name);
        // param does not exists
        if (index === -1) {
            setSelectedParams([...selectedParams, selectedParam])
        } else {
            // param exist and value is also same
            if (selectedParams[index].value === selectedParam.value) {
                selectedParams.splice(index, 1);
                setSelectedParams([...selectedParams]);
            } else {
                // param exists but value is different
                selectedParams[index].value = selectedParam.value;
                setSelectedParams([...selectedParams]);
            }
        }


    }

    const handleDropDownInput = (e, param) => {
        const index = inputTexts.findIndex(item => item.name === param.name);
        if (index !== -1) {
            inputTexts[index] = { ...inputTexts[index], value: e.target.value }
            setInputTexts([...inputTexts]);
        } else {
            setInputTexts([...inputTexts, { name: param.name, value: e.target.value }])
        }
    }
    // handle param selection type input
    const handleDropDownInputCheck = (selectedParam) => {
        const index = selectedParams.findIndex(param => param.name === selectedParam.name);
        if (index === -1) {
            setSelectedParams([...selectedParams, selectedParam])
        } else {
            selectedParams.splice(index, 1);
            setSelectedParams(selectedParams);
        }
        console.log("inputs:", selectedParam);
    }
    const handleLebel = (param) => {
        const selected = selectedParams.find(p => p.name === param.name);
        if (selected) {
            return selected.tag + " " + selected.value;
        } else {
            return ""
        }
    }
    return (
        <ParamArea >
            <ul>
                {demoParams.map((param, index) =>
                    <li key={param.name} >
                        <p className="sub-heading">
                            {param.name}{" "} {handleLebel(param)}
                        </p>
                        <div style={{ position: "relative", }}>
                            <LeftMenuDropDown ToggleIcon={HiOutlinePencilAlt} width="250px">
                                {
                                    param.type === "input"
                                        ?
                                        <>
                                            <h2 className="sub-heading">{param.name}</h2>
                                            <ParamInputField key={param.tag} param={param} handleCheck={handleDropDownInputCheck} />
                                        </>
                                        : <>{param.value.map(val =>
                                            <DropdownMenuItem className={selectedParams.map(p => p.name === param.name && p.value === val ? "active" : "")} onClick={() => handleDropDownSelect({ name: param.name, value: val, tag: param.tag })}>
                                                {val}
                                            </DropdownMenuItem>)}</>
                                }
                            </LeftMenuDropDown>

                        </div>
                    </li>
                )}

            </ul>
        </ParamArea>
    )

};


export default ParamsTab;

