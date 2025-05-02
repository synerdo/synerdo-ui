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
      xs: "white.80",
      md: "black.30",
    },
    ...theme.applyStyles("dark", {
      bgcolor: {
        xs: "black.80",
        md: "black.30",
      },
    }),
  }),
});
