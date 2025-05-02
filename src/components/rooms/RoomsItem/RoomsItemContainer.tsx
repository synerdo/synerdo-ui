"use client";

import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";

interface RoomsItemContainer extends BoxProps {
  hexColors: [string, string];
}

export function RoomsItemContainer({
  hexColors,
  children,
  sx,
  ...props
}: RoomsItemContainer) {
  const [color1, color2] = hexColors;

  const background = `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`;

  return (
    <Box
      {...props}
      sx={[sxStyle.container, () => ({ ...sx }), () => ({ background })]}
    >
      {children}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: (theme) => ({
    width: {
      xs: "100%",
      sm: "calc((100% - 20px) / 2)",
      md: "calc((100% - 20px * 2) / 3)",
    },
    borderRadius: 2,
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: "translateY(0)",
    boxShadow: `0px 0px 0px ${theme.palette.black[40]}`,
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: `0px 3px 10px ${theme.palette.black[40]}`,
    },
    ...theme.applyStyles("dark", {
      boxShadow: `0px 0px 0px ${theme.palette.white[40]}`,
      "&:hover": {
        boxShadow: `0px 3px 10px ${theme.palette.white[40]}`,
      },
    }),
  }),
});
