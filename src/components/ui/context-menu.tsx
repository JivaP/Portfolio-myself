import * as React from "react";
import {
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Typography,
  Box,
} from "@mui/material";
import { Check, ChevronRight, Circle } from "lucide-react";

interface ContextMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  anchorEl,
  open,
  onClose,
  children,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        sx: { minWidth: 200, p: 0 },
      }}
    >
      {children}
    </Menu>
  );
};

interface ContextMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  inset?: boolean;
  shortcut?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const ContextMenuItem = React.forwardRef<HTMLLIElement, ContextMenuItemProps>(
  ({ children, inset, shortcut, icon, ...props }, ref) => (
    <MenuItem
      ref={ref}
      {...props}
      sx={{
        px: inset ? 4 : 2,
        py: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon && <ListItemIcon sx={{ minWidth: 24 }}>{icon}</ListItemIcon>}
        <Typography variant="body2">{children}</Typography>
      </Box>
      {shortcut && (
        <Typography variant="caption" color="text.secondary">
          {shortcut}
        </Typography>
      )}
    </MenuItem>
  )
);
ContextMenuItem.displayName = "ContextMenuItem";

interface ContextMenuCheckboxItemProps {
  checked?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ContextMenuCheckboxItem = React.forwardRef<
  HTMLLIElement,
  ContextMenuCheckboxItemProps
>(({ children, checked, ...props }, ref) => (
  <ContextMenuItem
    ref={ref}
    icon={checked ? <Check size={16} /> : <Box sx={{ width: 16 }} />}
    {...props}
  >
    {children}
  </ContextMenuItem>
));
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

interface ContextMenuRadioItemProps {
  selected?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ContextMenuRadioItem = React.forwardRef<HTMLLIElement, ContextMenuRadioItemProps>(
  ({ children, selected, ...props }, ref) => (
    <ContextMenuItem
      ref={ref}
      icon={selected ? <Circle size={16} /> : <Box sx={{ width: 16 }} />}
      {...props}
    >
      {children}
    </ContextMenuItem>
  )
);
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

export const ContextMenuSeparator = (props: any) => <Divider {...props} />;

export const ContextMenuLabel: React.FC<{ children: React.ReactNode; inset?: boolean }> = ({
  children,
  inset,
}) => (
  <Typography
    variant="caption"
    sx={{ px: inset ? 4 : 2, py: 1.5, fontWeight: 600, color: "text.secondary" }}
  >
    {children}
  </Typography>
);

export const ContextMenuSubTrigger: React.FC<ContextMenuItemProps> = (props) => {
  return <ContextMenuItem {...props} icon={<ChevronRight size={16} />} />;
};

export const ContextMenuShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography variant="caption" color="text.secondary" sx={{ ml: "auto", letterSpacing: 1 }}>
    {children}
  </Typography>
);
