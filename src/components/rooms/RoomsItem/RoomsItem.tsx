"use client";

import {
  deleteModalId,
  editModalId,
  IDeleteModalData,
  IEditModalData,
  ILeaveModalData,
  leaveModalId,
} from "../modals";
import { ItemLabel } from "./ItemLabel";
import { ItemLink } from "./ItemLink";
import { ItemTitle } from "./ItemTitle";
import { RoomsItemContainer } from "./RoomsItemContainer";
import { MenuButton } from "@/components/buttons";
import { IRoom } from "@/interfaces";
import { useModalsStore, useUsersStore } from "@/stores";
import { getColorsFromStr } from "@/utils";
import { MenuItemProps, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";

interface RoomsItemProps {
  room: IRoom;
}

export function RoomsItem({ room }: RoomsItemProps) {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const iconSize = useMemo(
    () => (isTablet ? "medium" : "small"),
    [isTablet]
  );

  const user = useUsersStore((s) => s.user);
  const openModal = useModalsStore((s) => s.openModal);

  const gradient = useMemo(() => {
    const [color1, color2] = getColorsFromStr(`${room.access_code}`);

    return `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`;
  }, [room.access_code]);

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
    <RoomsItemContainer gradient={gradient}>
      <ItemLink href={`/rooms/${room.id}`}>
        <ItemLabel>
          <ItemTitle>{room.name}</ItemTitle>

          <MenuButton
            iconSize={iconSize}
            menuItems={isOwner ? ownerActions : participantActions}
          />
        </ItemLabel>
      </ItemLink>
    </RoomsItemContainer>
  );
}
