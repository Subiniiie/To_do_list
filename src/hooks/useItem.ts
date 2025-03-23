import { useList } from "../store/list";

const useItem = () => {
    const { setChoice, toggleSelectedTodo, deleteSelectedTodos, setSortType, getSortedTodos } = useList();

    const handleChoice = () => {
        setChoice();
    };

    const choiceItem = (id: number) => {
        toggleSelectedTodo(id);
    };

    const deleteItem = () => {
        deleteSelectedTodos();
        setChoice();
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