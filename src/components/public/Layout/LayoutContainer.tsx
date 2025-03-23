import { SX_STYLE } from "@/constants";
import { Box, BoxProps } from "@mui/material";

interface LayoutContainerProps extends BoxProps {}

export function LayoutContainer({
  children,
  ...props
}: LayoutContainerProps) {
  return (
    <Box {...props} sx={SX_STYLE.flex}>
      {children}
    </Box>
  );
}
