"use client";

import { Container, RowBox } from "@/components/protected";
import { RoomMeta, UsersList } from "@/components/room/settings";
import { Typography } from "@mui/material";

export default function RoomSettingsPage() {
  return (
    <Container>
      <RowBox mb={4}>
        <Typography variant="h4">Settings</Typography>
      </RowBox>

      <RoomMeta />

      <UsersList />
    </Container>
  );
}
