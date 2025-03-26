import { useList } from "../../store/list";
import useNotification from "../Common/useNotification";
import useConfirm from "../Common/useConfirm";

const useItem = () => {
    const { setChoice, toggleSelectedTodo, clearSelectedTodos, deleteSelectedTodos, setSortType, getSortedTodos } = useList();
    
    const triggerNotif = useNotification("게시물 삭제 완료", {
        body: "게시물이 삭제 되었습니다."
    });

    const handleChoice = () => {
        setChoice();
    };

    const choiceItem = (id: number) => {
        toggleSelectedTodo(id);
    };

    const deleteCheckedItem = () => {
        deleteSelectedTodos();
        setChoice();
        triggerNotif();
    };

    const cancleDeleteItem = () => {
        setChoice();
        clearSelectedTodos();
    };

    const confirmAction = useConfirm("정말 삭제하시겠습니까?", deleteCheckedItem, cancleDeleteItem);

    const deleteItem = () => {
        if (confirmAction) {
            confirmAction();
        }
    };

    const handleSort = (type: "createAsc" | "startDateDesc" | "startDateAsc") => {
        setSortType(type);
        getSortedTodos();
    };

    const clickCancleBtn = () => {
        setChoice();
        clearSelectedTodos();
    };


    return {
        handleChoice,
        choiceItem,
        deleteItem,
        handleSort,
        clickCancleBtn,
    }
}

export default useItem;