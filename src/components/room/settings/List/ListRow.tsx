import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

export function ListRow({ children, ...props }: BoxProps) {
  return (
    <Box {...props} sx={sxStyle.row}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  row: {
    display: "flex",
    flexDirection: "row",
    borderColor: "white.10",
  },
});
