import { SxStyle } from "@/classes";
import { Typography, TypographyProps, useTheme } from "@mui/material";
import { useMemo } from "react";

interface ItemDateProps extends TypographyProps {
  isExpired?: boolean;
}

export function ItemDate({
  isExpired,
  children,
  ...props
}: ItemDateProps) {
  const theme = useTheme();

  const expiredSx = useMemo(
    () => ({
      color: isExpired
        ? "red.100"
        : theme.palette.mode === "dark"
          ? "white.100"
          : "black.100",
    }),
    [isExpired, theme.palette.mode]
  );

  return (
    <Typography {...props} sx={{ ...sxStyle.date, ...expiredSx }}>
      {children}
    </Typography>
  );
}

const sxStyle = SxStyle.create({
  date: {
    mr: {
      xs: 0.5,
      sm: 1,
    },
    fontSize: "0.875rem",
    whiteSpace: "nowrap",
  },
});
