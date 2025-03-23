import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

interface PageContentProps extends BoxProps {}

export function PageContent({ children, ...props }: PageContentProps) {
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
