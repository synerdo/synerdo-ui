import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function RoomsListContainer({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.container}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
  },
});
