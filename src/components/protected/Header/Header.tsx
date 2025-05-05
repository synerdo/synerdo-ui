"use client";

import { HeaderLogo } from "../HeaderLogo";
import { HeaderContainer } from "./HeaderContainer";
import { AccountButton, ThemeButton } from "@/components/buttons";
import { BoxProps } from "@mui/material";

interface HeaderProps extends BoxProps {
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
}

export function Header({ leftItem, rightItem, ...props }: HeaderProps) {
  return (
    <HeaderContainer {...props}>
      {leftItem}

      <HeaderLogo href="/rooms" mr="auto" />

      <ThemeButton />

      <AccountButton />

      {rightItem}
    </HeaderContainer>
  );
}
