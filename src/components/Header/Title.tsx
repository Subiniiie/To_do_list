import { TitleWrapper } from "../../styles/Header/title";
import { useLightMode } from "../../store/mode";

const Title = () => {
    const { lightMode } = useLightMode();

    return (
        <TitleWrapper lightMode={lightMode}>
            투두리스트
        </TitleWrapper>
    )
}

export default Title;