import { SxStyle } from "@/classes";
import { Grid2 as Grid, Grid2Props as GridProps } from "@mui/material";

interface LayoutColumnProps extends GridProps {}

export function LayoutColumn({
  children,
  sx,
  ...props
}: LayoutColumnProps) {
  return (
    <Grid
      {...props}
      size={{ xs: 12, md: 6 }}
      sx={{ ...sxStyle.column, ...sx }}
    >
      {children}
    </Grid>
  );
}

const sxStyle = SxStyle.create({
  column: {
    position: "relative",
    borderRadius: {
      xs: 0,
      md: 3,
    },
    overflow: "hidden",
  },
});
