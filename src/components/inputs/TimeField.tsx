import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  TimePicker,
  TimePickerProps,
} from "@mui/x-date-pickers/TimePicker";
import { FormikValues, useFormikContext } from "formik";

export interface TimeFieldProps extends TimePickerProps {
  name: string;
}

export function TimeField<T extends FormikValues>({
  name,
  ...props
}: TimeFieldProps) {
  const { setFieldValue, setFieldTouched, values, touched, errors } =
    useFormikContext<T>();

  const isError = touched[name] && errors[name];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
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
