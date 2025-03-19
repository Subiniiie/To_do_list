import { create } from "zustand";
import { theme } from "./type";

export const useLightMode = create<theme>((set) => ({
    lightMode: true,
    setLightMode: () => set((state) => ({ lightMode: !state.lightMode})),
}));