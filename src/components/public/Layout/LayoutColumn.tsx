import { SxStyle } from "@/classes";
import { Grid2 as Grid, Grid2Props as GridProps } from "@mui/material";

interface LayoutColumnProps extends GridProps {}

export function LayoutColumn({ children, ...props }: LayoutColumnProps) {
  return (
    <Grid {...props} size={6} sx={sxStyle.column}>
      {children}
    </Grid>
  );
}

const sxStyle = SxStyle.create({
  column: {
    position: "relative",
    height: "100%",
    borderRadius: 3,
    overflow: "hidden",
  },
});
