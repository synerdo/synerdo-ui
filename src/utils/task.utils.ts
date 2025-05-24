import { ITask } from "@/interfaces";

export const isTaskExpired = (task: ITask): boolean => {
  return task.due_to_date && task.due_to_time
    ? new Date(`${task.due_to_date}:${task.due_to_time}`) < new Date()
    : task.due_to_date
      ? new Date(`${task.due_to_date}`) < new Date()
      : false;
};
