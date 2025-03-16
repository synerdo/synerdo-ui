import { SxStyle } from "@/classes";
import { CacheProvider, ThemeProvider } from "@/components/providers";
import { poppins, montserrat } from "@/constants";
import { CssBaseline, Box } from "@mui/material";
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
        <CssBaseline />
        <Box
          component="html"
          sx={sxStyle.html}
          className={`${poppins.variable} ${montserrat.variable}`}
          suppressHydrationWarning
        >
          <Box component="body" sx={sxStyle.body}>
            <InitColorSchemeScript attribute="class" />
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

const sxStyle = SxStyle.create({
  html: {
    width: "100%",
    height: "100%",
  },
  body: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
});
