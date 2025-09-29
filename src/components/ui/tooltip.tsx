"use client";

import * as React from "react";
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from "@mui/material";

// Optional wrapper for providing context, like Radix TooltipProvider
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

interface TooltipProps extends MuiTooltipProps {}

// Root component (acts like Radix `Tooltip.Root`)
const Tooltip: React.FC<TooltipProps> = ({ children, title, ...props }) => {
  return (
    <MuiTooltip
      title={title ?? ""}
      arrow
      enterDelay={200} // similar to Radix animation offset
      leaveDelay={100}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
};

// Trigger component (Radix `Tooltip.Trigger`) is implicit in MUI: just wrap the element
const TooltipTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// Content component (Radix `Tooltip.Content`) is managed by MUI internally
const TooltipContent = null;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
