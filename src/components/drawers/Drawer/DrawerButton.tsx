import { useDrawersStore } from "@/stores";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { IconButton, IconButtonProps } from "@mui/material";

interface DrawerButtonProps extends IconButtonProps {
  id: string;
}

export function DrawerButton({ id, ...props }: DrawerButtonProps) {
  const isOpen = useDrawersStore((state) => state.getIsDrawerOpen(id));
  const openDrawer = useDrawersStore((state) => state.openDrawer);
  const closeDrawer = useDrawersStore((state) => state.closeDrawer);

  const handleClick = () => {
    if (isOpen) {
      closeDrawer(id);
    } else {
      openDrawer(id);
    }
  };

  return (
    <IconButton {...props} onClick={handleClick}>
      {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
    </IconButton>
  );
}
