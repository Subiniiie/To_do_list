import { SettingBtnWrapper } from "../styles/settingBtn";

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