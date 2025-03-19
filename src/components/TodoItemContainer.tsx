import { TodoItemWrapper } from "../styles/todoItem";
import { Todo } from "../store/type";
import { useLightMode } from "../store/mode";

interface TodoItemContainerProps {
    todo: Todo;
}

const TodoItemContainer = ({todo}: TodoItemContainerProps) => {
    const { lightMode } = useLightMode();

    return (
        <TodoItemWrapper lightMode={lightMode}>
            {todo.title}
            {todo.startDate?.toLocaleDateString()}
            {todo.endDate?.toLocaleDateString()}
        </TodoItemWrapper>
    )
}

export default TodoItemContainer;