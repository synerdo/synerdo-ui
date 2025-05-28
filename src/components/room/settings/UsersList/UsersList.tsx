"use client";

import { UsersItem } from "../UsersItem";
import { UsersListContainer } from "./UsersListContainer";
import { ListCell, ListContainer, ListRow } from "@/components/lists";
import { useUsersStore } from "@/stores";
import { Typography } from "@mui/material";

export function UsersList() {
  const users = useUsersStore((s) => s.users);

  return users.length > 0 ? (
    <UsersListContainer>
      <Typography variant="subtitle1" mb={1}>
        Participants:
      </Typography>

      <ListContainer>
        <ListRow borderBottom={"1px solid"}>
          <ListCell isBold len={5} text="#" />

          <ListCell isBold len={20} text="Username" />

          <ListCell isBold len={45} text="Email" />

          <ListCell isBold len={30} text="Role" />
        </ListRow>

        {users.map((user, index) => (
          <UsersItem key={user.id} user={user} index={index + 1} />
        ))}
      </ListContainer>
    </UsersListContainer>
  ) : (
    <Typography>No users available.</Typography>
  );
}
