export interface type {
    lightMode: boolean;
    setLightMode: () => void;
};

interface Todo {
    id: number;
    title: string;
    date: Date;
};

export interface ListType {
    todos: Todo[];
    setTodos: (title: string, date: Date) => void;
};

export interface Content {
    open: boolean;
    setOpen : () => void;
}