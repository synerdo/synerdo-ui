"use client";

import { Logo } from "../logos";
import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

interface HeaderLogoProps extends BoxProps {
  href: string;
}

export function HeaderLogo({ href, sx, ...props }: HeaderLogoProps) {
  const theme = useTheme();

  const logoColor = theme.palette.mode === "dark" ? "light" : "dark";

  return (
    <Box {...props} sx={{ ...sxStyle.logo, ...sx }}>
      <Link href={href} style={sxStyle.link}>
        <Logo color={logoColor} />
      </Link>
    </Box>
  );
}

const sxStyle = SxStyle.create({
  logo: {
    width: "150px",
    height: "auto",
  },
  link: {
    display: "block",
    width: "100%",
    height: "100%",
  },
});
