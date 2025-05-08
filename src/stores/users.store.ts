import { IUser } from "@/interfaces";
import { create } from "zustand";

interface UsersStore {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
  user: IUser | null;
  setUser: (user: IUser) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],

  setUsers: (users) => set({ users }),

  user: null,

  setUser: (user) => set({ user }),
}));
