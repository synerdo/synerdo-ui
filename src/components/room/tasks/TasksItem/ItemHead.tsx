import { SxStyle } from "@/classes";
import {
  alpha,
  Box,
  BoxProps,
  ButtonBase,
  ButtonBaseProps,
} from "@mui/material";
import { useMemo } from "react";

interface ItemHeadProps extends BoxProps {
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
  buttonProps?: ButtonBaseProps;
  isExpanded?: boolean;
}

export function ItemHead({
  leftItem,
  rightItem,
  buttonProps,
  isExpanded,
  children,
  sx,
  ...props
}: ItemHeadProps) {
  const expandedSx = useMemo(
    () => ({
      borderRadius: "8px",
      borderBottomLeftRadius: isExpanded ? 0 : "8px",
      borderBottomRightRadius: isExpanded ? 0 : "8px",
    }),
    [isExpanded]
  );

  return (
    <Box
      {...props}
      sx={[sxStyle.head, () => ({ ...sx }), () => ({ ...expandedSx })]}
    >
      {leftItem}

      <ButtonBase {...buttonProps} disableRipple sx={sxStyle.button}>
        {children}
      </ButtonBase>

      {rightItem}
    </Box>
  );
}

const sxStyle = SxStyle.create({
  head: (theme) => ({
    overflow: "hidden",
    px: {
      xs: 0.5,
      sm: 1,
    },
    width: "100%",
    minHeight: {
      xs: "56px",
      sm: "60px",
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "center",
    transition: "background-color 0.2s ease, border-radius 0.2s ease",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    "&:hover": {
      bgcolor: alpha(
        theme.palette.primary.main,
        theme.palette.action.activatedOpacity
      ),
    },
    color: "black.100",
    ...theme.applyStyles("dark", {
      color: "white.100",
    }),
  }),
  button: {
    px: {
      xs: 0.5,
      sm: 1,
    },
    flex: 1,
    justifyContent: "stretch",
    alignSelf: "stretch",
    minWidth: "0",
  },
});
