import { BoxWrapper } from "../styles/box";
import { useList } from "../store/list";
import { TodoNullWrapper } from "../styles/todoNull";
import TodoItemContainer from "./TodoItemContainer";

const TodoListContainer = () => {
    const { todos } = useList();

    return (
        <BoxWrapper >
            {todos.length === 0 ? (
                <TodoNullWrapper>
                    할 일이 없습니다.
                </TodoNullWrapper>
            ) : (
                todos.map((todo, i) => (
                    <TodoItemContainer 
                        todo={todo} 
                        key={i}
                    />
                ))
            )}
        </BoxWrapper>
    )
}

export default TodoListContainer;