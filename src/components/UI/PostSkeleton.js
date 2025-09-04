"use client";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
} from "@mui/material";

export function PostSkeleton() {
  return (
    <Card sx={{ height: "100%" }} data-testid="post-skeleton">
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={<Skeleton animation="wave" height={20} width="80%" />}
        subheader={<Skeleton animation="wave" height={16} width="60%" />}
        action={
          <Skeleton
            animation="wave"
            variant="circular"
            width={32}
            height={32}
          />
        }
      />
      <CardContent>
        <Skeleton animation="wave" height={16} width="100%" />
        <Skeleton animation="wave" height={16} width="90%" />
        <Skeleton animation="wave" height={16} width="95%" />
      </CardContent>
      <CardActions>
        <Skeleton animation="wave" height={36} width={100} />
      </CardActions>
    </Card>
  );
}
