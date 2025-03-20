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
    const { choice } = useList();
    const { choiceItem } = useItem();

    return (
        <TodoItemWrapper 
            lightMode={lightMode}
            onClick={() => choiceItem(todo.id)}
        >
            <TodoTitleWrapper>
                {todo.title}
            </TodoTitleWrapper>  
            <TodoDateWrapper>
                {todo.startDate?.toLocaleDateString()}
                {todo.endDate?.toLocaleDateString()}
            </TodoDateWrapper>
            {choice && <ChoiceBtnWrapper />}
        </TodoItemWrapper>
    )
}

export default TodoItemContainer;