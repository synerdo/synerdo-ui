import { SxStyle } from "@/classes";
import { Grid2 as Grid, Grid2Props as GridProps } from "@mui/material";

interface LayoutGridProps extends GridProps {}

export function LayoutGrid({ children, ...props }: LayoutGridProps) {
  return (
    <Grid {...props} container spacing={3} sx={sxStyle.grid}>
      {children}
    </Grid>
  );
}

const sxStyle = SxStyle.create({
  grid: {
    height: "100%",
    padding: 3,
  },
});
