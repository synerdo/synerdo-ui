import { Button, ButtonProps } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";

export interface ButtonFieldProps extends ButtonProps {
  name: string;
}

export function ButtonField<T extends FormikValues>({
  name,
  disabled = false,
  ...props
}: ButtonFieldProps) {
  const { isValid, dirty } = useFormikContext<T>();

  return (
    <Button
      {...props}
      type="submit"
      fullWidth
      disabled={disabled ? !(isValid && dirty) : !isValid}
    >
      {name}
    </Button>
  );
}
