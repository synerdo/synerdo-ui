"use client";

import { ListCell, ListRow } from "../List";
import { IUser } from "@/interfaces";
import { useRoomsStore } from "@/stores";

interface UsersItemProps {
  user: IUser;
  index: number;
}

export function UsersItem({ user, index }: UsersItemProps) {
  const room = useRoomsStore((s) => s.room);

  const isOwner = user.id === room?.owner;

  return (
    <ListRow>
      <ListCell len={5} text={index} />

      <ListCell len={20} text={user.username} />

      <ListCell len={45} text={user.email} />

      <ListCell len={30} text={isOwner ? "Owner" : "Participant"} />
    </ListRow>
  );
}
