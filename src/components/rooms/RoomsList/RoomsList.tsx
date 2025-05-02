"use client";

import { RoomsItem } from "../RoomsItem";
import { RoomsListContainer } from "./RoomsListContainer";
import { useFetchRooms } from "@/hooks";
import { useRoomsStore } from "@/stores";
import { Typography } from "@mui/material";

export function RoomsList() {
  const rooms = useRoomsStore((state) => state.rooms);

  useFetchRooms();

  return rooms.length > 0 ? (
    <RoomsListContainer>
      {rooms.map((room) => (
        <RoomsItem key={room.id} room={room} />
      ))}
    </RoomsListContainer>
  ) : (
    <Typography>No rooms available.</Typography>
  );
}
