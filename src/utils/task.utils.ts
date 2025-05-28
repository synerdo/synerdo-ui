import { ITask } from "@/interfaces";
import { isBefore, parseISO } from "date-fns";

export const isTaskExpired = (task: ITask): boolean => {
  const { due_to_date, due_to_time } = task;

  if (!due_to_date) return false;

  const datetimeStr = due_to_time
    ? `${due_to_date}T${due_to_time}`
    : due_to_date;

  const dueDate = parseISO(datetimeStr);

  return isBefore(dueDate, new Date());
};
