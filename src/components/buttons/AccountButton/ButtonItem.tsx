import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuItemProps,
} from "@mui/material";

export interface ButtonItemProps extends MenuItemProps {
  icon: React.ReactNode;
  text: string;
}

export function ButtonItem({ icon, text, ...props }: ButtonItemProps) {
  return (
    <MenuItem {...props}>
      <ListItemIcon>{icon}</ListItemIcon>

      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
}
