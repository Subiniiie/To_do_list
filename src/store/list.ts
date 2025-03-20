import { create } from "zustand";
import { ListType } from "./type";

export const useList = create<ListType>((set) => ({
    todos: [],
    setTodos : (title: string, startDate: Date | null, endDate: Date | null) => set((state) => ({
        todos: [...state.todos, { id: state.todos.length + 1, title, startDate, endDate}]
    })),
    choice: false,
    setChoice: () => set((state) => ({ choice: !state.choice })),
    selectedTodos: [],
    toggleSelectedTodo: (id: number) => set((state) => ({
        selectedTodos: state.selectedTodos.includes(id)
        ? state.selectedTodos.filter(todoId => todoId != id)
        : [...state.selectedTodos, id]
    })),
    deleteSelectedTodos: () => set((state) => ({
        todos: state.todos.filter(todo => !state.selectedTodos.includes(todo.id)),
        selectedTodos: []
    })),
}));