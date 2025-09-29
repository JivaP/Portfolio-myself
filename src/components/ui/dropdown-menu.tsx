"use client";

import * as React from "react";
import {
  Menu,
  MenuItem,
  MenuProps,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Radio,
  Typography,
  Divider,
  // IconButton,
  Box,
} from "@mui/material";
import { ChevronRight } from "lucide-react";

interface DropdownMenuProps extends Omit<MenuProps, "open"> {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  return <Menu {...props} />;
};

export const DropdownMenuItem: React.FC<React.ComponentProps<typeof MenuItem> & { inset?: boolean }> = ({
  children,
  inset,
  ...props
}) => {
  return (
    <MenuItem {...props} sx={{ pl: inset ? 4 : 2 }}>
      {children}
    </MenuItem>
  );
};

export const DropdownMenuCheckboxItem: React.FC<{
  checked: boolean;
  onChange?: () => void;
  children: React.ReactNode;
}> = ({ checked, children, onChange }) => {
  return (
    <MenuItem onClick={onChange}>
      <ListItemIcon>
        <Checkbox checked={checked} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
};

export const DropdownMenuRadioItem: React.FC<{
  checked: boolean;
  onChange?: () => void;
  children: React.ReactNode;
}> = ({ checked, children, onChange }) => {
  return (
    <MenuItem onClick={onChange}>
      <ListItemIcon>
        <Radio checked={checked} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
};

export const DropdownMenuLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ px: 2, py: 1.5 }}>
      <Typography variant="subtitle2">{children}</Typography>
    </Box>
  );
};

export const DropdownMenuSeparator: React.FC = () => {
  return <Divider sx={{ my: 1 }} />;
};

export const DropdownMenuSubTrigger: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <MenuItem onClick={onClick} sx={{ display: "flex", justifyContent: "space-between" }}>
      {children}
      <ChevronRight size={16} />
    </MenuItem>
  );
};

export const DropdownMenuShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography variant="caption" sx={{ ml: "auto", opacity: 0.6 }}>
      {children}
    </Typography>
  );
};
