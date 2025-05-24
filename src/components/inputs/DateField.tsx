import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  DatePicker,
  DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { FormikValues, useFormikContext } from "formik";

export interface DateFieldProps extends DatePickerProps {
  name: string;
}

export function DateField<T extends FormikValues>({
  name,
  ...props
}: DateFieldProps) {
  const { setFieldValue, setFieldTouched, values, touched, errors } =
    useFormikContext<T>();

  const isError = touched[name] && errors[name];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...props}
        name={name}
        value={values[name]}
        onChange={(value) => setFieldValue(name, value, true)}
        slotProps={{
          textField: {
            fullWidth: true,
            onBlur: () => setFieldTouched(name, true, true),
            error: !!isError,
            helperText: ` ${isError ? String(errors[name]) : ""}`,
          },
        }}
      />
    </LocalizationProvider>
  );
}
