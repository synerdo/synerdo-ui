import { SX_STYLE } from "@/constants";
import { Box, BoxProps } from "@mui/material";
import Image from "next/image";

interface BannerProps extends BoxProps {}

export function Banner({ sx, ...props }: BannerProps) {
  return (
    <Box sx={{ ...SX_STYLE.relative, ...sx }} {...props}>
      <Image
        src="/public/banner.webp"
        alt="Synerdo banner"
        width={800}
        height={800}
        quality={100}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
