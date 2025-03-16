import { SxStyle } from "@/classes";
import { Box } from "@mui/material";

export default function AuthPage() {
  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.content}></Box>
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: "700px",
    width: "100%",
  },
});
