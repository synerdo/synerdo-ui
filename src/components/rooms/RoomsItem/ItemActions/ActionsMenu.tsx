import { Menu, MenuItem, MenuItemProps, MenuProps } from "@mui/material";

interface ActionsMenuProps extends MenuProps {
  menuItems: MenuItemProps[];
}

export function ActionsMenu({ menuItems, ...props }: ActionsMenuProps) {
  return (
    <Menu {...props}>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} {...menuItem} />
      ))}
    </Menu>
  );
}
