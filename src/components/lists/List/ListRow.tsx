"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function ListRow({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.row}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  row: (theme) => ({
    display: "flex",
    flexDirection: "row",
    borderColor: "black.5",
    ...theme.applyStyles("dark", {
      borderColor: "white.10",
    }),
  }),
});
