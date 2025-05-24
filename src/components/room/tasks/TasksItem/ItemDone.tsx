"use client";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton, IconButtonProps } from "@mui/material";

interface ItemDoneProps extends IconButtonProps {
  isDone?: boolean;
  iconSize?: "inherit" | "large" | "medium" | "small";
}

export function ItemDone({ isDone, iconSize, ...props }: ItemDoneProps) {
  return (
    <IconButton {...props} color="inherit">
      {isDone ? (
        <CheckBoxIcon fontSize={iconSize} />
      ) : (
        <CheckBoxOutlineBlankIcon fontSize={iconSize} />
      )}
    </IconButton>
  );
}
