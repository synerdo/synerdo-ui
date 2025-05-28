import { DrawerButton, DrawerSlide } from "@/components/drawers";
import { Header, Layout } from "@/components/protected";
import { RoomDrawer, roomDrawerId } from "@/components/room";
import { RoomProvider } from "@/providers";

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoomProvider>
      <Layout>
        <Header
          leftItem={<DrawerButton key={roomDrawerId} id={roomDrawerId} />}
        />

        <RoomDrawer />

        <DrawerSlide id={roomDrawerId}>{children}</DrawerSlide>
      </Layout>
    </RoomProvider>
  );
}
