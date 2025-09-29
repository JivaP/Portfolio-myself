"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogProps,
  TextField,
  InputAdornment,
  List,
  ListItem,
  Divider,
  Typography,
  Stack,
} from "@mui/material";
import { Search } from "lucide-react";

// ------------------------
// Command Dialog
// ------------------------
interface CommandDialogProps extends DialogProps {
  children: React.ReactNode;
}

const CommandDialog: React.FC<CommandDialogProps> = ({ children, ...props }) => {
  return (
    <Dialog {...props} fullWidth maxWidth="sm">
      <DialogContent sx={{ p: 0, overflow: "hidden" }}>
        <Stack>{children}</Stack>
      </DialogContent>
    </Dialog>
  );
};

// ------------------------
// Command Input
// ------------------------
interface CommandInputProps extends React.ComponentProps<typeof TextField> {}

const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(
  ({ ...props }, ref) => {
    return (
      <TextField
        inputRef={ref}
        variant="outlined"
        placeholder="Type a command..."
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search size={16} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": { borderRadius: 0 },
          mb: 1,
        }}
        {...props}
      />
    );
  }
);
CommandInput.displayName = "CommandInput";

// ------------------------
// Command List
// ------------------------
const CommandList = React.forwardRef<HTMLUListElement, React.ComponentProps<typeof List>>(
  ({ ...props }, ref) => {
    return <List ref={ref} sx={{ maxHeight: 300, overflowY: "auto", px: 0 }} {...props} />;
  }
);
CommandList.displayName = "CommandList";

// ------------------------
// Command Empty
// ------------------------
const CommandEmpty: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Typography variant="body2" align="center" sx={{ py: 3 }}>
      {children || "No results found."}
    </Typography>
  );
};
CommandEmpty.displayName = "CommandEmpty";

// ------------------------
// Command Group
// ------------------------
const CommandGroup: React.FC<{ children?: React.ReactNode; heading?: string }> = ({
  children,
  heading,
}) => {
  return (
    <Stack spacing={0.5} sx={{ px: 1, py: 0.5 }}>
      {heading && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ px: 1, py: 0.5, fontWeight: 500 }}
        >
          {heading}
        </Typography>
      )}
      {children}
    </Stack>
  );
};
CommandGroup.displayName = "CommandGroup";

// ------------------------
// Command Item
// ------------------------
interface CommandItemProps {
  children: React.ReactNode;
  shortcut?: string;
  onClick?: () => void;
}

const CommandItem = React.forwardRef<HTMLDivElement, CommandItemProps>(
  ({ children, shortcut, ...props }, ref) => {
    return (
      <ListItem
        ref={ref}
        component="div"
        sx={{
          px: 2,
          py: 1.5,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          "&:hover": { bgcolor: "action.hover" },
        }}
        {...props}
      >
        {children}
        {shortcut && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ ml: "auto", letterSpacing: 1 }}
          >
            {shortcut}
          </Typography>
        )}
      </ListItem>
    );
  }
);
CommandItem.displayName = "CommandItem";

// ------------------------
// Command Separator
// ------------------------
// ------------------------
// Command Separator
// ------------------------
const CommandSeparator = React.forwardRef<HTMLHRElement, React.ComponentProps<typeof Divider>>(
  (props, ref) => {
    return <Divider ref={ref} sx={{ my: 0.5 }} {...props} />;
  }
);
CommandSeparator.displayName = "CommandSeparator";


// ------------------------
// Command Shortcut
// ------------------------
const CommandShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography variant="caption" color="text.secondary" sx={{ ml: "auto", letterSpacing: 1 }}>
      {children}
    </Typography>
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
};
