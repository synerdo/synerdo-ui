import { Content } from "./Content";
import { ContentContainer } from "./ContentContainer";
import { LayoutColumn } from "./LayoutColumn";
import { LayoutContainer } from "./LayoutContainer";
import { LayoutGrid } from "./LayoutGrid";
import { SxStyle } from "@/classes";
import { Banner } from "@/components/banners";
import { ThemeButton } from "@/components/buttons";
import { Logo } from "@/components/logos";
import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <LayoutGrid>
        <LayoutColumn>
          <Banner sx={sxStyle.banner} />

          <Box sx={sxStyle.overlay} />

          <Logo sx={sxStyle.logo} />
        </LayoutColumn>

        <LayoutColumn>
          <ThemeButton sx={sxStyle.themeButton} />

          <ContentContainer>
            <Content>{children}</Content>
          </ContentContainer>
        </LayoutColumn>
      </LayoutGrid>
    </LayoutContainer>
  );
}

const sxStyle = SxStyle.create({
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
});
