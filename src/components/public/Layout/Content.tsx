import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

interface ContentProps extends BoxProps {}

export function Content({ children, ...props }: ContentProps) {
  return (
    <Box {...props} sx={sxStyle.content}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  content: {
    maxWidth: "550px",
    width: "100%",
  },
});
