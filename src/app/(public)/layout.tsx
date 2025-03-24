import { SxStyle } from "@/classes";
import { Banner } from "@/components/banners";
import { ThemeButton } from "@/components/buttons";
import { Logo } from "@/components/logos";
import {
  LayoutContainer,
  LayoutGrid,
  LayoutColumn,
  PageContainer,
  PageContent,
  LayoutOverlay,
} from "@/components/public";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutContainer>
      <LayoutGrid>
        <LayoutColumn sx={sxStyle.bannerColumn}>
          <Banner sx={sxStyle.banner} />

          <LayoutOverlay />

          <Logo sx={sxStyle.logo} />
        </LayoutColumn>

        <LayoutColumn>
          <ThemeButton sx={sxStyle.themeButton} />

          <PageContainer>
            <PageContent>{children}</PageContent>
          </PageContainer>
        </LayoutColumn>
      </LayoutGrid>
    </LayoutContainer>
  );
}

const sxStyle = SxStyle.create({
  bannerColumn: {
    position: {
      xs: "absolute",
      md: "relative",
    },
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  logo: {
    display: {
      xs: "none",
      md: "block",
    },
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
