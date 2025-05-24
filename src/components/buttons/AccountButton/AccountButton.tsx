"use client";

import { AccountMeta } from "./AccountMeta";
import { ButtonContainer } from "./ButtonContainer";
import { ButtonItem } from "./ButtonItem";
import { ButtonMenu } from "./ButtonMenu";
import { useUsersStore } from "@/stores";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { BoxProps, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export function AccountButton({ ...props }: BoxProps) {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const user = useUsersStore((s) => s.user);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    router.replace("/auth?login");
  };

  return (
    <ButtonContainer {...props}>
      <IconButton onClick={handleOpen}>
        <AccountCircleIcon />
      </IconButton>

      <ButtonMenu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {user ? <AccountMeta user={user} /> : null}

        <ButtonItem
          onClick={handleLogout}
          icon={<LogoutIcon fontSize="small" />}
          text="Logout"
        />
      </ButtonMenu>
    </ButtonContainer>
  );
}
