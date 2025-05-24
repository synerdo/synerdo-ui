"use client";

import { joinModalId } from "../modals";
import { useModalsStore } from "@/stores";
import { Button, ButtonProps } from "@mui/material";

export function JoinButton({ ...props }: ButtonProps) {
  const openModal = useModalsStore((s) => s.openModal);

  const handleClick = () => {
    openModal(joinModalId);
  };

  return (
    <Button {...props} onClick={handleClick}>
      Join Room
    </Button>
  );
}
