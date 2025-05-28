"use client";

import { SxStyle } from "@/classes";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Tooltip, Typography, TypographyProps } from "@mui/material";
import { useRef, useState } from "react";

interface MetaCopyableProps extends TypographyProps {
  children: string;
}

export function MetaCopyable({ children, ...props }: MetaCopyableProps) {
  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async (code: string) => {
    try {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      await navigator.clipboard.writeText(code);

      setCopied(true);
      timeoutRef.current = setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Tooltip arrow title={copied ? "Copied!" : "Click to copy"}>
      <Box sx={sxStyle.code} onClick={() => handleCopy(children)}>
        <Typography {...props}>{children}</Typography>

        <ContentCopyIcon fontSize="small" sx={sxStyle.icon} />
      </Box>
    </Tooltip>
  );
}

const sxStyle = SxStyle.create({
  code: (theme) => ({
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    display: "inline-flex",
    userSelect: "none",
    wordBreak: "break-all",
    px: 1,
    py: 0.5,
    borderRadius: 2,
    bgcolor: "black.5",
    transition: "background-color 0.3s ease",
    "&:hover": {
      bgcolor: "black.10",
    },
    ...theme.applyStyles("dark", {
      bgcolor: "white.10",
      "&:hover": {
        bgcolor: "white.20",
      },
    }),
  }),
  icon: {
    mt: 0.3,
    ml: 1.2,
  },
});
