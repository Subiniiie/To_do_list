import { TodoItemWrapper } from "../styles/todoItem";
import { Todo } from "../store/type";
import { useLightMode } from "../store/mode";
import { TodoTitleWrapper } from "../styles/todoTitle";
import { TodoDateWrapper } from "../styles/TodoDate";
import { useList } from "../store/list";
import { ChoiceBtnWrapper } from "../styles/choiceBtn";

interface TodoItemContainerProps {
    todo: Todo;
}

const TodoItemContainer = ({todo}: TodoItemContainerProps) => {
    const { lightMode } = useLightMode();
    const { choice } = useList();

    return (
        <TodoItemWrapper lightMode={lightMode}>
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