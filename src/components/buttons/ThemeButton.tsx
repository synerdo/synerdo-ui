"use client";

import { TMode } from "@/types";
import { toFirstCapital } from "@/utils";
import ContrastIcon from "@mui/icons-material/Contrast";
import {
  Box,
  BoxProps,
  IconButton,
  Menu,
  MenuItem,
  useColorScheme,
} from "@mui/material";
import { useState } from "react";

export function ThemeButton({ sx, ...props }: BoxProps) {
  const { mode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const menuItems = ["system", "light", "dark"] as const;

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (mode?: TMode) => {
    setAnchorEl(null);

    if (mode) setMode(mode);
  };

  return (
    <Box sx={sx} {...props}>
      <IconButton onClick={handleOpen}>
        <ContrastIcon />
      </IconButton>

      <Menu
        open={open}
        onClose={() => handleClose()}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item}
            onClick={() => handleClose(item)}
            selected={mode === item ? true : false}
          >
            {toFirstCapital(item)}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
