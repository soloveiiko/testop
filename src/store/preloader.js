import { create } from "zustand";

export const usePreloaderStore = create((set) => ({
  isVisible: false,
  toggle: () => set((state) => ({ isVisible: !state.isVisible })),
}));
