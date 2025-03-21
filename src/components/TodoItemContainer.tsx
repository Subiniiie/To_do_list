import { TodoItemWrapper } from "../styles/todoItem";
import { Todo } from "../store/type";
import { useLightMode } from "../store/mode";
import { TodoTitleWrapper } from "../styles/todoTitle";
import { TodoDateWrapper } from "../styles/TodoDate";
import { useList } from "../store/list";
import { ChoiceBtnWrapper } from "../styles/choiceBtn";
import useItem from "../hooks/useItem";

interface TodoItemContainerProps {
    todo: Todo;
}

const TodoItemContainer = ({todo}: TodoItemContainerProps) => {
    const { lightMode } = useLightMode();
    const { choice, selectedTodos } = useList();
    const { choiceItem } = useItem();
    const isSelected = selectedTodos.includes(todo.id);

    return (
        <TodoItemWrapper 
            lightMode={lightMode}
            isSelected={isSelected}
            onClick={() => choiceItem(todo.id)}
        >
            <TodoTitleWrapper>
                {todo.title}
            </TodoTitleWrapper>  
            <TodoDateWrapper>
                {todo.startDate?.toLocaleDateString()}
                {todo.endDate?.toLocaleDateString()}
            </TodoDateWrapper>
            {choice && <ChoiceBtnWrapper lightMode={lightMode} isSelected={isSelected}/>} 
        </TodoItemWrapper>
    )
}

export default TodoItemContainer;