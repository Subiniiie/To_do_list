import { ContainerWrapper } from "../styles/container";
import { useLightMode } from "../store/mode";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SettingBtn from "./SettingBtn";
import ToggleBtn from "./ToggleBtn";
import Input from "./Input";
import { HeaderContainer } from "../styles/header";
import { BtnsContainer } from "../styles/Btns";

const Container = () => {
    const { lightMode } = useLightMode();
    
    return (
        <ContainerWrapper lightMode={lightMode}>
            <HeaderContainer>
                <Title />
                <BtnsContainer>
                    <SettingBtn />
                    <ToggleBtn />
                </BtnsContainer>
            </HeaderContainer>
            <SubTitle />
            <Input />
        </ContainerWrapper>
    )
}

export default Container;