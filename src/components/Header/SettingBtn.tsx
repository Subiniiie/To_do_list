import { SettingBtnWrapper } from "../../styles/Header/settingBtn";

type SettingBtnProps = {
    handleSettingBtn : () => void;
};

const SettingBtn = ({ handleSettingBtn }: SettingBtnProps) => {
    return (
        <SettingBtnWrapper onClick={handleSettingBtn}>
            ...
        </SettingBtnWrapper>
    )
}

export default SettingBtn;