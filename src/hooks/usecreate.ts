import React from "react";
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
    };

    const prohibitClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    return {
        handleModal,
        clickBlackContaniner,
        prohibitClick
    }
}

export default useCreate;