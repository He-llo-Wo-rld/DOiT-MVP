export const ROUTES = {
  HOME: "/",
  POSTS: "/posts",
  POST_DETAIL: (id) => `/posts/${id}`,
  CREATE_POST: "/posts/create",
};

export const DRAWER_WIDTH = 240;

export const POST_CONFIG = {
  POSTS_PER_PAGE: 9,
  SKELETON_COUNT: 12,
  MIN_TITLE_LENGTH: 5,
  MIN_BODY_LENGTH: 10,
  MAX_PREVIEW_LENGTH: 100,
};

export const DEFAULT_USER_ID = 1;

export const TIMEOUTS = {
  REDIRECT_DELAY: 200,
  SUCCESS_DELAY: 600,
  DEBOUNCE_DELAY: 500,
};

export const THEME_COLORS = {
  PRIMARY: "#2196f3",
  PRIMARY_HOVER: "#1976d2",
  SECONDARY: "#f50057",
};

export const VALIDATION_MESSAGES = {
  TITLE_REQUIRED: "Заголовок є обов'язковим",
  TITLE_MIN_LENGTH: `Заголовок повинен містити щонайменше ${POST_CONFIG.MIN_TITLE_LENGTH} символів`,
  BODY_REQUIRED: "Текст поста є обов'язковим",
  BODY_MIN_LENGTH: `Текст поста повинен містити щонайменше ${POST_CONFIG.MIN_BODY_LENGTH} символів`,
};

export const SNACKBAR_MESSAGES = {
  POST_DELETED: "Пост видалено успішно",
  POST_CREATED: "Пост створено успішно",
  DELETE_ERROR: "Помилка при видаленні поста",
  LOAD_ERROR: "Помилка завантаження постів",
  CREATE_ERROR: "Помилка при створенні поста",
  LOAD_COMMENTS_ERROR: "Помилка завантаження коментарів",
};

export const UI_TEXTS = {
  ALL_POSTS_TITLE: "Усі пости",
  CREATE_POST_TITLE: "Створити пост",
  LOADING_TITLE: "Завантаження...",
  ERROR_TITLE: "Помилка",
  POST_NOT_FOUND_TITLE: "Пост не знайдено",
  SEARCH_PLACEHOLDER: "Шукати пости за назвою або вмістом...",
  UNKNOWN_ERROR: "Невідома помилка",
  POSTS_NOT_FOUND: "Пости не знайдено",
  POSTS_NOT_FOUND_FOR_QUERY: "Пости за вашим запитом не знайдено",
  ERROR_LOADING_POSTS: "Помилка завантаження постів",
  BACK_BUTTON: "Назад",
  DELETE_BUTTON: "Видалити",
  DELETING_BUTTON: "Видалення...",
  COMMENTS_TITLE: "Коментарі",
  POST_DETAILS_TITLE: (id) => `Пост #${id}`,
  CREATE_POST_STEPS: ["Заголовок", "Тіло", "Попередній перегляд"],
  NEXT_BUTTON: "Далі",
  SAVE_BUTTON: "Зберегти",
  PREVIEW_TITLE: "Попередній перегляд",
  EDIT_BUTTON: "Редагувати",
  CONFIRM_BUTTON: "Підтвердити",
  SAVING_BUTTON: "Збереження...",
  SPEED_DIAL_LABEL: "Додати новий пост",
};
