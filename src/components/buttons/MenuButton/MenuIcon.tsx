import { SxStyle } from "@/classes";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, IconButtonProps } from "@mui/material";

interface MenuIcon extends IconButtonProps {
  iconSize?: "inherit" | "large" | "medium" | "small";
}

export function MenuIcon({ iconSize, ...props }: MenuIcon) {
  return (
    <IconButton sx={sxStyle.button} {...props}>
      <MoreHorizIcon fontSize={iconSize} sx={sxStyle.icon} />
    </IconButton>
  );
}

const sxStyle = SxStyle.create({
  button: {
    color: "inherit",
  },
  icon: {
    color: "inherit",
  },
});
