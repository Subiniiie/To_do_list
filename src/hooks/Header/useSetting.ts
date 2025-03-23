import { useSettingStore } from "../../store/setting";

const useSetting = () => {
    const { setOpenSetting } = useSettingStore();

    const handleSettingBtn = () => {
        setOpenSetting();
    };

    return {
        handleSettingBtn
    }
}

export default useSetting;