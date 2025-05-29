"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { Modal } from "@/components/modals";
import { ITask } from "@/interfaces";
import { ITaskFields, taskSchema } from "@/schemas";
import { useModalsStore, useTasksStore } from "@/stores";
import { ETaskPriority, TTaskPriority } from "@/types";
import { getDateStr, getTimeStr, parseDueDateTime } from "@/utils";
import { MenuItemProps } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export const editModalId = "edit-task";

export interface IEditModalData {
  taskId: number;
  title: string;
  text: string | null;
  due_to_date: string | null;
  due_to_time: string | null;
  priority: TTaskPriority | null;
}

export function EditModal() {
  const p = useParams();

  const roomId = useMemo(() => p["roomId"], [p]);

  const modalData = useModalsStore((state) =>
    state.getModalData<IEditModalData>(editModalId)
  );
  const closeModal = useModalsStore((s) => s.closeModal);
  const updateTask = useTasksStore((s) => s.updateTask);

  const selectItems: MenuItemProps[] = Object.entries(ETaskPriority).map(
    ([label, value]) => ({
      children: label,
      value: value,
    })
  );

  const { dueToDate, dueToTime } = parseDueDateTime(
    modalData?.due_to_date,
    modalData?.due_to_time
  );

  const initialValues: ITaskFields = {
    title: modalData?.title || "",
    text: modalData?.text || null,
    due_to_date: dueToDate,
    due_to_time: dueToTime,
    priority: modalData?.priority || ETaskPriority.None,
  };

  const handleSubmit = async (
    values: ITaskFields,
    _formikHelpers: FormikHelpers<ITaskFields>
  ) => {
    try {
      const taskId = modalData?.taskId;
      if (!taskId) {
        throw new Error("Task id is not provided.");
      }

      const mappedValues = {
        ...values,
        text: values.text ? values.text : null,
        due_to_date: values.due_to_date
          ? getDateStr(values.due_to_date)
          : null,
        due_to_time: values.due_to_time
          ? getTimeStr(values.due_to_time)
          : null,
        priority: values.priority !== "null" ? values.priority : null,
      };

      const response = await Api.patch<ITask>(
        `/rooms/${roomId}/tasks/${taskId}/`,
        mappedValues
      );
      const task = response.data;

      updateTask(task);
    } catch (err) {
      console.error(err);
    }

    closeModal(editModalId);
  };

  return (
    <Modal id={editModalId} title="Edit Task">
      <Formik<ITaskFields>
        validationSchema={taskSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <InputField<ITaskFields>
              type="text"
              name="title"
              label="Title"
              sx={sxStyle.itemSpacing}
            />

            <InputField<ITaskFields>
              type="textarea"
              name="text"
              label="Text"
              sx={sxStyle.itemSpacing}
            />

            <InputField<ITaskFields>
              type="date"
              name="due_to_date"
              label="Due date"
              sx={sxStyle.itemSpacing}
            />

            {values.due_to_date ? (
              <InputField<ITaskFields>
                type="time"
                name="due_to_time"
                label="Due time"
                sx={sxStyle.itemSpacing}
              />
            ) : null}

            <InputField<ITaskFields>
              type="select"
              name="priority"
              label="Priority"
              menuItems={selectItems}
              sx={sxStyle.itemSpacing}
            />

            <InputField disabled type="button" name="Edit task" />
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

const sxStyle = SxStyle.create({
  itemSpacing: {
    mb: 1,
  },
});
