import { useState, useEffect } from "react";

const useSetting = () => {
    const [ openSetting, setOpenSetting ] = useState<boolean>(false);

    const handleSettingBtn = () => {
        setOpenSetting((openSetting) => !openSetting);
    };

    useEffect(() => {
        console.log('옵션 창 열자', openSetting)
    }, [openSetting]);

    return {
        openSetting,
        handleSettingBtn
    }
}

export default useSetting;