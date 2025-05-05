"use client";

import { SxStyle } from "@/classes";
import { useDrawersStore } from "@/stores";
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMemo } from "react";

interface DrawerProps extends Omit<MuiDrawerProps, "open"> {
  id: string;
}

export function Drawer({ id, children, ...props }: DrawerProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const isOpen = useDrawersStore((s) => s.getIsDrawerOpen(id));
  const closeDrawer = useDrawersStore((s) => s.closeDrawer);

  const drawerVariant = useMemo(
    () => (isDesktop ? "persistent" : "temporary"),
    [isDesktop]
  );

  const handleClose = () => {
    closeDrawer(id);
  };

  return (
    <MuiDrawer
      {...props}
      open={isOpen}
      onClose={handleClose}
      variant={drawerVariant}
      sx={sxStyle.drawer}
    >
      {children}
    </MuiDrawer>
  );
}

const sxStyle = SxStyle.create({
  drawer: {
    maxWidth: "300px",
    width: "100%",
    "& .MuiDrawer-paper": {
      zIndex: 5,
      maxWidth: "300px",
      width: "100%",
      pt: {
        md: "80px",
      },
      display: "flex",
      flexDirection: "column",
    },
  },
});
