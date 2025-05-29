"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { Modal } from "@/components/modals";
import { ITask } from "@/interfaces";
import { ITaskFields, taskSchema } from "@/schemas";
import { useModalsStore, useTasksStore } from "@/stores";
import { ETaskPriority } from "@/types";
import { getDateStr, getTimeStr } from "@/utils";
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

  const selectItems: MenuItemProps[] = Object.entries(ETaskPriority).map(
    ([label, value]) => ({
      children: label,
      value: value,
    })
  );

  const initialValues: ITaskFields = {
    title: "",
    text: null,
    due_to_date: null,
    due_to_time: null,
    priority: ETaskPriority.None,
  };

  const handleSubmit = async (
    values: ITaskFields,
    _formikHelpers: FormikHelpers<ITaskFields>
  ) => {
    try {
      const mappedValues = {
        ...values,
        text: values.text && values.text.trim() ? values.text : null,
        due_to_date: values.due_to_date
          ? getDateStr(values.due_to_date)
          : null,
        due_to_time: values.due_to_time
          ? getTimeStr(values.due_to_time)
          : null,
        priority: values.priority !== "null" ? values.priority : null,
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

            <InputField disabled type="button" name="Create task" />
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
