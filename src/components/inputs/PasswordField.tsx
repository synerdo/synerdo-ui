import { TextField, TextFieldProps } from "./TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";

export type TPasswordFieldPropsOmit = "type" | "slotProps";

export type PasswordFieldProps = Omit<
  TextFieldProps,
  TPasswordFieldPropsOmit
>;

export function PasswordField({ ...props }: PasswordFieldProps) {
  const [isShownPassword, setIsShownPassword] = useState(false);

  return (
    <TextField
      {...props}
      type={isShownPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setIsShownPassword((show) => !show)}
                onMouseDown={(e) => e.preventDefault()}
                onMouseUp={(e) => e.preventDefault()}
              >
                {isShownPassword ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
