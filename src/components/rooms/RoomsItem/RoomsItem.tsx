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
import { useModalsStore, useUserStore } from "@/stores";
import { getHexColors } from "@/utils";
import { Box, MenuItemProps } from "@mui/material";

interface RoomsItemProps {
  room: IRoom;
}

export function RoomsItem({ room }: RoomsItemProps) {
  const user = useUserStore((state) => state.user);
  const openModal = useModalsStore((state) => state.openModal);
  const hexColors = getHexColors(String(room.access_code));

  const isUserRoom = user?.id == room.owner;

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
            menuItems={isUserRoom ? ownerActions : participantActions}
          />
        </ItemLabel>
      </ItemLink>
    </RoomsItemContainer>
  );
}
