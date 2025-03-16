import { SxStyle } from "@/classes";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.content}>
        <Typography variant="h1" sx={sxStyle.title}>
          Synerdo - Sync Smarter
        </Typography>
        <Typography sx={sxStyle.text}>
          Welcome to <strong>Synerdo</strong> — your all-in-one task
          management solution designed to keep you organized, efficient,
          and in perfect sync with your goals. Whether you&apos;re tackling
          personal projects or collaborating with a team, Synerdo
          streamlines your workflow, making productivity effortless. Take
          control of your tasks today and experience a smarter way to plan,
          track, and accomplish more.
        </Typography>
        <Button LinkComponent={Link} href="/auth" sx={sxStyle.button}>
          Get Started
        </Button>
      </Box>
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
  title: {
    mb: 4,
  },
  text: {
    mb: 4,
  },
  button: {
    width: "100%",
  },
});
