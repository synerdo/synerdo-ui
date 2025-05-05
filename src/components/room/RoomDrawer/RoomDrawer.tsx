"use client";

import { DrawerHeader } from "./DrawerHeader";
import { DrawerList } from "./DrawerList";
import { Drawer, DrawerButton } from "@/components/drawers";
import { HeaderLogo } from "@/components/protected";
import { useDrawersStore } from "@/stores";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import { useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "next/navigation";

export const roomDrawerId = "room-drawer";

export function RoomDrawer() {
  const p = useParams();

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const closeDrawer = useDrawersStore((s) => s.closeDrawer);

  const roomId = p["roomId"];

  const handleClick = () => {
    if (!isDesktop) {
      closeDrawer(roomDrawerId);
    }
  };

  return (
    <Drawer id={roomDrawerId}>
      {!isDesktop ? (
        <DrawerHeader>
          <DrawerButton id={roomDrawerId} />

          <HeaderLogo href="/rooms" />
        </DrawerHeader>
      ) : null}

      <DrawerList
        title="Tasks"
        items={[
          {
            icon: <FormatListBulletedIcon />,
            text: "All",
            href: `/rooms/${roomId}`,
            onClick: handleClick,
          },
        ]}
      />

      <DrawerList
        toBottom
        items={[
          {
            icon: <SettingsIcon />,
            text: "Settings",
            href: `/rooms/${roomId}/settings`,
            onClick: handleClick,
          },
        ]}
      />
    </Drawer>
  );
}
