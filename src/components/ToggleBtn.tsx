import { ToggleBtnWrapper } from "../styles/toggleBtn";
import { useLightMode } from "../store/mode";

const ToggleBtn = () => {
    const { setLightMode, lightMode } = useLightMode();

    return (
        <ToggleBtnWrapper onClick={() => setLightMode}>
            <div className={`toggle-container ${lightMode ? "toggle--checked" : null}`}></div>
            <div className={`toggle-circle ${lightMode ? "toggle--checked" : null}`}></div>
        </ToggleBtnWrapper>
    )
}

export default ToggleBtn;