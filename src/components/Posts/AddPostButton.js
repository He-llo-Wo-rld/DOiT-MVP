"use client";

import { UI_TEXTS } from "@/constants";
import { Add as AddIcon } from "@mui/icons-material";
import { SpeedDial } from "@mui/material";

export function AddPostButton({ onClick }) {
  return (
    <SpeedDial
      ariaLabel={UI_TEXTS.SPEED_DIAL_LABEL}
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<AddIcon />}
      onClick={onClick}
    />
  );
}
