import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function DrawerHeader({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.header}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  header: (theme) => ({
    px: "20px",
    minHeight: "80px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    borderBottom: "1px solid",
    borderColor: "grey.300",
    ...theme.applyStyles("dark", {
      borderColor: "grey.800",
    }),
  }),
});
