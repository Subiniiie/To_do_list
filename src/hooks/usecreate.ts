import React, { ChangeEvent, useState, useEffect } from "react";
import { useOpen } from "../store/content";
import useSetting from "./useSetting";

const useCreate = () => {
    const { setOpen } = useOpen();
    const { handleSettingBtn } = useSetting();
    const [ value, setValue ] = useState<string>('');
    const [ checkedAllDay, setCheckedAllDay ] = useState<boolean>(false);

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

    const checkboxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedAllDay((checkedAllDay) => !checkedAllDay);
    };

    useEffect(() => {
        console.log('체크 상황', checkedAllDay)
    }, [checkedAllDay])



    return {
        value,
        checkedAllDay,
        handleModal,
        clickBlackContaniner,
        prohibitClick,
        onChange,
        handleSubmit,
        checkboxOnChange
    }
}

export default useCreate;