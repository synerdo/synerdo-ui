"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

interface LayoutOverlayProps extends BoxProps {}

export function LayoutOverlay({ children, ...props }: LayoutOverlayProps) {
  return (
    <Box {...props} sx={sxStyle.overlay}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  overlay: (theme) => ({
    position: "absolute",
    zIndex: 1,
    inset: 0,
    width: "100%",
    height: "100%",
    bgcolor: {
      xs: "transparent.white.800",
      md: "transparent.black.300",
    },
    ...theme.applyStyles("dark", {
      bgcolor: {
        xs: "transparent.black.800",
        md: "transparent.black.300",
      },
    }),
  }),
});
