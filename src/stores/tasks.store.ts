import { ITask } from "@/interfaces";
import { create } from "zustand";

interface TasksStore {
  tasks: ITask[];

  setTasks: (tasks: ITask[]) => void;

  addTask: (task: ITask) => void;

  updateTask: (task: ITask, isReorder?: boolean) => void;

  removeTask: (taskId: number) => void;

  task: ITask | null;

  setTask: (task: ITask) => void;
}

export const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],

  setTasks: (tasks) => set({ tasks }),

  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),

  updateTask: (task, isReorder = false) =>
    set((state) => {
      if (isReorder) {
        const filteredTasks = state.tasks.filter(
          (stateTask) => stateTask.id !== task.id
        );

        return {
          tasks: [...filteredTasks, task],
        };
      } else {
        return {
          tasks: state.tasks.map((stateTask) =>
            stateTask.id === task.id ? task : stateTask
          ),
        };
      }
    }),

  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((stateTask) => stateTask.id !== taskId),
    })),

  task: null,

  setTask: (task) => set({ task }),
}));
