import { ContainerWrapper } from "../../styles/Background/container";
import { useLightMode } from "../../store/mode";
import Title from "../Header/Title";
import SubTitle from "../Header/SubTitle";
import SettingBtn from "../Header/SettingBtn";
import ToggleBtn from "../Header/ToggleBtn";
import Input from "../Header/Input";
import { HeaderContainer } from "../../styles/Header/header";
import { BtnsContainer } from "../../styles/Header/Btns";
import useSetting from "../../hooks/Header/useSetting";
import SettingOption from "../Header/SettingOption";
import { useOpen } from "../../store/content";
import BlackBackground from "../Modal/BlackContainer";
import TodoListContainer from "../Main/TodoListContainer";
import { useList } from "../../store/list";
import { DeleteBtnWrapper } from "../../styles/Modal/deleteBtn";
import useItem from "../../hooks/Main/useItem";
import { CancelBtnWrapper } from "../../styles/Main/cancelBtn";
import { ChoiceBtnContainer } from "../../styles/Main/chioceBtns";
import { useSettingStore } from "../../store/setting";

const Container = () => {
    const { lightMode } = useLightMode();
    const { handleSettingBtn } = useSetting();
    const { open } = useOpen();
    const { choice } = useList();
    const { deleteItem, clickCancleBtn } = useItem();
    const { openSetting } = useSettingStore();

    return (
        <>
            <ContainerWrapper lightMode={lightMode}>
                <HeaderContainer>
                    <Title />
                    <BtnsContainer>
                        <SettingBtn handleSettingBtn={handleSettingBtn} />
                        <ToggleBtn />
                    </BtnsContainer>
                    {openSetting && <SettingOption />}
                </HeaderContainer>
                <SubTitle />
                <Input />
                <TodoListContainer />
                {choice && 
                    <ChoiceBtnContainer>
                        <DeleteBtnWrapper onClick={deleteItem}>
                            삭제
                        </DeleteBtnWrapper>
                        <CancelBtnWrapper onClick={clickCancleBtn}>
                            취소
                        </CancelBtnWrapper>
                    </ChoiceBtnContainer>
                }
            </ContainerWrapper>
            {open && <BlackBackground />}
        </>
    )
}

export default Container;