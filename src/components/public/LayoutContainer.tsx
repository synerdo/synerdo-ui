import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

interface LayoutContainerProps extends BoxProps {}

export function LayoutContainer({
  children,
  ...props
}: LayoutContainerProps) {
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
