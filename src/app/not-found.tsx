import { SxStyle } from "@/classes";
import { Typography, Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box sx={sxStyle.container}>
      <Typography variant="h1" component="h1" mb={1}>
        404
      </Typography>
      <Typography variant="h6" component="p">
        This page could not be found
      </Typography>
    </Box>
  );
}

const sxStyle = SxStyle.create({
  container: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
