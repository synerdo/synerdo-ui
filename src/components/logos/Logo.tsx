import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";
import Image from "next/image";

interface BannerProps extends BoxProps {
  color?: "light" | "dark";
}

export function Logo({ color = "light", ...props }: BannerProps) {
  return (
    <Box {...props}>
      <Image
        src={`/logo${color === "dark" ? "-dark" : ""}.svg`}
        alt="Synerdo banner"
        width={585}
        height={81}
        style={sxStyle.image}
      />
    </Box>
  );
}

const sxStyle = SxStyle.create({
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
