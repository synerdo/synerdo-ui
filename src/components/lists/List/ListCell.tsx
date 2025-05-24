import { Box, BoxProps } from "@mui/material";

interface ListCellProps extends BoxProps {
  len: number;
  text: React.ReactNode;
  isBold?: boolean;
}

export function ListCell({ len, text, isBold, ...props }: ListCellProps) {
  return (
    <Box
      width={`${len}%`}
      fontWeight={isBold ? "bold" : "normal"}
      px={2.5}
      py={1.5}
      {...props}
    >
      {text}
    </Box>
  );
}
