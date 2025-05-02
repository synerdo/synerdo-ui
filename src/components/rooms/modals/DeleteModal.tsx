"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { Modal } from "@/components/modals";
import { IRoom } from "@/interfaces";
import { useModalsStore, useRoomsStore } from "@/stores";
import { Button, Typography } from "@mui/material";

export const deleteModalId = "delete-room";

export interface IDeleteModalData {
  roomId: number;
  roomName: string;
}

export function DeleteModal() {
  const modalData = useModalsStore((state) =>
    state.getModalData<IDeleteModalData>(deleteModalId)
  );
  const closeModal = useModalsStore((state) => state.closeModal);

  const removeRoom = useRoomsStore((state) => state.removeRoom);

  const handleClick = async () => {
    try {
      const roomId = modalData?.roomId;
      if (!roomId) {
        throw new Error("Room id is not provided.");
      }

      await Api.delete<IRoom>(`/rooms/${roomId}/`);

      removeRoom(roomId);
    } catch (err) {
      console.error(err);
    }

    closeModal(deleteModalId);
  };

  return (
    <Modal id={deleteModalId} title="Delete alert">
      <Typography sx={sxStyle.label}>
        Are you sure you want to delete &quot;{modalData?.roomName}
        &quot;?
      </Typography>

      <Button fullWidth color="error" onClick={handleClick}>
        Delete room
      </Button>
    </Modal>
  );
}

const sxStyle = SxStyle.create({
  label: {
    py: 2,
    mb: 2,
    textAlign: "center",
    fontSize: "1.125rem",
    fontWeight: "600",
  },
});
