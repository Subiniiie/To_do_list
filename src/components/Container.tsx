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

const Container = () => {
    const { lightMode } = useLightMode();
    const { openSetting, handleSettingBtn } = useSetting();
    const { open } = useOpen();
    const { choice } = useList();
    const { deleteItem } = useItem();

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
                    <DeleteBtnWrapper onClick={deleteItem}>
                        삭제
                    </DeleteBtnWrapper>
                }
            </ContainerWrapper>
            {open && <BlackBackground />}
        </>
    )
}

export default Container;