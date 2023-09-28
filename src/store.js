import { create } from "zustand";

const store = create((set) => ({
  menuState: false,
  changeMenuState: (data) => set((state) => ({ menuState: data })),
}));

export default store;
