export interface theme {
    lightMode: boolean;
    setLightMode: () => void;
};

export interface Todo {
    id: number;
    title: string;
    startDate: Date | null;
    endDate: Date | null;
};

export interface ListType {
    todos: Todo[];
    setTodos: (title: string, startDate: Date | null, endDate: Date | null) => void;
};

export interface Content {
    open: boolean;
    setOpen : () => void;
}