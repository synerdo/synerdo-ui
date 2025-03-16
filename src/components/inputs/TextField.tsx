import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { FormikValues, useFormikContext } from "formik";

export type TTextFieldPropsOmit =
  | "value"
  | "onChange"
  | "onBlur"
  | "error"
  | "helperText";

export type TextFieldProps = Omit<
  MuiTextFieldProps,
  TTextFieldPropsOmit
> & {
  name: string;
};

export function TextField<T extends FormikValues>({
  name,
  ...props
}: TextFieldProps) {
  const { handleChange, handleBlur, values, touched, errors } =
    useFormikContext<T>();

  const isError = touched[name] && errors[name];

  return (
    <MuiTextField
      {...props}
      fullWidth
      name={name}
      value={String(values[name])}
      onChange={handleChange}
      onBlur={handleBlur}
      error={isError ? true : false}
      helperText={` ${isError ? String(errors[name]) : ""}`}
    />
  );
}
