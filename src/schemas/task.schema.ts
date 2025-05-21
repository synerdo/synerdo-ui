import { ETaskPriority, TTaskPriority } from "@/types";
import * as Yup from "yup";

export interface ITaskFields {
  title: string;
  text?: string | null;
  due_to_date?: Date | null;
  due_to_time?: Date | null;
  priority?: TTaskPriority | null;
}

export const taskSchema: Yup.ObjectSchema<ITaskFields> =
  Yup.object().shape({
    title: Yup.string()
      .min(2, "Title should be between 2 and 150 characters")
      .max(150, "Title should be between 2 and 150 characters")
      .required("Title is required"),

    text: Yup.string().nullable().optional(),

    due_to_date: Yup.date().nullable().optional(),

    due_to_time: Yup.date().nullable().optional(),

    priority: Yup.mixed<TTaskPriority>()
      .oneOf(Object.values(ETaskPriority))
      .nullable()
      .optional(),
  });
