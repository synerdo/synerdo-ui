import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function Body({ children, ...props }: BoxProps<"body">) {
  return (
    <Box {...props} component="body" sx={sxStyle.body}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  body: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    pt: "80px",
  },
});
