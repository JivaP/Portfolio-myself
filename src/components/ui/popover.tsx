"use client";

import * as React from "react";
import { Popover as MUIPopover, PopoverProps } from "@mui/material";

type PopoverContentProps = PopoverProps & {
  children: React.ReactNode;
};

export const Popover = MUIPopover;

export const PopoverTrigger: React.FC<{
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ children }) => <>{children}</>;

export const PopoverAnchor: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  anchorEl,
  open,
  onClose,
  anchorOrigin = { vertical: "bottom", horizontal: "center" },
  transformOrigin = { vertical: "top", horizontal: "center" },
  ...props
}) => {
  return (
    <MUIPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      PaperProps={{
        sx: {
          width: 288, // w-72
          borderRadius: 1,
          boxShadow: 3,
          p: 2,
        },
      }}
      {...props}
    >
      {children}
    </MUIPopover>
  );
};
