"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function RoomMetaContainer({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.container}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: {},
});
