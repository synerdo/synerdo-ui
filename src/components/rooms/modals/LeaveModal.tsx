"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { Modal } from "@/components/modals";
import { IRoom } from "@/interfaces";
import { useModalsStore, useRoomsStore } from "@/stores";
import { Button, Typography } from "@mui/material";

export const leaveModalId = "leave-room";

export interface ILeaveModalData {
  roomId: number;
  roomName: string;
}

export function LeaveModal() {
  const modalData = useModalsStore((state) =>
    state.getModalData<ILeaveModalData>(leaveModalId)
  );
  const closeModal = useModalsStore((state) => state.closeModal);

  const removeRoom = useRoomsStore((state) => state.removeRoom);

  const handleClick = async () => {
    try {
      const roomId = modalData?.roomId;
      if (!roomId) {
        throw new Error("Room id is not provided.");
      }

      await Api.post<IRoom>(`/rooms/${roomId}/exit/`);

      removeRoom(roomId);
    } catch (err) {
      console.error(err);
    }

    closeModal(leaveModalId);
  };

  return (
    <Modal id={leaveModalId} title="Leave alert">
      <Typography sx={sxStyle.label}>
        Are you sure you want to leave &quot;{modalData?.roomName}
        &quot;?
      </Typography>

      <Button fullWidth color="error" onClick={handleClick}>
        Leave room
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
