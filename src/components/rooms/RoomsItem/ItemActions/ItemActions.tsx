"use client";

import { ActionsButton } from "./ActionsButton";
import { ActionsMenu } from "./ActionsMenu";
import { ItemActionsContainer } from "./ItemActionsContainer";
import { BoxProps, MenuItemProps } from "@mui/material";
import { MouseEvent, useState } from "react";

interface ItemActions extends Omit<BoxProps, "children"> {
  menuItems: MenuItemProps[];
}

export function ItemActions({ menuItems, ...props }: ItemActions) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleButtonClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setAnchorEl(e.currentTarget);
  };

  const handleMenuClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setAnchorEl(null);
  };

  return (
    <ItemActionsContainer {...props}>
      <ActionsButton onClick={handleButtonClick} />

      <ActionsMenu
        open={isMenuOpen}
        onClose={handleMenuClick}
        onClick={handleMenuClick}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        menuItems={menuItems}
      />
    </ItemActionsContainer>
  );
}
