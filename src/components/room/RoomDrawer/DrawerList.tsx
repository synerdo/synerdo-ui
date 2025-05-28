import { DrawerItem, DrawerItemProps } from "./DrawerItem";
import { SxStyle } from "@/classes";
import {
  Divider,
  List,
  ListProps,
  ListSubheader,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMemo } from "react";

interface DrawerListProps extends ListProps {
  title?: string;
  items: DrawerItemProps[];
  toBottom?: boolean;
}

export function DrawerList({
  title,
  items,
  toBottom,
  ...props
}: DrawerListProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const subheaderBg = useMemo(
    () =>
      isDesktop || theme.palette.mode === "light"
        ? "background.primary"
        : "gray.800",
    [isDesktop, theme.palette.mode]
  );

  return (
    <>
      {toBottom ? <Divider sx={{ mt: "auto" }} /> : null}

      <List
        {...props}
        subheader={
          title ? (
            <ListSubheader
              sx={{
                ...sxStyle.subheader,
                bgcolor: subheaderBg,
              }}
            >
              Tasks
            </ListSubheader>
          ) : null
        }
      >
        {items.map((props, index) => (
          <DrawerItem key={`${props.title}-${index}`} {...props} />
        ))}
      </List>

      {!toBottom ? <Divider /> : null}
    </>
  );
}

const sxStyle = SxStyle.create({
  subheader: {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "white.5",
  },
});
