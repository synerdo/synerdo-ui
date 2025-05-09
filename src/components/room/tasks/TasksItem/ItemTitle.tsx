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
    fontWeight: 500,
  },
});
