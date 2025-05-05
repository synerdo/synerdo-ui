"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { Modal } from "@/components/modals";
import { IRoom } from "@/interfaces";
import { IRoomFields, roomSchema } from "@/schemas";
import { useModalsStore, useRoomsStore } from "@/stores";
import { Form, Formik, FormikHelpers } from "formik";

export const createModalId = "create-room";

export function CreateModal() {
  const closeModal = useModalsStore((s) => s.closeModal);

  const addRoom = useRoomsStore((s) => s.addRoom);

  const initialValues = {
    name: "",
  };

  const handleSubmit = async (
    values: IRoomFields,
    _formikHelpers: FormikHelpers<IRoomFields>
  ) => {
    try {
      const response = await Api.post<IRoom>("/rooms/", values);
      const room = response.data;

      addRoom(room);
    } catch (err) {
      console.error(err);
    }

    closeModal(createModalId);
  };

  return (
    <Modal id={createModalId} title="Create Room">
      <Formik<IRoomFields>
        validationSchema={roomSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField<IRoomFields>
            type="text"
            name="name"
            label="Room name"
            sx={sxStyle.itemSpacing}
          />

          <InputField disabled type="button" name="Create room" />
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
