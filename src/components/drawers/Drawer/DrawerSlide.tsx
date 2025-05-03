import { useDrawersStore } from "@/stores";
import { Box, BoxProps, useTheme } from "@mui/material";

interface DrawerSlideProps extends BoxProps {
  id: string;
}

export function DrawerSlide({ children, id, ...props }: DrawerSlideProps) {
  const theme = useTheme();

  const isOpen = useDrawersStore((state) => state.getIsDrawerOpen(id));

  const slidePaddingLeft = isOpen ? "300px" : "0";

  const slideTransition = theme.transitions.create(
    "padding-left",
    isOpen
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
  );

  return (
    <Box
      {...props}
      sx={{
        paddingLeft: {
          md: slidePaddingLeft,
        },
        transition: {
          md: slideTransition,
        },
      }}
    >
      {children}
    </Box>
  );
}
