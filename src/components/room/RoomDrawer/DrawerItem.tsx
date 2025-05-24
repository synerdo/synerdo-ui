"use client";

import {
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface DrawerItemProps extends ListItemButtonProps<typeof Link> {
  icon: React.ReactNode;
  text: string;
  href: string;
}

export function DrawerItem({
  icon,
  text,
  href,
  ...props
}: DrawerItemProps) {
  const pathname = usePathname();

  const isSelected = pathname === href;

  return (
    <ListItemButton
      {...props}
      LinkComponent={Link}
      href={href}
      selected={isSelected}
    >
      <ListItemIcon>{icon}</ListItemIcon>

      <ListItemText>{text}</ListItemText>
    </ListItemButton>
  );
}
