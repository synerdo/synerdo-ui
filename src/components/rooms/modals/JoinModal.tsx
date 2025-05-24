"use client";

import { Api } from "@/api";
import { SxStyle } from "@/classes";
import { InputField } from "@/components/inputs";
import { Modal } from "@/components/modals";
import { IJoin, IRoom } from "@/interfaces";
import { IJoinFields, joinSchema } from "@/schemas";
import { useModalsStore, useRoomsStore } from "@/stores";
import { Form, Formik, FormikHelpers } from "formik";

export const joinModalId = "join-room";

export function JoinModal() {
  const closeModal = useModalsStore((s) => s.closeModal);

  const addRoom = useRoomsStore((s) => s.addRoom);

  const initialValues = {
    access_code: "",
  };

  const handleSubmit = async (
    values: IJoinFields,
    _formikHelpers: FormikHelpers<IJoinFields>
  ) => {
    try {
      const joinResponse = await Api.post<IJoin>("/rooms/join/", values);
      const joinData = joinResponse.data;
      const roomId = joinData.room;

      const roomResponse = await Api.get<IRoom>(`/rooms/${roomId}/`);
      const room = roomResponse.data;

      addRoom(room);
    } catch (err) {
      console.error(err);
    }

    closeModal(joinModalId);
  };

  return (
    <Modal id={joinModalId} title="Join Room">
      <Formik<IJoinFields>
        validationSchema={joinSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField<IJoinFields>
            type="text"
            name="access_code"
            label="Access code"
            sx={sxStyle.itemSpacing}
          />

          <InputField disabled type="button" name="Join room" />
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
