"use client";

import { ROUTES, UI_TEXTS } from "@/constants";
import { formatUserName, getUserInitials } from "@/utils";
import {
  ArrowBack as ArrowBackIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export function PostCard({ post, onDelete, isDeleting }) {
  const router = useRouter();

  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {getUserInitials(post.title)}
          </Avatar>
        }
        title={post.title}
        subheader={formatUserName(post.userId)}
      />

      <CardContent>
        <Typography variant="body1" paragraph>
          {post.body}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          pb: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push(ROUTES.POSTS)}
        >
          {UI_TEXTS.BACK_BUTTON}
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={onDelete}
          disabled={isDeleting}
        >
          {isDeleting ? UI_TEXTS.DELETING_BUTTON : UI_TEXTS.DELETE_BUTTON}
        </Button>
      </CardActions>
    </Card>
  );
}
