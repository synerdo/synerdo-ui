import { Api } from "@/api";
import { IRoom } from "@/interfaces";
import { useRoomsStore } from "@/stores";
import { useEffect } from "react";

export const useFetchRooms = () => {
  const setRooms = useRoomsStore((s) => s.setRooms);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await Api.get<IRoom[]>("/rooms");

        const rooms = response.data;

        setRooms(rooms);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRooms();
  }, [setRooms]);
};
