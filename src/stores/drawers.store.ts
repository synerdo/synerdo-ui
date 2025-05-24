import { getStorageOpenDrawers } from "@/utils";
import { create } from "zustand";

export interface DrawerState<T = unknown> {
  isOpen: boolean;
  data?: T;
}

export interface DrawersState {
  openDrawers: Record<string, DrawerState>;

  openDrawer: <T>(drawerId: string, drawerData?: T) => void;

  closeDrawer: (drawerId: string) => void;

  getDrawerData: <T>(drawerId: string) => T | undefined;

  getIsDrawerOpen: (drawerId: string) => boolean;
}

export const useDrawersStore = create<DrawersState>((set, get) => ({
  openDrawers: getStorageOpenDrawers(),

  openDrawer: <T>(drawerId: string, drawerData?: T) =>
    set((state) => {
      const newDrawers = {
        ...state.openDrawers,
        [drawerId]: { isOpen: true, data: drawerData },
      };

      localStorage.setItem("openDrawers", JSON.stringify(newDrawers));

      return {
        openDrawers: newDrawers,
      };
    }),

  closeDrawer: (drawerId: string) =>
    set((state) => {
      if (!state.openDrawers[drawerId]) {
        return { openDrawers: state.openDrawers };
      }

      state.openDrawers[drawerId].isOpen = false;

      setTimeout(() => {
        delete state.openDrawers[drawerId];

        localStorage.setItem(
          "openDrawers",
          JSON.stringify(state.openDrawers)
        );
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
