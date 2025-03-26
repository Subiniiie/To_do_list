import { ContentWrapper } from "../../styles/Modal/content"
import { useLightMode } from "../../store/mode";
import useCreate from "../../hooks/Modal/usecreate";
import { ContentTitleWrapper } from "../../styles/Modal/contentTitle";
import { ContentInputWrapper } from "../../styles/Modal/contentInput";
import { CreateBtnWrapper } from "../../styles/Modal/createBtn";
import { CheckedBoxWrapper } from "../../styles/Modal/checkedBox";
import { CheckedBoxTitleWrapper } from "../../styles/Modal/checkedBoxTitle";
import InputDate from "./InputDate";
import { DateCheckWrapper } from "../../styles/Modal/dateCheck";
import { DateWrapper } from "../../styles/Modal/dateBox";
import { DeleteBtnWrapper } from "../../styles/Modal/deleteBtn";
import { ModalBtnsWrapper } from "../../styles/Modal/modalBtns";

const ContentContainer = () => {
    const { lightMode } = useLightMode();
    const { prohibitClick, onChange, handleSubmit, checkboxOnChange, setStartDate, setEndDate, clickCancel, value, checkedAllDay, startDate, endDate } = useCreate();
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
            <DateCheckWrapper>
                <DateWrapper>
                    {dateIndex.map((t, i) => 
                        <InputDate 
                            key={i} 
                            date={t == "start" ? startDate : endDate}
                            setDate={t == "start" ? setStartDate : setEndDate}
                        />
                    )}
                </DateWrapper>
                <CheckedBoxWrapper
                    checked={checkedAllDay}
                    onChange={checkboxOnChange}
                />
                <CheckedBoxTitleWrapper lightMode={lightMode}>
                    당일만
                </CheckedBoxTitleWrapper>
            </DateCheckWrapper>
            <ModalBtnsWrapper>
                <CreateBtnWrapper onClick={handleSubmit}>
                    완료
                </CreateBtnWrapper>
                <DeleteBtnWrapper onClick={clickCancel}>
                    취소
                </DeleteBtnWrapper>
            </ModalBtnsWrapper>
        </ContentWrapper>
    )

}

export default ContentContainer;