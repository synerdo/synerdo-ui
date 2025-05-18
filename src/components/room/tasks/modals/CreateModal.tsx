"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { Modal } from "@/components/modals";
import { ITask } from "@/interfaces";
import { ITaskFields, taskSchema } from "@/schemas";
import { useModalsStore, useTasksStore } from "@/stores";
import { ETaskPriority } from "@/types";
import { getDateString, getTimeString } from "@/utils";
import { MenuItemProps } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export const createModalId = "create-task";

export function CreateModal() {
  const p = useParams();

  const roomId = useMemo(() => p["roomId"], [p]);

  const closeModal = useModalsStore((s) => s.closeModal);

  const addTask = useTasksStore((s) => s.addTask);

  const selectItems: MenuItemProps[] = Object.values(ETaskPriority).map(
    (item) => ({
      value: item,
      children: item,
    })
  );

  const initialValues: ITaskFields = {
    title: "",
    text: "",
    due_to_date: new Date(),
    due_to_time: new Date(),
    priority: selectItems[0].value as ETaskPriority,
  };

  const handleSubmit = async (
    values: ITaskFields,
    _formikHelpers: FormikHelpers<ITaskFields>
  ) => {
    try {
      const mappedValues = {
        ...values,
        due_to_date: getDateString(values.due_to_date),
        due_to_time: getTimeString(values.due_to_time),
      };

      const response = await Api.post<ITask>(
        `/rooms/${roomId}/tasks/`,
        mappedValues
      );
      const task = response.data;

      addTask(task);
    } catch (err) {
      console.error(err);
    }

    closeModal(createModalId);
  };

  return (
    <Modal id={createModalId} title="Create Task">
      <Formik<ITaskFields>
        validationSchema={taskSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
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

          <InputField<ITaskFields>
            type="time"
            name="due_to_time"
            label="Due time"
            sx={sxStyle.itemSpacing}
          />

          <InputField<ITaskFields>
            type="select"
            name="priority"
            label="Priority"
            menuItems={selectItems}
            sx={sxStyle.itemSpacing}
          />

          <InputField disabled type="button" name="Create task" />
        </Form>
      </Formik>
    </Modal>
  );
}

const sxStyle = SxStyle.create({
  itemSpacing: {
    mb: 1,
  },
});
