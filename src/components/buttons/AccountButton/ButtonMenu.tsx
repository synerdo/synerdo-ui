"use client";

import { Menu, MenuProps } from "@mui/material";

export function ButtonMenu({ children, ...props }: MenuProps) {
  return (
    <Menu
      {...props}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </Menu>
  );
}
