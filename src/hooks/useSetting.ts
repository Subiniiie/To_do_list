import { useState, useEffect } from "react";

const useSetting = () => {
    const [ openSetting, setOpenSetting ] = useState<boolean>(false);

    const handleSettingBtn = () => {
        setOpenSetting((openSetting) => !openSetting);
    };

    useEffect(() => {
    }, [openSetting]);

    return {
        openSetting,
        handleSettingBtn
    }
}

export default useSetting;