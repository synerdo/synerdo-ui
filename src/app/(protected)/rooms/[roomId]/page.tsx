"use client";

import { Container, RowBox } from "@/components/protected";
import { Typography } from "@mui/material";

export default function RoomPage() {
  return (
    <Container>
      <RowBox mb={4}>
        <Typography variant="h4" mr={"auto"} mb={{ xs: 2, sm: 0 }}>
          Tasks
        </Typography>

        <Typography>TasksActions</Typography>
      </RowBox>

      <Typography>TasksList</Typography>
    </Container>
  );
}
