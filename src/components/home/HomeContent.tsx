import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export function HomeContent() {
  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Synergy does
      </Typography>
      <Typography sx={{ mb: 4 }}>
        Welcome to <strong>Synerdo</strong> — your all-in-one task
        management solution designed to keep you organized, efficient, and
        in perfect sync with your goals.
      </Typography>
      <Button fullWidth LinkComponent={Link} href="/auth">
        Get Started
      </Button>
    </Box>
  );
}
