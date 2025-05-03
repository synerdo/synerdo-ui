"use client";

import { ThemeButton } from "@/components/buttons";
import { DrawerButton, DrawerSlide } from "@/components/drawers";
import {
  Container,
  Header,
  HeaderLogo,
  RowBox,
} from "@/components/protected";
import { Layout, RoomDrawer, roomDrawerId } from "@/components/room";
import { RoomProvider } from "@/providers";
import { Typography } from "@mui/material";

export default function RoomPage() {
  return (
    <RoomProvider>
      <Layout>
        <Header>
          <DrawerButton id={roomDrawerId} />

          <HeaderLogo href="/rooms" mr="auto" />

          <ThemeButton />
        </Header>

        <RoomDrawer />

        <DrawerSlide id={roomDrawerId}>
          <Container>
            <RowBox mb={4}>
              <Typography variant="h4" mr={"auto"} mb={{ xs: 2, sm: 0 }}>
                Tasks
              </Typography>

              <Typography>TasksActions</Typography>
            </RowBox>

            <Typography>TasksList</Typography>
          </Container>
        </DrawerSlide>
      </Layout>
    </RoomProvider>
  );
}
