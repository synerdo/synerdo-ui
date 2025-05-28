import { TextField, TextFieldProps } from "./TextField";

export type TextareaFieldProps = TextFieldProps;

export function TextareaField({ ...props }: TextareaFieldProps) {
  return <TextField {...props} multiline rows={2} />;
}
