import { create } from "zustand";

interface ModalState<T = unknown> {
  isOpen: boolean;
  data?: T;
}

interface ModalsState {
  openModals: Record<string, ModalState>;

  openModal: <T>(modalId: string, modalData?: T) => void;

  closeModal: (modalId: string) => void;

  getModalData: <T>(modalId: string) => T | undefined;

  getIsModalOpen: (modalId: string) => boolean;
}

export const useModalsStore = create<ModalsState>((set, get) => ({
  openModals: {},

  openModal: <T>(modalId: string, modalData?: T) =>
    set((state) => ({
      openModals: {
        ...state.openModals,
        [modalId]: { isOpen: true, data: modalData },
      },
    })),

  closeModal: (modalId: string) =>
    set((state) => {
      state.openModals[modalId].isOpen = false;

      setTimeout(() => {
        delete state.openModals[modalId];
      }, 300);

      return { openModals: state.openModals };
    }),

  getModalData: <T>(modalId: string): T | undefined => {
    return get().openModals[modalId]?.data as T | undefined;
  },

  getIsModalOpen: (modalId: string): boolean => {
    return !!get().openModals[modalId]?.isOpen;
  },
}));
