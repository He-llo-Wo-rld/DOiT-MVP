"use client";

import { useLayoutContext } from "@/context/LayoutContext";
import { useDrawer } from "@/hooks";
import { Box, Toolbar } from "@mui/material";
import { CustomAppBar } from "../AppBar/CustomAppBar";
import { CustomDrawer } from "../Drawer/CustomDrawer";

export function Layout({ children }) {
  const { mobileOpen, desktopOpen, handleDrawerToggle } = useDrawer();
  const { title, showComments, onCommentsClick, commentsCount } =
    useLayoutContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
