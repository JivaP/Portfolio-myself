"use client";

import * as React from "react";
import {
  Drawer,
  DrawerProps,
  Box,
  IconButton,
  Typography,
 
} from "@mui/material";
import { X } from "lucide-react";

interface SheetProps extends Omit<DrawerProps, "children"> { }

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ anchor = "right", children, ...props }: any, ref) => (
    <Drawer
      ref={ref}
      anchor={anchor}
      {...props}
      PaperProps={{
        sx: {
          p: 3,
          bgcolor: "background.paper",
          boxShadow: 3,
        },
      }}
    >
      {children}
    </Drawer>
  )
);
Sheet.displayName = "Sheet";

// Header
const SheetHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <Box {...props} sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
    {children}
  </Box>
);
SheetHeader.displayName = "SheetHeader";

// Footer
const SheetFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      gap: 1,
      mt: 2,
      flexWrap: "wrap",
    }}
  >
    {children}
  </Box>
);
SheetFooter.displayName = "SheetFooter";

// Title
const SheetTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="h6"
    component="div"
    {...props}
    sx={{ fontWeight: 600 }}
  >
    {children}
  </Typography>
));
SheetTitle.displayName = "SheetTitle";

// Description
const SheetDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="body2"
    color="text.secondary"
    {...props}
  >
    {children}
  </Typography>
));
SheetDescription.displayName = "SheetDescription";

// Close button
const SheetClose: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: 8,
      right: 8,
      bgcolor: "background.paper",
    }}
  >
    <X size={20} />
  </IconButton>
);
SheetClose.displayName = "SheetClose";

export {
  Sheet,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
};
