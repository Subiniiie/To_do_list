import { create } from "zustand";
import { setting } from "./type";

export const useSettingStore = create<setting>((set) => ({
    openSetting: false,
    setOpenSetting: () => set((state) => ({ openSetting: !state.openSetting})),
}));