"use client";

import * as React from "react";
import {
  Drawer as MUIDrawer,
  Box,
  Typography,
  IconButton,
  SxProps,
  Theme,
} from "@mui/material";
import { X } from "lucide-react";


interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  anchor?: "bottom" | "top" | "left" | "right";
  PaperProps?: React.ComponentProps<typeof MUIDrawer>["PaperProps"];
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  anchor = "bottom",
  PaperProps,
}) => {
  return (
    <MUIDrawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      PaperProps={{
        sx: {
          borderTopLeftRadius: anchor === "bottom" ? 10 : 0,
          borderTopRightRadius: anchor === "bottom" ? 10 : 0,
          ...PaperProps?.sx,
        },
        ...PaperProps,
      }}
    >
      {children}
    </MUIDrawer>
  );
};

// Header and Footer
export const DrawerHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <Box
    sx={{ display: "grid", gap: 1.5, p: 2, textAlign: { xs: "center", sm: "left" } }}
    className={className}
    {...props}
  />
);

export const DrawerFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <Box sx={{ mt: "auto", display: "flex", flexDirection: "column", gap: 1 }} className={className} {...props} />
);

// Title and Description
export const DrawerTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Typography ref={ref} variant="h6" component="div" className={className} {...props} />
  )
);
DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Typography
      ref={ref}
      variant="body2"
      color="text.secondary"
      className={className}
      {...props}
    />
  )
);
DrawerDescription.displayName = "DrawerDescription";

// Close Button
export const DrawerClose: React.FC<{ onClick?: () => void; sx?: SxProps<Theme> }> = ({ onClick, sx }) => (
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
    <X />
  </IconButton>
);
