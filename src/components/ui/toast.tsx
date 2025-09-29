"use client";

import * as React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastProps {
  open: boolean;
  message: string;
  variant?: ToastVariant;
  onClose: () => void;
  action?: React.ReactNode;
  autoHideDuration?: number;
}

const Toast = ({
  open,
  message,
  variant = "info",
  onClose,
  action,
  autoHideDuration = 4000,
}: ToastProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity={variant as AlertColor}
        onClose={onClose}
        action={action}
        sx={{
          width: "100%",
          boxShadow: 3,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

// Optional provider component to wrap your app
const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export { Toast, ToastProvider };
