"use client";

import { POST_CONFIG } from "@/constants";
import {
  Subject as SubjectIcon,
  Title as TitleIcon,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

export function FormStep({ step, formData, errors, onChange }) {
  const getStepContent = () => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Заголовок"
              value={formData.title}
              onChange={onChange("title")}
              error={!!errors.title}
              helperText={errors.title}
              placeholder="Введіть заголовок поста..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary">
              Мінімальна довжина: {POST_CONFIG.MIN_TITLE_LENGTH} символів
            </Typography>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Текст поста"
              value={formData.body}
              onChange={onChange("body")}
              error={!!errors.body}
              helperText={errors.body}
              placeholder="Введіть текст поста..."
              multiline
              rows={6}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ alignSelf: "flex-start", mt: 1 }}
                  >
                    <SubjectIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary">
              Мінімальна довжина: {POST_CONFIG.MIN_BODY_LENGTH} символів
            </Typography>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Попередній перегляд
            </Typography>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {formData.title || "Заголовок поста"}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {formData.body || "Текст поста"}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );

      default:
        return null;
    }
  };

  return getStepContent();
}
