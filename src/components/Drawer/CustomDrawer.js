"use client";

import { DRAWER_WIDTH, ROUTES, UI_TEXTS } from "@/constants";
import {
  Add as AddIcon,
  Home as HomeIcon,
  List as ListIcon,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/navigation";

const menuItems = [
  { text: "Головна", icon: <HomeIcon />, path: ROUTES.HOME },
  { text: UI_TEXTS.ALL_POSTS_TITLE, icon: <ListIcon />, path: ROUTES.POSTS },
  {
    text: UI_TEXTS.CREATE_POST_TITLE,
    icon: <AddIcon />,
    path: ROUTES.CREATE_POST,
  },
];

export function CustomDrawer({ open, desktopOpen, onClose }) {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    onClose();
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="temporary"
        open={desktopOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
