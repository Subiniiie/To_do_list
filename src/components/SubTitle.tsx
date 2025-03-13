import { SubTitleWrapper } from "../styles/subTitle";
import { useLightMode } from "../store/mode";

const SubTitle = () => {
    const { lightMode } = useLightMode();

    return (
        <SubTitleWrapper lightMode={lightMode}>
            할 일을 간단하게 기록하세요.
        </SubTitleWrapper>
    )
}

export default SubTitle;