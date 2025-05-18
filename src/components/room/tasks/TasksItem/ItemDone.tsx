"use client";

import { Api } from "@/api";
import { ITask } from "@/interfaces";
import { useTasksStore } from "@/stores";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton, IconButtonProps } from "@mui/material";
import { useParams } from "next/navigation";
import { useMemo } from "react";

interface ItemDoneProps extends IconButtonProps {
  taskId: number;
  isDone?: boolean;
  iconSize?: "inherit" | "large" | "medium" | "small";
}

export function ItemDone({
  taskId,
  isDone,
  iconSize,
  ...props
}: ItemDoneProps) {
  const p = useParams();

  const roomId = useMemo(() => p["roomId"], [p]);

  const updateTask = useTasksStore((s) => s.updateTask);

  const handleDone = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await Api.patch<ITask>(
        `/rooms/${roomId}/tasks/${taskId}/`,
        { is_done: !isDone }
      );
      const task = response.data;

      updateTask(task, true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <IconButton {...props} color="inherit" onClick={handleDone}>
      {isDone ? (
        <CheckBoxIcon fontSize={iconSize} />
      ) : (
        <CheckBoxOutlineBlankIcon fontSize={iconSize} />
      )}
    </IconButton>
  );
}
