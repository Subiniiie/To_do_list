import { useLightMode } from "../store/mode";

const useToggle = () => {
    const { setLightMode } = useLightMode();

    const changeMode = () => {
        setLightMode();
    }
    return {
        changeMode
    }
}

export default useToggle;