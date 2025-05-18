import { CreateButton } from "./buttons";
import { SxStyle } from "@/classes";
import { Box } from "@mui/material";

export function TasksActions() {
  return (
    <Box sx={sxStyle.actions}>
      <CreateButton sx={sxStyle.button} />
    </Box>
  );
}

const sxStyle = SxStyle.create({
  actions: {
    display: "flex",
    gap: 1,
  },
  button: {
    whiteSpace: "nowrap",
    width: {
      xs: "100%",
      sm: "auto",
    },
  },
});
