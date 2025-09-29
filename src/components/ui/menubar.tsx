"use client";

import * as React from "react";
import {
  Menu,
  MenuItem,
  MenuProps,
  ListItemIcon,
  ListItemText,
  Divider,
  Checkbox,
  Radio,
  // FormControlLabel,
  Typography,
  IconButton,
} from "@mui/material";
// import { Check, ChevronRight, Circle } from "lucide-react";

type MenubarProps = MenuProps & {
  label?: React.ReactNode;
};

export const MenubarButton: React.FC<{
  label: React.ReactNode;
  onClick?: () => void;
}> = ({ label, onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      px: 1.5,
      py: 0.5,
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'none',
    }}
  >
    {label}
  </IconButton>
);

export const MenubarContent: React.FC<MenubarProps> = ({ children, ...props }) => {
  return (
    <Menu
      {...props}
      sx={{
        minWidth: 180,
        '& .MuiPaper-root': {
          borderRadius: 1,
          boxShadow: 3,
          p: 0.5,
        },
      }}
    >
      {children}
    </Menu>
  );
};

export const MenubarItem: React.FC<{
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  inset?: boolean;
}> = ({ children, inset, ...props }) => (
  <MenuItem
    {...props}
    sx={{
      px: inset ? 4 : 2,
      py: 1.5,
      fontSize: '0.875rem',
      fontWeight: 400,
    }}
  >
    {children}
  </MenuItem>
);

export const MenubarCheckboxItem: React.FC<{
  checked: boolean;
  onChange?: () => void;
  children: React.ReactNode;
}> = ({ checked, onChange, children }) => (
  <MenuItem onClick={onChange} sx={{ px: 2, py: 1.5 }}>
    <ListItemIcon>
      <Checkbox checked={checked} size="small" />
    </ListItemIcon>
    <ListItemText>{children}</ListItemText>
  </MenuItem>
);

export const MenubarRadioItem: React.FC<{
  checked: boolean;
  onChange?: () => void;
  children: React.ReactNode;
}> = ({ checked, onChange, children }) => (
  <MenuItem onClick={onChange} sx={{ px: 2, py: 1.5 }}>
    <ListItemIcon>
      <Radio checked={checked} size="small" />
    </ListItemIcon>
    <ListItemText>{children}</ListItemText>
  </MenuItem>
);

export const MenubarLabel: React.FC<{ children: React.ReactNode; inset?: boolean }> = ({
  children,
  inset,
}) => (
  <Typography
    variant="subtitle2"
    sx={{ px: inset ? 4 : 2, py: 1, fontWeight: 600 }}
  >
    {children}
  </Typography>
);

export const MenubarSeparator = () => <Divider sx={{ my: 0.5 }} />;

export const MenubarShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    variant="caption"
    sx={{ ml: 'auto', fontSize: '0.7rem', color: 'text.secondary', letterSpacing: 0.5 }}
  >
    {children}
  </Typography>
);
