import { ContainerWrapper } from "../styles/container";
import { useLightMode } from "../store/mode";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SettingBtn from "./SettingBtn";
import ToggleBtn from "./ToggleBtn";
import Input from "./Input";

const Container = () => {
    const { lightMode } = useLightMode();
    
    return (
        <ContainerWrapper lightMode={lightMode}>
            <Title />
            <SettingBtn />
            <ToggleBtn />
            <SubTitle />
            <Input />
        </ContainerWrapper>
    )
}

export default Container;