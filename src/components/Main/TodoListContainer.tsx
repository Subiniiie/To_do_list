import { BoxWrapper } from "../../styles/Main/box";
import { useList } from "../../store/list";
import { TodoNullWrapper } from "../../styles/Main/todoNull";
import TodoItemContainer from "./TodoItemContainer";
import useScroll from "../../hooks/Common/useScroll";

const TodoListContainer = () => {

    const { todos, filteredTodos } = useList();
    const { ref } = useScroll();

    return (
        <BoxWrapper ref={ref}>
            {todos.length === 0 ? (
                <TodoNullWrapper>
                    할 일이 없습니다.
                </TodoNullWrapper>
            ) : (
             filteredTodos.length > 0 ? (
                    filteredTodos.map((todo, i) => (
                        <TodoItemContainer todo={todo} key={i} />
                    ))
                    ) : (
                        todos.map((todo, i) => (
                            <TodoItemContainer 
                                todo={todo} 
                                key={i}
                            />
                        ))
                    )
            )}
        </BoxWrapper>
    )
}

export default TodoListContainer;