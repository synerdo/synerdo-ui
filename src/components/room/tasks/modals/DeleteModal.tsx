"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { Modal } from "@/components/modals";
import { ITask } from "@/interfaces";
import { useModalsStore, useTasksStore } from "@/stores";
import { Button, Typography } from "@mui/material";

export const deleteModalId = "delete-task";

export interface IDeleteModalData {
  roomId: number;
  taskId: number;
  taskTitle: string;
}

export function DeleteModal() {
  const modalData = useModalsStore((state) =>
    state.getModalData<IDeleteModalData>(deleteModalId)
  );
  const closeModal = useModalsStore((s) => s.closeModal);

  const removeTask = useTasksStore((s) => s.removeTask);

  const handleClick = async () => {
    try {
      const roomId = modalData?.roomId;
      if (!roomId) {
        throw new Error("Room id is not provided.");
      }

      const taskId = modalData?.taskId;
      if (!taskId) {
        throw new Error("Task id is not provided.");
      }

      await Api.delete<ITask>(`/rooms/${roomId}/tasks/${taskId}/`);

      removeTask(taskId);
    } catch (err) {
      console.error(err);
    }

    closeModal(deleteModalId);
  };

  return (
    <Modal id={deleteModalId} title="Delete alert">
      <Typography sx={sxStyle.label}>
        Are you sure you want to delete &quot;{modalData?.taskTitle}
        &quot;?
      </Typography>

      <Button fullWidth color="error" onClick={handleClick}>
        Delete task
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
