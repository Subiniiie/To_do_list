import { TodoItemWrapper } from "../styles/todoItem";
import { Todo } from "../store/type";

interface TodoItemContainerProps {
    todo: Todo;
}

const TodoItemContainer = ({todo}: TodoItemContainerProps) => {
    return (
        <TodoItemWrapper>
            {todo.title}
            {todo.startDate?.toLocaleDateString()}
            {todo.endDate?.toLocaleDateString()}
        </TodoItemWrapper>
    )
}

export default TodoItemContainer;