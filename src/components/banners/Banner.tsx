import { SxStyle } from "@/classes";
import { Box, BoxProps } from "@mui/material";
import Image from "next/image";

interface BannerProps extends BoxProps {}

export function Banner({ sx, ...props }: BannerProps) {
  return (
    <Box sx={{ ...sxStyle.banner, ...sx }} {...props}>
      <Image
        src="/public/banner.webp"
        alt="Synerdo banner"
        width={800}
        height={800}
        quality={100}
        priority={true}
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

const sxStyle = SxStyle.create({
  banner: {
    position: "relative",
  },
});
