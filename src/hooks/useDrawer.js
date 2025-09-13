"use client";

import { useCallback, useState } from "react";

export const useDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    if (window.innerWidth < 600) {
      setMobileOpen(!mobileOpen);
    } else {
      setDesktopOpen(!desktopOpen);
    }
  }, [mobileOpen, desktopOpen]);

  return {
    mobileOpen,
    desktopOpen,
    handleDrawerToggle,
  };
};
