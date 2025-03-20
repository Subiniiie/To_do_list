import { useList } from "../store/list";

const useItem = () => {
    const { setChoice, toggleSelectedTodo, deleteSelectedTodos } = useList();

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

    return {
        handleChoice,
        choiceItem,
        deleteItem
    }
}

export default useItem;