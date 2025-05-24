import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  MenuItemProps,
  Select,
  SelectProps,
} from "@mui/material";
import { FormikValues, useFormikContext } from "formik";

export type SelectFieldProps = SelectProps & {
  name: string;
  menuItems?: MenuItemProps[];
};

export function SelectField<T extends FormikValues>({
  name,
  label,
  menuItems = [],
  sx,
  ...props
}: SelectFieldProps) {
  const { handleChange, handleBlur, values, touched, errors } =
    useFormikContext<T>();

  const isError = touched[name] && errors[name];

  return (
    <FormControl fullWidth sx={sx}>
      <InputLabel error={!!isError}>{label}</InputLabel>

      <Select
        {...props}
        fullWidth
        label={label}
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!isError}
      >
        {menuItems.map(({ children, value, ...props }) => (
          <MenuItem {...props} key={`${value}`} value={value}>
            {children}
          </MenuItem>
        ))}
      </Select>

      <FormHelperText
        error={!!isError}
      >{` ${isError ? String(errors[name]) : ""}`}</FormHelperText>
    </FormControl>
  );
}
