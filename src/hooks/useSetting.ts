import { useState, useEffect } from "react";

const useSetting = () => {
    const [ openSetting, setOpenSetting ] = useState<boolean>(false);

    const handleSettingBtn = () => {
        // console.log("check", openSetting)
        setOpenSetting((openSetting) => !openSetting);
    };

    useEffect(() => {
        console.log("changed", openSetting)
    }, [openSetting]);

    return {
        openSetting,
        handleSettingBtn
    }
}

export default useSetting;