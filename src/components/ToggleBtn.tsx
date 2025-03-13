import { ToggleBtnWrapper } from "../styles/toggleBtn";
import { useLightMode } from "../store/mode";
import useToggle from "../hooks/useToggle";

const ToggleBtn = () => {
    const { lightMode } = useLightMode();
    const { changeMode } = useToggle();

    return (
        <ToggleBtnWrapper onClick={changeMode}>
            <div className={`toggle-container ${lightMode ? "toggle--checked" : null}`}>
                <div className={`toggle-circle ${lightMode ? "toggleBtn--checked" : null}`}></div>
            </div>    
        </ToggleBtnWrapper>
    )
}

export default ToggleBtn;