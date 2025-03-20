import React, { ChangeEvent, useState, useEffect } from "react";
import { useOpen } from "../store/content";
import useSetting from "./useSetting";
import { useList } from "../store/list";
import useItem from "./useItem";

const useCreate = () => {
    const { setOpen } = useOpen();
    const { handleSettingBtn } = useSetting();
    const { setTodos } = useList();
    const { handleChoice } = useItem();
    const [ value, setValue ] = useState<string>('');
    const [ checkedAllDay, setCheckedAllDay ] = useState<boolean>(false);
    const [ startDate, setStartDate ] = useState<Date | null>(new Date());
    const [ endDate, setEndDate ] = useState<Date | null>(new Date());

    const handleModal = ( index: number ) => {
        if (index == 0) {
            setOpen();
        } else if (index == 1) {
            handleChoice();
        }
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
    };

    const handleSubmit = () => {
        setTodos(value, startDate, endDate);
        setValue('');
        setOpen();
    };

    const checkboxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedAllDay((checkedAllDay) => !checkedAllDay);
    };


    useEffect(() => {
        if (checkedAllDay) {
            setEndDate(startDate);
        }
    }, [checkedAllDay, startDate]);

    useEffect(() => {
    }, [endDate]);

    return {
        value,
        checkedAllDay,
        startDate,
        endDate,
        handleModal,
        clickBlackContaniner,
        prohibitClick,
        onChange,
        handleSubmit,
        checkboxOnChange,
        setStartDate,
        setEndDate,
    }
}

export default useCreate;