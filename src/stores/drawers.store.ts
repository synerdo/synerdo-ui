import { create } from "zustand";

interface DrawerState<T = unknown> {
  isOpen: boolean;
  data?: T;
}

interface DrawersState {
  openDrawers: Record<string, DrawerState>;
  openDrawer: <T>(drawerId: string, drawerData?: T) => void;
  closeDrawer: (drawerId: string) => void;
  getDrawerData: <T>(drawerId: string) => T | undefined;
  getIsDrawerOpen: (drawerId: string) => boolean;
}

export const useDrawersStore = create<DrawersState>((set, get) => ({
  openDrawers: {},

  openDrawer: <T>(drawerId: string, drawerData?: T) =>
    set((state) => ({
      openDrawers: {
        ...state.openDrawers,
        [drawerId]: { isOpen: true, data: drawerData },
      },
    })),

  closeDrawer: (drawerId: string) =>
    set((state) => {
      state.openDrawers[drawerId].isOpen = false;

      setTimeout(() => {
        state.openDrawers[drawerId].data = null;
      }, 300);

      return { openDrawers: state.openDrawers };
    }),

  getDrawerData: <T>(drawerId: string): T | undefined => {
    return get().openDrawers[drawerId]?.data as T | undefined;
  },

  getIsDrawerOpen: (drawerId: string): boolean => {
    return !!get().openDrawers[drawerId]?.isOpen;
  },
}));
