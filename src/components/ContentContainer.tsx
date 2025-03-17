import { ContentWrapper } from "../styles/content"
import { useLightMode } from "../store/mode";
import useCreate from "../hooks/usecreate";
import { ContentTitleWrapper } from "../styles/contentTitle";
import { ContentInputWrapper } from "../styles/contentInput";
import { CreateBtnWrapper } from "../styles/createBtn";
import { CheckedBoxWrapper } from "../styles/checkedBox";
import { CheckedBoxTitleWrapper } from "../styles/checkedBoxTitle";
import InputDate from "./InputDate";

const ContentContainer = () => {
    const { lightMode } = useLightMode();
    const { prohibitClick, onChange, handleSubmit, checkboxOnChange, value, checkedAllDay } = useCreate();
    const dateIndex = ['start', 'end'];

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
            {dateIndex.map((t, i) => 
                <InputDate key={i} t={t} />
            )}
            <CheckedBoxWrapper
                checked={checkedAllDay}
                onChange={checkboxOnChange}
            />
            <CheckedBoxTitleWrapper lightMode={lightMode}>
                당일만
            </CheckedBoxTitleWrapper>
            <CreateBtnWrapper onClick={handleSubmit}>
                완료
            </CreateBtnWrapper>
        </ContentWrapper>
    )

}

export default ContentContainer;