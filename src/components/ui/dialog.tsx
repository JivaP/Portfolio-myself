"use client";

import * as React from "react";
import {
  Dialog as MUIDialog,
  DialogTitle as MUIDialogTitle,
  DialogContent as MUIDialogContent,
  // DialogActions as MUIDialogActions,
  IconButton,
  // Typography,
  Box,
  SxProps,
  Theme,
  DialogActions,
} from "@mui/material";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  maxWidth = "sm",
  fullWidth = true,
}) => {
  return (
    <MUIDialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      {children}
    </MUIDialog>
  );
};

// Header and Footer
export const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <Box
    sx={{ display: "flex", flexDirection: "column", gap: 1.5, textAlign: { xs: "center", sm: "left" } }}
    className={className}
    {...props}
  />
);

export const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <DialogActions
    sx={{ flexDirection: { xs: "column-reverse", sm: "row" }, justifyContent: { sm: "flex-end" }, gap: 1 }}
    className={className}
    {...props}
  />
);

// Title and Description
export const DialogTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof MUIDialogTitle>>(
  ({ children, ...props }, ref) => (
    <MUIDialogTitle ref={ref} {...props} sx={{ fontWeight: 600, fontSize: "1.125rem" }}>
      {children}
    </MUIDialogTitle>
  )
);
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof MUIDialogContent>>(
  ({ children, ...props }, ref) => (
    <MUIDialogContent ref={ref} {...props} sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
      {children}
    </MUIDialogContent>
  )
);
DialogDescription.displayName = "DialogDescription";

// Close Button
export const DialogClose: React.FC<{ onClick?: () => void; sx?: SxProps<Theme> }> = ({ onClick, sx }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 16,
      top: 16,
      opacity: 0.7,
      transition: "opacity 0.2s",
      "&:hover": { opacity: 1 },
      ...sx,
    }}
  >
    <X size={16} />
  </IconButton>
);
