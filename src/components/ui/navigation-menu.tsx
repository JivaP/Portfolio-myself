"use client";

import * as React from "react";
import {
  Popover,
  Button,
  Typography,
  Box,
  List,

} from "@mui/material";
import { ChevronDown } from "lucide-react";

type NavigationMenuProps = {
  children: React.ReactNode;
};

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ children }) => {
  return <Box display="flex" alignItems="center">{children}</Box>;
};

export const NavigationMenuList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <List component="nav" sx={{ display: 'flex', px: 0, py: 0 }}>
    {children}
  </List>
);

export const NavigationMenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

export const NavigationMenuTrigger: React.FC<{
  label: React.ReactNode;
  menuId?: string;
}> = ({ label, menuId }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        endIcon={<ChevronDown />}
        onClick={handleOpen}
        sx={{
          textTransform: 'none',
          fontSize: '0.875rem',
          fontWeight: 500,
          px: 2,
          py: 1,
        }}
      >
        {label}
      </Button>
      <Popover
        id={menuId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            mt: 0.5,
            minWidth: 200,
            borderRadius: 1,
            boxShadow: 3,
            p: 0.5,
          },
        }}
      >
        <List dense>{/* pass MenuItems here as children */}</List>
      </Popover>
    </>
  );
};

export const NavigationMenuContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box>{children}</Box>
);

export const NavigationMenuLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <Typography
    component="a"
    href={href}
    sx={{
      textDecoration: 'none',
      color: 'text.primary',
      display: 'block',
      px: 2,
      py: 1,
      '&:hover': { backgroundColor: 'action.hover' },
    }}
  >
    {children}
  </Typography>
);

export const NavigationMenuIndicator = () => (
  <Box
    sx={{
      width: 8,
      height: 8,
      transform: 'rotate(45deg)',
      bgcolor: 'divider',
      boxShadow: 1,
      mt: -1,
      mx: 'auto',
    }}
  />
);

export const NavigationMenuViewport: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ mt: 0.5, minWidth: 200, borderRadius: 1, boxShadow: 3, overflow: 'hidden' }}>
    {children}
  </Box>
);
