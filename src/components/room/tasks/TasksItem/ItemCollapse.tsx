"use client";

import { SxStyle } from "@/classes";
import { Box, Collapse, CollapseProps } from "@mui/material";
import { useMemo } from "react";

export function ItemCollapse({
  children,
  in: isExpanded,
  ...props
}: CollapseProps) {
  const expandedSx = useMemo(
    () => ({
      borderRadius: "8px",
      borderTopLeftRadius: isExpanded ? 0 : "8px",
      borderTopRightRadius: isExpanded ? 0 : "8px",
    }),
    [isExpanded]
  );

  return (
    <Collapse
      {...props}
      in={isExpanded}
      timeout="auto"
      unmountOnExit
      sx={sxStyle.collapse}
    >
      <Box sx={[sxStyle.inner, () => ({ ...expandedSx })]}>{children}</Box>
    </Collapse>
  );
}

const sxStyle = SxStyle.create({
  collapse: {
    width: "100%",
  },
  inner: (theme) => ({
    px: 2,
    py: 2,
    width: "100%",
    borderRadius: 2,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    transition: "border-radius 0.2s ease",
    bgcolor: "black.5",
    boxShadow: `inset 0 1px 1px ${theme.palette.black[5]}`,
    ...theme.applyStyles("dark", {
      bgcolor: "white.10",
      boxShadow: `inset 0 1px 1px ${theme.palette.black[20]}`,
    }),
  }),
});
