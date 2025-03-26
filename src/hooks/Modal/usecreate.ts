import React, { ChangeEvent, useState, useEffect, useCallback } from "react";
import { useOpen } from "../../store/content";
import useSetting from "../Header/useSetting";
import { useList } from "../../store/list";
import useItem from "../Main/useItem";
import { useSettingStore } from "../../store/setting";
import useNotification from "../Common/useNotification";

const useCreate = () => {
    const { setOpen } = useOpen();
    const { handleSettingBtn } = useSetting();
    const { setTodos } = useList();
    const { handleChoice, handleSort } = useItem();
    const { setOpenSetting } = useSettingStore();
    const [ value, setValue ] = useState<string>('');
    const [ checkedAllDay, setCheckedAllDay ] = useState<boolean>(false);
    const [ startDate, setStartDate ] = useState<Date | null>(new Date());
    const [ endDate, setEndDate ] = useState<Date | null>(new Date());

    const triggerNotif = useNotification("게시물 생성 완료", {
        body: "게시물 생성이 완료되었습니다."
    });

    const handleModal = useCallback(( index: number ) => {
        if (index == 0) {
            setOpen();
            setOpenSetting();
        } else if (index == 1) {
            handleChoice();
            setOpenSetting();
        } else if (index == 2) {
            handleSort("createAsc");
        } else if (index == 3) {
            handleSort("startDateAsc");
        } else {
            handleSort("startDateDesc");
        }
    }, [setOpen, setOpenSetting, handleChoice, handleSort]);

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
        triggerNotif();
    };

    const checkboxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedAllDay((checkedAllDay) => !checkedAllDay);
    };

    const ClickCancel = () => {
        setOpen();
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
        ClickCancel,
    }
}

export default useCreate;