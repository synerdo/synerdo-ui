import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function ItemLabel({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.label}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  label: (theme) => ({
    width: "100%",
    bgcolor: "black.20",
    color: "white.100",
    fontWeight: "500",
    pl: 2,
    pr: 2,
    mt: "auto",
    minHeight: "60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...theme.applyStyles("dark", {
      bgcolor: "white.20",
      color: "black.100",
    }),
  }),
});
