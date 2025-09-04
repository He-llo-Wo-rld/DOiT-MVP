import { useCallback, useState } from "react";

export const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const showSnackbar = useCallback((msg, sev = "success") => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  }, []);

  const hideSnackbar = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    snackbarProps: {
      open,
      message,
      severity,
      onClose: hideSnackbar,
    },
    showSnackbar,
    hideSnackbar,
  };
};
