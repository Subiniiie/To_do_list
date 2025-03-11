import { ContainerWrapper } from "../styles/container";
import { useLightMode } from "../store/mode";

const Container = () => {
    const { lightMode } = useLightMode();
    
    return (
        <ContainerWrapper lightMode={lightMode}>
        </ContainerWrapper>
    )
}

export default Container;