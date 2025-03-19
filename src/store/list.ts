import { create } from "zustand";
import { ListType } from "./type";

export const useList = create<ListType>((set) => ({
    todos: [],
    setTodos : (title, startDate, endDate) => set((state) => ({
        todos: [...state.todos, { id: state.todos.length + 1, title, startDate, endDate}]
    })),
}));