"use client";

import { SxStyle } from "@/classes";
import { useDrawersStore } from "@/stores";
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface DrawerProps extends Omit<MuiDrawerProps, "open"> {
  id: string;
}

export function Drawer({ id, children, ...props }: DrawerProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const isOpen = useDrawersStore((state) => state.getIsDrawerOpen(id));
  const closeDrawer = useDrawersStore((state) => state.closeDrawer);

  const drawerVariant = isDesktop ? "persistent" : "temporary";

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
      paddingTop: {
        xs: "20px",
        md: "100px",
      },
    },
  },
});
