import { ContentWrapper } from "../styles/content"
import { useLightMode } from "../store/mode";

const ContentContainer = () => {
    const { lightMode } = useLightMode();

    return (
        <ContentWrapper lightMode={lightMode}></ContentWrapper>
    )

}

export default ContentContainer;