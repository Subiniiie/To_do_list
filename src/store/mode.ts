import { create } from "zustand";

export const useLightMode = create((set) => ({
    lightMode: true,
    setLightMode: () => set((lightMode: boolean) => ({ lightMode: !lightMode }))
}));