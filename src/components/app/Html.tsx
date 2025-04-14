import { SxStyle } from "@/classes";
import { poppins, montserrat } from "@/constants";
import { Box, BoxProps } from "@mui/material";

export function Html({ children, ...props }: BoxProps<"html">) {
  return (
    <Box
      {...props}
      component="html"
      sx={sxStyle.html}
      className={`${poppins.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  html: {
    width: "100%",
    height: "100%",
  },
});
