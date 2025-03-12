import { ContainerWrapper } from "../styles/container";
import { useLightMode } from "../store/mode";
import Title from "./Title";
import SubTitle from "./SubTitle";

const Container = () => {
    const { lightMode } = useLightMode();
    
    return (
        <ContainerWrapper lightMode={lightMode}>
            <Title />
            <SubTitle />
        </ContainerWrapper>
    )
}

export default Container;