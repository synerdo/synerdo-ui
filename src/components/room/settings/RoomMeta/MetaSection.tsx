"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps, Typography } from "@mui/material";

interface MetaSectionProps extends BoxProps {
  title: string;
}

export function MetaSection({
  title,
  children,
  ...props
}: MetaSectionProps) {
  return (
    <Box {...props} sx={sxStyle.container}>
      <Typography variant="subtitle1" mb={0.5}>
        {title}
      </Typography>

      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: {
    mb: 2,
  },
});
