import { ThemeButton } from "@/components/buttons";
import {
  Container,
  Header,
  HeaderLogo,
  RowBox,
  Layout,
} from "@/components/protected";
import {
  RoomsList,
  RoomsActions,
  CreateModal,
  EditModal,
  DeleteModal,
  JoinModal,
  LeaveModal,
} from "@/components/rooms";
import { Typography } from "@mui/material";

export default function RoomsPage() {
  return (
    <Layout>
      <Header />

      <Container>
        <RowBox mb={4}>
          <Typography variant="h4" mr={"auto"} mb={{ xs: 2, sm: 0 }}>
            Rooms
          </Typography>

          <RoomsActions />
        </RowBox>

        <RoomsList />
      </Container>

      <JoinModal />

      <CreateModal />

      <EditModal />

      <DeleteModal />

      <LeaveModal />
    </Layout>
  );
}
