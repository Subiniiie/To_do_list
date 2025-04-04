export interface theme {
    lightMode: boolean;
    setLightMode: () => void;
};

export interface setting {
    openSetting: boolean;
    setOpenSetting: () => void;
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
    choice: boolean;
    setChoice: () => void;
    selectedTodos: number[];
    toggleSelectedTodo: (id: number) => void;
    clearSelectedTodos: () => void;
    deleteSelectedTodos: () => void;
    sortType: "createAsc" | "startDateDesc" | "startDateAsc";
    setSortType: (sortType: "createAsc" | "startDateDesc" | "startDateAsc") => void;
    getSortedTodos: () => void;
    filteredTodos: Todo[];
    setFilteredTodos: (searchText: string) => void;
};

export interface Content {
    open: boolean;
    setOpen : (value: boolean) => void;
}

export interface NotificationOptions {
    body?: string;
}