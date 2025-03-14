import { ContainerWrapper } from "../styles/container";
import { useLightMode } from "../store/mode";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SettingBtn from "./SettingBtn";
import ToggleBtn from "./ToggleBtn";
import Input from "./Input";
import { HeaderContainer } from "../styles/header";
import { BtnsContainer } from "../styles/Btns";
import { BoxWrapper } from "../styles/box";
import useSetting from "../hooks/useSetting";
import SettingOption from "./SettingOption";

const Container = () => {
    const { lightMode } = useLightMode();
    const { openSetting, handleSettingBtn } = useSetting();


    return (
        <ContainerWrapper lightMode={lightMode}>
            <HeaderContainer>
                <Title />
                <BtnsContainer>
                    <SettingBtn handleSettingBtn={handleSettingBtn} />
                    <ToggleBtn />
                </BtnsContainer>
                {openSetting && <SettingOption />}
            </HeaderContainer>
            <SubTitle />
            <Input />
            <BoxWrapper />
        </ContainerWrapper>
    )
}

export default Container;