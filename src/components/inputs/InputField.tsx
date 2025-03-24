import { ButtonField, ButtonFieldProps } from "./ButtonField";
import { PasswordField, PasswordFieldProps } from "./PasswordField";
import { TextField, TextFieldProps } from "./TextField";

export type TInputType = "text" | "password" | "button";

export interface InputFieldTypeMap {
  text: TextFieldProps;
  password: PasswordFieldProps;
  button: ButtonFieldProps;
}

export type InputFieldProps<T> = InputFieldTypeMap[TInputType] & {
  type: TInputType;
  name: Extract<keyof T, string>;
};

export function InputField<T>({ type, ...props }: InputFieldProps<T>) {
  return type === "text" ? (
    <TextField {...(props as TextFieldProps)} />
  ) : type === "password" ? (
    <PasswordField {...(props as PasswordFieldProps)} />
  ) : type === "button" ? (
    <ButtonField {...(props as ButtonFieldProps)} />
  ) : null;
}
