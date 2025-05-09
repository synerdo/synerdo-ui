import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton, IconButtonProps } from "@mui/material";

interface ItemExpandProps extends IconButtonProps {
  isActive?: boolean;
}

export function ItemExpand({ isActive, ...props }: ItemExpandProps) {
  return (
    <IconButton color="inherit" {...props}>
      {isActive ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </IconButton>
  );
}
