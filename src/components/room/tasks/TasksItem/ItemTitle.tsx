import { SxStyle } from "@/classes";
import { Typography, TypographyProps } from "@mui/material";

export function ItemTitle({ children, ...props }: TypographyProps) {
  return (
    <Typography {...props} sx={sxStyle.title}>
      {children}
    </Typography>
  );
}

const sxStyle = SxStyle.create({
  title: {
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
    },
    mr: 1,
    fontWeight: 500,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});
