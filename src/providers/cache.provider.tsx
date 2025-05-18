import {
  AppRouterCacheProvider,
  AppRouterCacheProviderProps,
} from "@mui/material-nextjs/v15-appRouter";

interface CacheProviderProps extends AppRouterCacheProviderProps {
  children: React.ReactNode;
}

export function CacheProvider({
  children,
  options,
  ...props
}: CacheProviderProps) {
  return (
    <AppRouterCacheProvider
      options={{ enableCssLayer: true, ...options }}
      {...props}
    >
      {children}
    </AppRouterCacheProvider>
  );
}
