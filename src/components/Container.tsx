import { ContainerWrapper } from "../styles/container";
import { useLightMode } from "../store/mode";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SettingBtn from "./SettingBtn";
import ToggleBtn from "./ToggleBtn";
import Input from "./Input";
import { HeaderContainer } from "../styles/header";
import { BtnsContainer } from "../styles/Btns";
import useSetting from "../hooks/useSetting";
import SettingOption from "./SettingOption";
import { useOpen } from "../store/content";
import BlackBackground from "./BlackContainer";
import TodoListContainer from "./TodoListContainer";
import { useList } from "../store/list";
import { DeleteBtnWrapper } from "../styles/deleteBtn";
import useItem from "../hooks/useItem";
import TodoItemContainer from "./TodoItemContainer";
import { CancelBtnWrapper } from "../styles/cancelBtn";
import { ChoiceBtnContainer } from "../styles/chioceBtns";
import { useSettingStore } from "../store/setting";

const Container = () => {
    const { lightMode } = useLightMode();
    const { handleSettingBtn } = useSetting();
    const { open } = useOpen();
    const { choice, filteredTodos } = useList();
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
                { filteredTodos.length > 0 ? (
                    filteredTodos.map((todo, i) => (
                        <TodoItemContainer todo={todo} key={i} />
                    ))
                    ) : (
                        <TodoListContainer />
                    )
                }
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