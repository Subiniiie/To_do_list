import React, { ChangeEvent, useState, useEffect } from "react";
import { useOpen } from "../store/content";
import useSetting from "./useSetting";

const useCreate = () => {
    const { setOpen } = useOpen();
    const { handleSettingBtn } = useSetting();
    const [ value, setValue ] = useState<string>('');
    const [ checkedAllDay, setCheckedAllDay ] = useState<boolean>(false);
    const [ startDate, setStartDate ] = useState<Date | null>(new Date());
    const [ endDate, setEndDate ] = useState<Date | null>(new Date());

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
        if (checkedAllDay) {
            setEndDate(startDate);
            console.log('끝나랒', endDate)
        }
    }, [checkedAllDay, startDate]);

    useEffect(() => {
        console.log('끝 날짜', endDate)
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
        setEndDate
    }
}

export default useCreate;