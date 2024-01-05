import { create } from "zustand";

export const useBecamePartnerModals = create((set) => ({
  isVisible: false,
  title: "",
  toggle: (title) => set((state) => ({ isVisible: !state.isVisible, title })),
}));

export const useFilterModal = create((set) => ({
  isVisible: false,
  toggle: (title) => set((state) => ({ isVisible: !state.isVisible, title })),
}));

export const useSearchModal = create((set) => ({
  isVisible: false,
  toggle: (title) => set((state) => ({ isVisible: !state.isVisible, title })),
}));
