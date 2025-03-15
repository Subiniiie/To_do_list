import { BlackContainer } from "../styles/blackContainer";
import { ContentWrapper } from "../styles/content";
import useCreate from "../hooks/usecreate";

const BlackBackground = () => {
    const { clickBlackContaniner } = useCreate();

    return (
        <BlackContainer onClick={clickBlackContaniner}>
            <ContentWrapper />
        </BlackContainer>
    )
}

export default BlackBackground;