import * as Yup from "yup";

export interface IJoinFields {
  access_code: string;
}

export const joinSchema: Yup.ObjectSchema<IJoinFields> =
  Yup.object().shape({
    access_code: Yup.string().required("Access code is required"),
  });
