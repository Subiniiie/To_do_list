import { SettingOptionWrapper } from "../../styles/Header/settingOption";
import { SettingOptionContainer } from "../../styles/Header/SettingOptionContainer";
import { SettingLineWrapper } from "../../styles/Header/settingLine";
import { SettingTitleWrapper } from "../../styles/Header/settingTitle";
import { SettingTitleContainer } from "../../styles/Header/settingTItleContainer";
import { IconImageWrapper } from "../../styles/Header/iconImage";
import plus_btn_black from "../../assets/icon/plus_btn_black.png";
import plus_btn_white from "../../assets/icon/plus_btn_white.png";
import checkmark_black from "../../assets/icon/checkmark_black.png";
import checkmark_white from "../../assets/icon/checkmark_white.png"
import { useLightMode } from "../../store/mode";
import useCreate from "../../hooks/Modal/usecreate";

const SettingOption = () => {
    const title = ["새로 만들기", "선택", "생성 순", "가장 최신 순"];
    const { lightMode } = useLightMode();
    const { handleModal } = useCreate();

    return (
        <SettingOptionWrapper lightMode = {lightMode}>
            {title.map((t, i) => 
                <SettingOptionContainer key={i}>
                    <SettingTitleContainer onClick={() => handleModal(i)}>
                        <SettingTitleWrapper lightMode = {lightMode}>
                            {t}
                        </SettingTitleWrapper>
                        { lightMode ? (
                            i == 0 ? <IconImageWrapper iconImage = {plus_btn_black} /> : (
                                i == 1 ? <IconImageWrapper iconImage = {checkmark_black} /> : null
                            )
                        ) : (
                            i == 0 ? <IconImageWrapper iconImage = {plus_btn_white} /> : (
                                i == 1 ? <IconImageWrapper iconImage = {checkmark_white} /> : null
                            )
                        )}
                    </SettingTitleContainer>
                    <SettingLineWrapper lightMode = {lightMode} />
                </SettingOptionContainer>
            )}
            <SettingTitleWrapper 
                lightMode = {lightMode} 
                onClick={() => handleModal(4)}
            >
                가장 오래된 순
            </SettingTitleWrapper>
        </SettingOptionWrapper>
    )
}

export default SettingOption;