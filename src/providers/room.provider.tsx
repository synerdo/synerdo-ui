"use client";

import { Api } from "@/api";
import NotFound from "@/app/not-found";
import { IRoom } from "@/interfaces";
import { useRoomsStore } from "@/stores";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface RoomProviderProps {
  children: React.ReactNode;
}

export function RoomProvider({ children }: RoomProviderProps) {
  const p = useParams();

  const setRoom = useRoomsStore((state) => state.setRoom);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const checkRoom = async () => {
      try {
        const roomId = p["roomId"];
        if (!roomId) {
          throw new Error("Room id is not provided.");
        }

        const response = await Api.get<IRoom>(`/rooms/${roomId}/`);
        const room = response.data;

        setRoom(room);
      } catch (err) {
        console.error(err);

        setIsError(true);
      }

      setIsLoading(false);
    };

    checkRoom();
  }, [p, setRoom]);

  return isLoading ? null : isError ? <NotFound /> : children;
}
