"use client";

import { TasksItem } from "../TasksItem";
import { TasksListContainer } from "./TasksListContainer";
import { useFetchTasks } from "@/hooks";
import { useTasksStore } from "@/stores";
import { Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export function TasksList() {
  const p = useParams();
  const roomId = useMemo(() => Number(p["roomId"]), [p]);

  const tasks = useTasksStore((s) => s.tasks);

  useFetchTasks(roomId);

  return tasks.length > 0 ? (
    <TasksListContainer>
      {tasks.map((task) => (
        <TasksItem key={task.id} task={task} />
      ))}
    </TasksListContainer>
  ) : (
    <Typography>No tasks available.</Typography>
  );
}
