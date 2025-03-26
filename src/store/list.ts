import { create } from "zustand";
import { ListType } from "./type";

export const useList = create<ListType>((set) => ({
    todos: [],
    setTodos : (title: string, startDate: Date | null, endDate: Date | null) => 
        set((state) => {
            const maxId = state.todos.length > 0
                ? Math.max(...state.todos.map(todo => todo.id))
                : 0;
            return {
                todos: [...state.todos, { id: maxId + 1, title, startDate, endDate }]
            };
    }),
    choice: false,
    setChoice: () => set((state) => ({ choice: !state.choice })),
    selectedTodos: [],
    toggleSelectedTodo: (id: number) => set((state) => ({
        selectedTodos: state.selectedTodos.includes(id)
        ? state.selectedTodos.filter(todoId => todoId != id)
        : [...state.selectedTodos, id]
    })),
    clearSelectedTodos: () => set(() => ({ selectedTodos: [] })),
    deleteSelectedTodos: () => set((state) => ({
        todos: state.todos.filter(todo => !state.selectedTodos.includes(todo.id)),
        selectedTodos: []
    })),
    sortType: "createAsc",
    setSortType: (sortType) => set({ sortType }),
    getSortedTodos: () => 
        set((state) => {
            let sortedTodos = [...state.todos];

            switch (state.sortType) {
                case "createAsc":
                    sortedTodos.sort((a, b) => a.id - b.id);
                    break;
                case "startDateAsc":
                    sortedTodos.sort((a, b) => (a.startDate?.getTime() || 0) - (b.startDate?.getTime() || 0));
                    break;
                case "startDateDesc":
                    sortedTodos.sort((a, b) => (b.startDate?.getTime() || 0) - (a.startDate?.getTime() || 0));
                    break;
                default:
                    break;
            }
            return { todos: sortedTodos};
        }),
        filteredTodos : [],
        setFilteredTodos: (searchText) => {
            set((state) => ({
                filteredTodos: state.todos.filter((todo) => 
                todo.title.toLowerCase().includes(searchText.toLowerCase())
            ),
            }));
        },
}));