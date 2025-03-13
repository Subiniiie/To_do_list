import { ToggleBtnWrapper } from "../styles/toggleBtn";
import { useLightMode } from "../store/mode";

const ToggleBtn = () => {
    const { setLightMode, lightMode } = useLightMode();

    const changeMode = () => {
        console.log('mode changed')
        setLightMode();
    }

    return (
        <ToggleBtnWrapper onClick={changeMode}>
            <div className={`toggle-container ${lightMode ? "toggle--checked" : null}`}>
                <div className={`toggle-circle ${lightMode ? "toggleBtn--checked" : null}`}></div>
            </div>    
        </ToggleBtnWrapper>
    )
}

export default ToggleBtn;