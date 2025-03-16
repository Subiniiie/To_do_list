import { BlackContainer } from "../styles/blackContainer";
import ContentContainer from "./ContentContainer";
import useCreate from "../hooks/usecreate";

const BlackBackground = () => {
    const { clickBlackContaniner } = useCreate();

    return (
        <BlackContainer onClick={clickBlackContaniner}>
            <ContentContainer />
        </BlackContainer>
    )
}

export default BlackBackground;