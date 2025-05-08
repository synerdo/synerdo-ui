"use client";

import { Api } from "@/api";
import NotFound from "@/app/not-found";
import { IRoom, IUser } from "@/interfaces";
import { useRoomsStore, useUsersStore } from "@/stores";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface RoomProviderProps {
  children: React.ReactNode;
}

export function RoomProvider({ children }: RoomProviderProps) {
  const p = useParams();

  const setRoom = useRoomsStore((s) => s.setRoom);
  const setUsers = useUsersStore((s) => s.setUsers);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const checkRoom = async () => {
      try {
        const roomId = p["roomId"];
        if (!roomId) {
          throw new Error("Room id is not provided.");
        }

        const roomResponse = await Api.get<IRoom>(`/rooms/${roomId}/`);
        const room = roomResponse.data;

        setRoom(room);

        const usersResponse = await Api.get<IUser[]>(
          `/rooms/${roomId}/users`
        );
        const users = usersResponse.data;

        setUsers(users);
      } catch (err) {
        console.error(err);

        setIsError(true);
      }

      setIsLoading(false);
    };

    checkRoom();
  }, [p, setRoom, setUsers]);

  return isLoading ? null : isError ? <NotFound /> : children;
}
