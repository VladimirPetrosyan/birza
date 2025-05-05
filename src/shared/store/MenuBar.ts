import { create } from 'zustand';

type MenuBarStore = {
    isVisible: boolean;
    show: () => void;
    hide: () => void;
};

export const useMenuBarStore = create<MenuBarStore>((set) => ({
    isVisible: true,
    show: () => set({ isVisible: true }),
    hide: () => set({ isVisible: false }),
}));
