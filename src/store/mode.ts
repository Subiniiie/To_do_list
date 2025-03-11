import { create } from "zustand";
import { type } from "./type";

export const useLightMode = create<type>((set) => ({
    lightMode: true,
    setLightMode: () => set((state) => ({ lightMode: !state.lightMode})),
}));