import { ButtonField, ButtonFieldProps } from "./ButtonField";
import { DateField, DateFieldProps } from "./DateField";
import { PasswordField, PasswordFieldProps } from "./PasswordField";
import { SelectField, SelectFieldProps } from "./SelectField";
import { TextField, TextFieldProps } from "./TextField";
import { TextareaField, TextareaFieldProps } from "./TextareaField";
import { TimeField, TimeFieldProps } from "./TimeField";

export type TInputType =
  | "button"
  | "date"
  | "password"
  | "select"
  | "textarea"
  | "text"
  | "time";

export interface InputFieldTypeMap {
  button: ButtonFieldProps;
  date: DateFieldProps;
  password: PasswordFieldProps;
  select: SelectFieldProps;
  textarea: TextareaFieldProps;
  text: TextFieldProps;
  time: TimeFieldProps;
}

export type InputFieldProps<T> = InputFieldTypeMap[TInputType] & {
  type: TInputType;
  name: Extract<keyof T, string>;
};

export function InputField<T>({ type, ...props }: InputFieldProps<T>) {
  return type === "button" ? (
    <ButtonField {...(props as ButtonFieldProps)} />
  ) : type === "date" ? (
    <DateField {...(props as DateFieldProps)} />
  ) : type === "password" ? (
    <PasswordField {...(props as PasswordFieldProps)} />
  ) : type === "select" ? (
    <SelectField {...(props as SelectFieldProps)} />
  ) : type === "textarea" ? (
    <TextareaField {...(props as TextareaFieldProps)} />
  ) : type === "text" ? (
    <TextField {...(props as TextFieldProps)} />
  ) : type === "time" ? (
    <TimeField {...(props as TimeFieldProps)} />
  ) : null;
}
