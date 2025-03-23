import { TodoItemWrapper } from "../../styles/Main/todoItem";
import { Todo } from "../../store/type";
import { useLightMode } from "../../store/mode";
import { TodoTitleWrapper } from "../../styles/Main/todoTitle";
import { TodoDateWrapper } from "../../styles/Main/TodoDate";
import { useList } from "../../store/list";
import { ChoiceBtnWrapper } from "../../styles/Main/choiceBtn";
import useItem from "../../hooks/Main/useItem";
import { TodoBoxWrapper } from "../../styles/Main/todoBox";

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
            onClick={() => choice && choiceItem(todo.id)}
        >
            <TodoBoxWrapper>
                <TodoTitleWrapper>
                    {todo.title}
                </TodoTitleWrapper>  
                <TodoDateWrapper>
                    {todo.startDate?.toLocaleDateString()} - {todo.endDate?.toLocaleDateString()}
                </TodoDateWrapper>
            </TodoBoxWrapper>
            {choice && <ChoiceBtnWrapper lightMode={lightMode} isSelected={isSelected}/>} 
        </TodoItemWrapper>
    )
}

export default TodoItemContainer;