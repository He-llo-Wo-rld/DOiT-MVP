"use client";

import { selectDarkMode, toggleTheme } from "@/store/slices/themeSlice";
import {
  Comment as CommentIcon,
  BrightnessHigh as DayIcon,
  Menu as MenuIcon,
  Brightness4 as NightIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export function CustomAppBar({
  onMenuClick,
  onCommentsClick,
  showComments = false,
  commentsCount = 0,
  title = process.env.NEXT_PUBLIC_APP_NAME,
}) {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            onClick={handleThemeToggle}
            sx={{
              padding: 1,
              borderRadius: 1,
              mr: showComments ? 2 : 0,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {darkMode ? (
              <DayIcon
                sx={{
                  color: "#fff !important",
                }}
              />
            ) : (
              <NightIcon
                sx={{
                  color: "#fff !important",
                }}
              />
            )}
          </IconButton>

          {showComments && (
            <IconButton color="inherit" onClick={onCommentsClick}>
              <Badge badgeContent={commentsCount} color="error">
                <CommentIcon />
              </Badge>
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
