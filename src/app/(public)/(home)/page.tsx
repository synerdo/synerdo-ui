import { SxStyle } from "@/classes";
import { HomeContainer } from "@/components/home";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <HomeContainer>
      <Typography variant="h1" sx={sxStyle.itemSpacing}>
        Synergy does
      </Typography>
      <Typography sx={sxStyle.itemSpacing}>
        Welcome to <strong>Synerdo</strong> — your all-in-one task
        management solution designed to keep you organized, efficient, and
        in perfect sync with your goals.
      </Typography>
      <Button fullWidth LinkComponent={Link} href="/auth">
        Get Started
      </Button>
    </HomeContainer>
  );
}

const sxStyle = SxStyle.create({
  itemSpacing: {
    mb: 4,
  },
});
