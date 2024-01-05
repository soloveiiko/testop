import { create } from "zustand";

export const useCatalogStore = create((set) => ({
  isExpanded: {},
  setExpanded: (index, isExpanded) =>
    set({ isExpanded: { ...isExpanded, [index]: isExpanded } }),
}));
