import { useList } from "../../store/list";
import useNotification from "../Common/useNotification";

const useItem = () => {
    const { setChoice, toggleSelectedTodo, deleteSelectedTodos, setSortType, getSortedTodos } = useList();

    const triggerNotif = useNotification("게시물 삭제 완료", {
        body: "게시물이 삭제 되었습니다."
    })

    const handleChoice = () => {
        setChoice();
    };

    const choiceItem = (id: number) => {
        toggleSelectedTodo(id);
    };

    const deleteItem = () => {
        deleteSelectedTodos();
        setChoice();
        triggerNotif();
    };

    const handleSort = (type: "createAsc" | "startDateDesc" | "startDateAsc") => {
        setSortType(type);
        getSortedTodos();
    };

    const clickCancleBtn = () => {
        setChoice();
    }

    return {
        handleChoice,
        choiceItem,
        deleteItem,
        handleSort,
        clickCancleBtn
    }
}

export default useItem;