import React, { useState } from "react";
import { useOpen } from "../store/content";
import useSetting from "./useSetting";

const useCreate = () => {
    const { setOpen } = useOpen();
    const { handleSettingBtn } = useSetting();
    const [ value, setValue ] = useState<string>('');

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

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = () => {
        setValue('');
        setOpen();
    };



    return {
        value,
        handleModal,
        clickBlackContaniner,
        prohibitClick,
        onChange,
        handleSubmit
    }
}

export default useCreate;