import { TodoItemWrapper } from "../styles/todoItem";
import { Todo } from "../store/type";
import { useLightMode } from "../store/mode";
import { TodoTitleWrapper } from "../styles/todoTitle";
import { TodoDateWrapper } from "../styles/TodoDate";

interface TodoItemContainerProps {
    todo: Todo;
}

const TodoItemContainer = ({todo}: TodoItemContainerProps) => {
    const { lightMode } = useLightMode();

    return (
        <TodoItemWrapper lightMode={lightMode}>
            <TodoTitleWrapper>
                {todo.title}
            </TodoTitleWrapper>  
            <TodoDateWrapper>
                {todo.startDate?.toLocaleDateString()}
                {todo.endDate?.toLocaleDateString()}
            </TodoDateWrapper> 
        </TodoItemWrapper>
    )
}

export default TodoItemContainer;