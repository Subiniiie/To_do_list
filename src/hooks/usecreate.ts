import { useOpen } from "../store/content";
import useSetting from "./useSetting";

const useCreate = () => {
    const { setOpen } = useOpen();
    const { handleSettingBtn } = useSetting();

    const handleModal = ( index: number ) => {
        if (index == 0) {
            setOpen();
        };
    };

    const clickBlackContaniner = () => {
        handleModal(0);
        handleSettingBtn();
    }

    return {
        handleModal,
        clickBlackContaniner
    }
}

export default useCreate;