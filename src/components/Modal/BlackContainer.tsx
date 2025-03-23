import { BlackContainer } from "../../styles/Modal/blackContainer";
import ContentContainer from "./ContentContainer";
import useCreate from "../../hooks/Modal/usecreate";

const BlackBackground = () => {
    const { clickBlackContaniner } = useCreate();

    return (
        <BlackContainer onClick={clickBlackContaniner}>
            <ContentContainer />
        </BlackContainer>
    )
}

export default BlackBackground;