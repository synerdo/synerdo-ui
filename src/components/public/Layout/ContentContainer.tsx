import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

interface ContentContainerProps extends BoxProps {}

export function ContentContainer({
  children,
  ...props
}: ContentContainerProps) {
  return (
    <Box {...props} sx={sxStyle.container}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
