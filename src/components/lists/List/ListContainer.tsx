"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

interface ListContainerProps extends BoxProps {
  innerProps?: BoxProps;
}

export function ListContainer({
  innerProps,
  children,
  ...props
}: ListContainerProps) {
  return (
    <Box {...props} sx={sxStyle.outer}>
      <Box minWidth={"500px"} {...innerProps} sx={sxStyle.inner}>
        {children}
      </Box>
    </Box>
  );
}

const sxStyle = SxStyle.create({
  outer: {
    display: "block",
    width: "100%",
    overflow: "auto hidden",
  },
  inner: (theme) => ({
    display: "block",
    width: "100%",
    bgcolor: "black.5",
    borderRadius: 2,
    ...theme.applyStyles("dark", {
      bgcolor: "white.10",
    }),
  }),
});
