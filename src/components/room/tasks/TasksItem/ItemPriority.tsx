import { SxStyle } from "@/classes";
import { TTaskPriority } from "@/types";
import { Box, BoxProps } from "@mui/material";
import { useMemo } from "react";

interface ItemPriorityProps extends BoxProps {
  priority?: TTaskPriority | null;
}

export function ItemPriority({ priority, ...props }: ItemPriorityProps) {
  const prioritySx = useMemo(
    () => ({
      bgcolor:
        priority === "L"
          ? "green.100"
          : priority === "M"
            ? "orange.100"
            : "red.100",
    }),
    [priority]
  );

  return priority ? (
    <Box {...props} sx={{ ...sxStyle.priority, ...prioritySx }} />
  ) : null;
}

const sxStyle = SxStyle.create({
  priority: {
    mr: 1,
    minWidth: "10px",
    aspectRatio: 1,
    borderRadius: "100%",
  },
});
