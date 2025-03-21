import { useList } from "../store/list";

const useItem = () => {
    const { setChoice, toggleSelectedTodo, deleteSelectedTodos, setSortType, getSortedTodos } = useList();

    const handleChoice = () => {
        setChoice();
    };

    const choiceItem = (id: number) => {
        toggleSelectedTodo(id);
    }

    const deleteItem = () => {
        deleteSelectedTodos();
        setChoice();
    }

    const handleSort = (type: "createAsc" | "startDateDesc" | "startDateAsc") => {
        setSortType(type);
        getSortedTodos();
    }

    return {
        handleChoice,
        choiceItem,
        deleteItem,
        handleSort
    }
}

export default useItem;