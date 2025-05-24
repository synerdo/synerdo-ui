import { IRoom } from "@/interfaces";
import { create } from "zustand";

interface RoomsStore {
  rooms: IRoom[];

  setRooms: (rooms: IRoom[]) => void;

  addRoom: (room: IRoom) => void;

  updateRoom: (room: IRoom) => void;

  removeRoom: (roomId: number) => void;

  room: IRoom | null;

  setRoom: (room: IRoom) => void;
}

export const useRoomsStore = create<RoomsStore>((set) => ({
  rooms: [],

  setRooms: (rooms) => set({ rooms }),

  addRoom: (room) => set((state) => ({ rooms: [...state.rooms, room] })),

  updateRoom: (room) =>
    set((state) => {
      const filteredRooms = state.rooms.filter(
        (stateRoom) => stateRoom.id !== room.id
      );

      return {
        rooms: [...filteredRooms, room],
      };
    }),

  removeRoom: (roomId) =>
    set((state) => ({
      rooms: state.rooms.filter((stateRoom) => stateRoom.id !== roomId),
    })),

  room: null,

  setRoom: (room) => set({ room }),
}));
