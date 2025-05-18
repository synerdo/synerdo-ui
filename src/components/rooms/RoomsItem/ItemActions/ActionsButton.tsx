"use client";

import { SxStyle } from "@/classes";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, IconButtonProps } from "@mui/material";

export function ActionsButton({ ...props }: IconButtonProps) {
  return (
    <IconButton {...props}>
      <MoreHorizIcon sx={sxStyle.icon} />
    </IconButton>
  );
}

const sxStyle = SxStyle.create({
  icon: (theme) => ({
    color: "white.100",
    ...theme.applyStyles("dark", {
      color: "black.100",
    }),
  }),
});
