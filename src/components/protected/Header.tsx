"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function Header({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.header}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  header: (theme) => ({
    position: "fixed",
    zIndex: 10,
    top: 0,
    right: 0,
    left: 0,
    px: {
      xs: `${20}px`,
      md: `${32}px`,
    },
    minHeight: "80px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    borderBottom: "1px solid",
    backgroundColor: "white.100",
    borderColor: "grey.300",
    ...theme.applyStyles("dark", {
      backgroundColor: "background.default",
      borderColor: "grey.800",
    }),
  }),
});
