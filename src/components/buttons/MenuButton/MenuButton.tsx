"use client";

import { MenuButtonContainer } from "./MenuButtonContainer";
import { MenuIcon } from "./MenuIcon";
import { MenuList } from "./MenuList";
import { BoxProps, MenuItemProps } from "@mui/material";
import { MouseEvent, useState } from "react";

interface MenuButtonProps extends Omit<BoxProps, "children"> {
  menuItems: MenuItemProps[];
  iconSize?: "inherit" | "large" | "medium" | "small";
}

export function MenuButton({
  menuItems,
  iconSize,
  ...props
}: MenuButtonProps) {
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
    <MenuButtonContainer {...props}>
      <MenuIcon iconSize={iconSize} onClick={handleButtonClick} />

      <MenuList
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
    </MenuButtonContainer>
  );
}
