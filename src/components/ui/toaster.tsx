"use client";

// import * as React from "react";
import { Snackbar, Alert, AlertColor, IconButton, Stack } from "@mui/material";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";



export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <Stack spacing={1} sx={{ position: "fixed", top: 16, right: 16, zIndex: 1300 }}>
      {toasts.map(({ id, title, description, variant = "info", autoClose = 4000 }:any) => (
        <Snackbar
          key={id}
          open={true}
          autoHideDuration={autoClose}
          onClose={() => dismiss(id)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            severity={variant as AlertColor}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => dismiss(id)}
              >
                <X fontSize="small" />
              </IconButton>
            }
            sx={{ width: "100%" }}
          >
            {title && <strong>{title}</strong>}
            {description && <div>{description}</div>}
          </Alert>
        </Snackbar>
      ))}
    </Stack>
  );
}
