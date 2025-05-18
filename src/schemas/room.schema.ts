import * as Yup from "yup";

export interface IRoomFields {
  name: string;
}

export const roomSchema: Yup.ObjectSchema<IRoomFields> =
  Yup.object().shape({
    name: Yup.string()
      .min(2, "Room name should be 2-150 characters")
      .max(150, "Room name should be 2-150 characters")
      .required("Room name is required"),
  });
