import { BoxWrapper } from "../styles/box";
import { useList } from "../store/list";

const TodoListContainer = () => {
    const { todos } = useList();

    return (
        <BoxWrapper >
            {todos.length === 0 ? (
                null
            ) : (
                todos.map((todo) => (
                    <p>{todo.title}</p>
                ))
            )}
        </BoxWrapper>
    )
}

export default TodoListContainer;