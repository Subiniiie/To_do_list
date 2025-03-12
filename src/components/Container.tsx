import { ContainerWrapper } from "../styles/container";
import { useLightMode } from "../store/mode";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SettingBtn from "./SettingBtn";
import ToggleBtn from "./ToggleBtn";

const Container = () => {
    const { lightMode } = useLightMode();
    
    return (
        <ContainerWrapper lightMode={lightMode}>
            <Title />
            <SettingBtn />
            <ToggleBtn />
            <SubTitle />
        </ContainerWrapper>
    )
}

export default Container;