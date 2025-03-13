import { SettingBtnWrapper } from "../styles/settingBtn";
import useSetting from "../hooks/useSetting";

const SettingBtn = () => {
    const { handleSettingBtn } = useSetting();
    return (
        <SettingBtnWrapper onClick={handleSettingBtn}>
            ...
        </SettingBtnWrapper>
    )
}

export default SettingBtn;