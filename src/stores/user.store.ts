import { IUser } from "@/interfaces";
import { create } from "zustand";

interface UserStore {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  
  setUser: (user) => set({ user }),
}));
