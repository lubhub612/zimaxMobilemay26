import * as React from 'react';
import { StyleImageContainer, StyleImage, ActionOverlay, StyleTitle, ActionButton, LeftMenu, Input, ActionInputs, MenuStackRow, InputSubmissionButton, MenuInput, DeleteIcon } from "./styles";
import { useAiStylesContext } from "../../../contexts/AIStyleContext"
import AiOutlineCheckCircle from '@meronex/icons/ai/AiOutlineCheckCircle';
const StyleImageHolder = (props) => {
    const { selectedStyles } = useAiStylesContext();
    const [showOverlay, setShowOverlay] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [buttonPos, setButtonPos] = React.useState({ top: 0, left: 0 });
    const [weight, setWeight] = React.useState("");
    const toggleRef = React.useRef(null);


    // show overlay if image is selected
    React.useEffect(() => {
        // for selected tab
        if (props.origin === "selected" && props.style.selected) {
            setShowOverlay(true)
            setWeight(props.style.weight)
        }

        // selection tab 
        if (props.origin === "selection") {
            const alreadySelected = props.selectedStyles.findIndex(style => style.style_name === props.style.style_name);
            if (alreadySelected !== -1) {
                setShowOverlay(true)
                setWeight(props.selectedStyles[alreadySelected].weight);
            }

        }

    }, [props.style, props.origin, props.selectedStyles]);

    // handle pre selected images on selection tab
    React.useEffect(() => {
        if (props.origin === "selection") {
            const alreadySelected = props.selectedStyles.findIndex(style => style.style_name === props.style.style_name);
            if (alreadySelected !== -1) {
                setShowOverlay(true)
                setWeight(props.selectedStyles[alreadySelected].weight);
            } else {
                setShowOverlay(false);
            }
        }
    }, [selectedStyles, props.origin])


    const handleStyleImageClick = () => {
        // if (props.origin === "selected" && props.style.selected) {
        //     setShowOverlay(true)
        // } else {

        setShowOverlay(!showOverlay);
        // }
    }
    const handleButtonClick = (e) => {
        setIsOpen(!isOpen);
        let position = toggleRef.current.getBoundingClientRect();
        setButtonPos({
            ...position,
            left: 10,
            top: 30,
        });

    }
    const handleWeightAction = (e) => {
        e.stopPropagation();
        handleButtonClick(e);
    }
    const handleWeightChange = (e) => {
        e.stopPropagation();
        console.log("weight", e.target.value);
        setWeight(e.target.value);

    }
    const handleWeightSubmission = (e, style) => {
        e.stopPropagation();
        props.handleImageTextWeightSubmission({ value: weight, styleId: style._id });
        setIsOpen(false);
    }

    return <StyleImageContainer onClick={() => handleStyleImageClick()}>
        <StyleImage
            src={`/images/ai_styles_images/${props.style.path}`}
            alt={props.style.style_name}
            onClick={() => props.handleStyleSelect({ ...props.style, weight: weight, selected: true })}
        />
        {showOverlay && (
            <ActionOverlay>
                <ActionButton ref={toggleRef} onClick={(e) => handleWeightAction(e)}>
                    {weight ? `::${weight}` : "weight"}
                    {
                        isOpen &&
                        <LeftMenu width="250px" top={buttonPos.top} left={buttonPos.left} >
                            <h2>Filter Weight:</h2>
                            <MenuStackRow className="actions-input" onClick={(e) => e.stopPropagation()}>
                                <MenuInput placeholder="weight:" value={weight} onChange={(e) => handleWeightChange(e)} />
                                <InputSubmissionButton>
                                    <AiOutlineCheckCircle className="list-action" onClick={(e) => handleWeightSubmission(e, props.style)} />
                                </InputSubmissionButton>
                            </MenuStackRow>

                        </LeftMenu>
                    }
                </ActionButton>
                {
                    props.deleteAction &&
                    <ActionButton
                        onClick={() => props.handleStyleSelect({ ...props.style, weight: "" })}
                    >
                        <DeleteIcon />
                    </ActionButton>
                }

            </ActionOverlay>
        )}
        <StyleTitle background={showOverlay ? '#A3FF11' : ' '} color={showOverlay ? "black" : "#fff"}  >
            <h2 style={{ color: showOverlay ? "black" : "" }}>
                {props.style.style_name}
            </h2>
        </StyleTitle>
    </StyleImageContainer >
}

export default StyleImageHolder;