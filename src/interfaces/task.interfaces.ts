import { TTaskPriority } from "@/types";

export interface ITask {
  id: number;
  title: string;
  text: string | null;
  is_done: boolean;
  due_to_date: string | null;
  due_to_time: string | null;
  priority: TTaskPriority | null;
  creator: number;
  executor: number | null;
  room: number;
}
