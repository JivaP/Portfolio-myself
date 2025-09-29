"use client";

import * as React from "react";
import { ToggleButton, type ToggleButtonProps } from "@mui/material";

// Define allowed variants and sizes
type VariantType = "default" | "outline";
type SizeType = "default" | "sm" | "lg";

interface ToggleProps extends Omit<ToggleButtonProps, "size"> {
  size?: SizeType;
  variant?: VariantType;
}

// Mapping your variants/sizes to MUI props
const sizeMapping: Record<SizeType, "small" | "medium" | "large"> = {
  sm: "small",
  default: "medium",
  lg: "large",
};

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ size = "default", variant = "default", sx, ...props }, ref) => {
    return (
      <ToggleButton
        ref={ref}
        size={sizeMapping[size]}
        {...props}
        sx={{
          textTransform: "none",
          fontWeight: 500,
          gap: 1,
          border: variant === "outline" ? "1px solid" : "none",
          borderColor: variant === "outline" ? "divider" : "transparent",
          "&.Mui-selected": {
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          },
          "&:hover": {
            backgroundColor: variant === "outline" ? "action.hover" : undefined,
          },
          "& svg": { pointerEvents: "none" },
          ...sx,
        }}
      />
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
