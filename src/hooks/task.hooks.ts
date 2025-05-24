import { Api } from "@/api";
import { ITask } from "@/interfaces";
import { useTasksStore } from "@/stores";
import { useEffect } from "react";

export const useFetchTasks = (roomId: number) => {
  const setTasks = useTasksStore((s) => s.setTasks);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await Api.get<ITask[]>(`/rooms/${roomId}/tasks/`);
        const tasks = response.data;

        setTasks(tasks);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, [roomId, setTasks]);
};
