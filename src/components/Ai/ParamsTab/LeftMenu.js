import * as React from "react";
import { LeftMenu, Button } from "./styles";

const LeftMenuDropDown = ({ width, ToggleIcon, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [buttonPos, setButtonPos] = React.useState({ left: 0, top: 0 });
    const toggleRef = React.useRef(null);

    const handleToggleMenu = (e) => {
        setIsOpen(!isOpen);
        let position = toggleRef.current.getBoundingClientRect();
        setButtonPos({
            ...position,
            left: -300,
            top: -10,
        });

    }

    return <>
        <Button ref={toggleRef} onClick={(e) => handleToggleMenu(e)} type="button" className="btn btn-primary btn-lg" >
            <ToggleIcon className="bi bi-box-arrow-up-right list-action" />
        </Button>
        {
            isOpen && <LeftMenu width={width} top={buttonPos.top} left={buttonPos.left} >
                {children}
            </LeftMenu>
        }
    </>
}

export default LeftMenuDropDown;