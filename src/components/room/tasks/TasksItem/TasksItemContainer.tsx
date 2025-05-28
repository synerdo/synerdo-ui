import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";
import { useMemo } from "react";

interface TasksItemContainerProps extends BoxProps {
  isDone?: boolean;
}

export function TasksItemContainer({
  isDone,
  children,
  ...props
}: TasksItemContainerProps) {
  const doneSx = useMemo(
    () => ({
      opacity: isDone ? 0.4 : 1,
    }),
    [isDone]
  );

  return (
    <Box {...props} sx={{ ...sxStyle.container, ...doneSx }}>
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: {},
});
