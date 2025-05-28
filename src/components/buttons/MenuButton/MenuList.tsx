import { Menu, MenuItem, MenuItemProps, MenuProps } from "@mui/material";

interface MenuListProps extends MenuProps {
  menuItems: MenuItemProps[];
}

export function MenuList({ menuItems, ...props }: MenuListProps) {
  return (
    <Menu {...props}>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} {...menuItem} />
      ))}
    </Menu>
  );
}
