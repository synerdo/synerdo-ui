import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function RowBox({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.row}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  row: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
});
