import { THEME } from "@/constants";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material";

type MaterialThemeProviderProps = React.ComponentProps<
  typeof MaterialThemeProvider
>;

interface ThemeProviderProps
  extends Omit<MaterialThemeProviderProps, "theme"> {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <MaterialThemeProvider theme={THEME} {...props}>
      {children}
    </MaterialThemeProvider>
  );
}
