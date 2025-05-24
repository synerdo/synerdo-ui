"use client";

import { createModalId } from "../modals";
import { useModalsStore } from "@/stores";
import { Button, ButtonProps } from "@mui/material";

export function CreateButton({ ...props }: ButtonProps) {
  const openModal = useModalsStore((s) => s.openModal);

  const handleClick = () => {
    openModal(createModalId);
  };

  return (
    <Button {...props} onClick={handleClick}>
      Create Room
    </Button>
  );
}
