import { THEME } from "@/constants";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

type MuiThemeProviderProps = React.ComponentProps<typeof MuiThemeProvider>;

interface ThemeProviderProps extends MuiThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <MuiThemeProvider {...props} theme={THEME}>
      {children}
    </MuiThemeProvider>
  );
}
