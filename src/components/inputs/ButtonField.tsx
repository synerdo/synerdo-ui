import { Button, ButtonProps } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";

export type TButtonFieldPropsOmit = "fullWidth";

export interface ButtonFieldProps
  extends Omit<ButtonProps, TButtonFieldPropsOmit> {
  name: string;
}

export function ButtonField<T extends FormikValues>({
  name,
  disabled = false,
  ...props
}: ButtonFieldProps) {
  const { handleSubmit, isValid, dirty } = useFormikContext<T>();

  return (
    <Button
      {...props}
      fullWidth
      onClick={() => handleSubmit()}
      disabled={disabled ? !(isValid && dirty) : !isValid}
    >
      {name}
    </Button>
  );
}
