"use client";

import { useDeletePostMutation } from "@/store/api/postsApi";
import { formatUserName, getUserInitials, truncateText } from "@/utils";
import {
  ArrowForward as ArrowForwardIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export function PostCard({ post, onDeleteSuccess }) {
  const router = useRouter();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  const handleDeletePost = async () => {
    try {
      await deletePost(post.id).unwrap();
      onDeleteSuccess?.();
    } catch (error) {
      console.error("Failed to delete the post: ", error);
    }
  };

  const handleViewDetails = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {getUserInitials(post.title)}
          </Avatar>
        }
        title={post.title}
        subheader={formatUserName(post.userId)}
        action={
          <IconButton
            aria-label="delete"
            color="error"
            onClick={handleDeletePost}
            disabled={isDeleting}
          >
            {isDeleting ? <CircularProgress size={24} /> : <DeleteIcon />}
          </IconButton>
        }
        sx={{
          "& .MuiCardHeader-title": {
            fontSize: "1rem",
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          },
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {truncateText(post.body)}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          endIcon={<ArrowForwardIcon />}
          onClick={handleViewDetails}
          sx={{ ml: "auto" }}
        >
          Детальніше
        </Button>
      </CardActions>
    </Card>
  );
}
