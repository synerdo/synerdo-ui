import { Box, BoxProps } from "@mui/material";

interface HomeContainerProps extends BoxProps {}

export function HomeContainer({ children, ...props }: HomeContainerProps) {
  return <Box {...props}>{children}</Box>;
}
