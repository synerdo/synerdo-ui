import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function Layout({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.container}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});
