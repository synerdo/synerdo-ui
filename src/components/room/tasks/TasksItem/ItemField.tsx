"use client";

import { SxStyle } from "@/classes";
import { Typography, TypographyProps } from "@mui/material";

interface ItemFieldProps extends TypographyProps {
  title: string;
}

export function ItemField({ title, children, ...props }: ItemFieldProps) {
  return children ? (
    <Typography {...props}>
      <span style={sxStyle.title}>{title}</span> {children}
    </Typography>
  ) : null;
}

const sxStyle = SxStyle.create({
  section: {
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
    },
  },
  title: {
    fontWeight: 600,
  },
});
