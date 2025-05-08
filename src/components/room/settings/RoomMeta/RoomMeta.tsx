"use client";

import { MetaCopyable } from "./MetaCopyable";
import { MetaSection } from "./MetaSection";
import { RoomMetaContainer } from "./RoomMetaContainer";
import { useRoomsStore } from "@/stores";
import { Typography } from "@mui/material";

export function RoomMeta() {
  const room = useRoomsStore((s) => s.room);

  return (
    <RoomMetaContainer>
      <MetaSection title="Room name:">
        <Typography>{room?.name}</Typography>
      </MetaSection>

      <MetaSection title="Access code:">
        <MetaCopyable>{room?.access_code}</MetaCopyable>
      </MetaSection>
    </RoomMetaContainer>
  );
}
