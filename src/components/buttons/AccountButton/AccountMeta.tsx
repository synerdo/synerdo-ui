"use client";

import { SxStyle } from "@/classes";
import { IUser } from "@/interfaces";
import { Box, BoxProps, Typography } from "@mui/material";

interface AccountMetaProps extends BoxProps {
  user: IUser;
}

export function AccountMeta({ user, ...props }: AccountMetaProps) {
  return (
    <Box {...props} sx={sxStyle.container}>
      <Typography sx={sxStyle.username}>{user.username}</Typography>

      <Typography sx={sxStyle.email}>{user.email}</Typography>
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: (theme) => ({
    py: 0.75,
    pb: 1.75,
    px: 2,
    mb: 1,
    borderBottom: "1px solid",
    borderColor: "black.5",
    ...theme.applyStyles("dark", {
      borderColor: "white.5",
    }),
  }),
  username: {
    fontSize: "0.875rem",
    fontWeight: 600,
    mb: 0.5,
  },
  email: {
    fontSize: "0.875rem",
  },
});
