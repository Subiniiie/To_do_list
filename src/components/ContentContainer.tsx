import { ContentWrapper } from "../styles/content"
import { useLightMode } from "../store/mode";
import useCreate from "../hooks/usecreate";
import { ContentTitleWrapper } from "../styles/contentTitle";
import { ContentInputWrapper } from "../styles/contentInput";
import { ContentInputDateWrapper } from "../styles/contentInputDate";
import { CreateBtnWrapper } from "../styles/createBtn";

const ContentContainer = () => {
    const { lightMode } = useLightMode();
    const { prohibitClick, onChange, handleSubmit, value } = useCreate();
    const dateIndex = [0, 1];

    return (
        <ContentWrapper lightMode={lightMode} onClick={prohibitClick}>
            <ContentTitleWrapper lightMode={lightMode}>
                새로운 목록을 생성합니다.
            </ContentTitleWrapper>
            <ContentInputWrapper 
                placeholder="내용" 
                value={value}
                onChange={onChange}
            />
            {dateIndex.map((dateIndex) => 
                <ContentInputDateWrapper key={dateIndex}/>
            )}
            <CreateBtnWrapper onClick={handleSubmit}>
                완료
            </CreateBtnWrapper>
        </ContentWrapper>
    )

}

export default ContentContainer;