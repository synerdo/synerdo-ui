import { TTaskPriority } from "@/types";

export interface ITask {
  id: number;
  title: string;
  text: string;
  is_done: boolean;
  due_to_date: string;
  due_to_time: string;
  priority: TTaskPriority;
  creator: number;
  executor: number | null;
  room: number;
}
