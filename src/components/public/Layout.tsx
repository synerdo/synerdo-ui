import { Banner } from "../banners";
import { ThemeButton } from "../buttons";
import { Logo } from "../logos";
import { SxStyle } from "@/classes";
import { SX_STYLE } from "@/constants";
import { Box, Grid2 as Grid } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={SX_STYLE.flex}>
      <Grid container spacing={3} sx={sxStyle.grid}>
        <Grid size={6} sx={sxStyle.gridColumn}>
          <Banner sx={sxStyle.banner} />

          <Box sx={sxStyle.overlay} />

          <Logo sx={sxStyle.logo} />
        </Grid>

        <Grid size={6} sx={sxStyle.gridColumn}>
          <ThemeButton sx={sxStyle.themeButton} />

          <Box sx={sxStyle.container}>
            <Box sx={sxStyle.content}>{children}</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const sxStyle = SxStyle.create({
  grid: {
    height: "100%",
    padding: 3,
  },
  gridColumn: {
    position: "relative",
    height: "100%",
    borderRadius: 3,
    overflow: "hidden",
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    zIndex: 1,
    inset: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
  },
  logo: {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "auto",
  },
  themeButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: "550px",
    width: "100%",
  },
});
