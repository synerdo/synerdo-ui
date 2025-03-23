import { poppins, montserrat } from "@/constants";
import { Box, BoxProps } from "@mui/material";

interface HtmlProps extends BoxProps<"html"> {}

export function Html({ children, ...props }: HtmlProps) {
  return (
    <Box
      {...props}
      component="html"
      sx={{ width: "100%", height: "100%" }}
      className={`${poppins.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      {children}
    </Box>
  );
}
