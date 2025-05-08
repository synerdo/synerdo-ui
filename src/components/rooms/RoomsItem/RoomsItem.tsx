"use client";

import {
  deleteModalId,
  editModalId,
  IDeleteModalData,
  IEditModalData,
  ILeaveModalData,
  leaveModalId,
} from "../modals";
import { ItemActions } from "./ItemActions";
import { ItemLabel } from "./ItemLabel";
import { ItemLink } from "./ItemLink";
import { RoomsItemContainer } from "./RoomsItemContainer";
import { IRoom } from "@/interfaces";
import { useModalsStore, useUsersStore } from "@/stores";
import { getColorsFromStr } from "@/utils";
import { Box, MenuItemProps } from "@mui/material";
import { useMemo } from "react";

interface RoomsItemProps {
  room: IRoom;
}

export function RoomsItem({ room }: RoomsItemProps) {
  const user = useUsersStore((s) => s.user);
  const openModal = useModalsStore((s) => s.openModal);

  const hexColors = useMemo(
    () => getColorsFromStr(String(room.access_code)),
    [room.access_code]
  );

  const isOwner = user?.id === room.owner;

  const ownerActions: MenuItemProps[] = [
    {
      children: "Edit",
      onClick: () => {
        openModal<IEditModalData>(editModalId, {
          roomId: room.id,
          roomName: room.name,
        });
      },
    },
    {
      children: "Delete",
      onClick: () => {
        openModal<IDeleteModalData>(deleteModalId, {
          roomId: room.id,
          roomName: room.name,
        });
      },
    },
  ];

  const participantActions: MenuItemProps[] = [
    {
      children: "Leave",
      onClick: () => {
        openModal<ILeaveModalData>(leaveModalId, {
          roomId: room.id,
          roomName: room.name,
        });
      },
    },
  ];

  return (
    <RoomsItemContainer hexColors={hexColors}>
      <ItemLink href={`/rooms/${room.id}`}>
        <ItemLabel>
          <Box>{room.name}</Box>

          <ItemActions
            menuItems={isOwner ? ownerActions : participantActions}
          />
        </ItemLabel>
      </ItemLink>
    </RoomsItemContainer>
  );
}
