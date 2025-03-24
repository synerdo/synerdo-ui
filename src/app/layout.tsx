import { Html, Body } from "@/components/app";
import { CacheProvider, ThemeProvider } from "@/components/providers";
import { CssBaseline } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synerdo",
  description: "Synerdo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CacheProvider>
      <ThemeProvider>
        <Html>
          <Body>
            <CssBaseline />
            <InitColorSchemeScript attribute="class" />
            {children}
          </Body>
        </Html>
      </ThemeProvider>
    </CacheProvider>
  );
}
