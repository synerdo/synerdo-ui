"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { Modal } from "@/components/modals";
import { IRoom } from "@/interfaces";
import { IRoomFields, roomSchema } from "@/schemas";
import { useModalsStore, useRoomsStore } from "@/stores";
import { Form, Formik, FormikHelpers } from "formik";

export const editModalId = "edit-room";

export interface IEditModalData {
  roomId: number;
  roomName: string;
}

export function EditModal() {
  const modalData = useModalsStore((state) =>
    state.getModalData<IEditModalData>(editModalId)
  );
  const closeModal = useModalsStore((s) => s.closeModal);

  const updateRoom = useRoomsStore((s) => s.updateRoom);

  const initialValues = {
    name: modalData?.roomName || "",
  };

  const handleSubmit = async (
    values: IRoomFields,
    _formikHelpers: FormikHelpers<IRoomFields>
  ) => {
    try {
      const roomId = modalData?.roomId;
      if (!roomId) {
        throw new Error("Room id is not provided.");
      }

      const response = await Api.patch<IRoom>(`/rooms/${roomId}/`, values);
      const room = response.data;

      updateRoom(room);
    } catch (err) {
      console.error(err);
    }

    closeModal(editModalId);
  };

  return (
    <Modal id={editModalId} title="Edit Room">
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

          <InputField disabled type="button" name="Edit room" />
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
