import { Button, ButtonProps } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";

export interface ButtonFieldProps extends ButtonProps {
  name: string;
  isLoading?: boolean;
}

export function ButtonField<T extends FormikValues>({
  name,
  isLoading = false,
  disabled = false,
  ...props
}: ButtonFieldProps) {
  const { isValid, dirty } = useFormikContext<T>();

  return (
    <Button
      {...props}
      type="submit"
      fullWidth
      disabled={(disabled ? !(isValid && dirty) : !isValid) || isLoading}
    >
      {name}
    </Button>
  );
}
