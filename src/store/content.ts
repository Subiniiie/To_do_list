import { create } from "zustand";
import { Content } from "./type"; 

export const useOpen = create<Content>((set) => ({
    open: false,
    setOpen: (value) => set(() => ({ open: value })),
}));