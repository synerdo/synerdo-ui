import { CreateButton, JoinButton } from "./buttons";
import { SxStyle } from "@/classes";
import { Box } from "@mui/material";

export function RoomsActions() {
  return (
    <Box sx={sxStyle.actions}>
      <JoinButton sx={sxStyle.button} />

      <CreateButton sx={sxStyle.button} />
    </Box>
  );
}

const sxStyle = SxStyle.create({
  actions: {
    display: "flex",
    gap: 1,
    width: {
      xs: "100%",
      sm: "auto",
    },
  },
  button: {
    whiteSpace: "nowrap",
    width: {
      xs: "100%",
      sm: "auto",
    },
  },
});
