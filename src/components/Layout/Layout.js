"use client";

import { DRAWER_WIDTH } from "@/constants";
import { useDrawer } from "@/hooks";
import { Box, Toolbar } from "@mui/material";
import { CustomAppBar } from "../AppBar/CustomAppBar";
import { CustomDrawer } from "../Drawer/CustomDrawer";

export function Layout({
  children,
  showComments = false,
  onCommentsClick,
  commentsCount,
  title,
}) {
  const { mobileOpen, desktopOpen, handleDrawerToggle } = useDrawer();

  return (
    <Box sx={{ display: "flex" }}>
      <CustomAppBar
        onMenuClick={handleDrawerToggle}
        showComments={showComments}
        onCommentsClick={onCommentsClick}
        commentsCount={commentsCount}
        title={title}
      />

      <CustomDrawer
        open={mobileOpen}
        desktopOpen={desktopOpen}
        onClose={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
