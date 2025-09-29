"use client";

import * as React from "react";
import ButtonMUI, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "destructive";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends Omit<MuiButtonProps, "size" | "variant"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

// Define colors for variants
const variantStyles: Record<ButtonVariant, any> = {
  default: {
    backgroundColor: "#451A74",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#3a1560",
    },
  },
  secondary: {
    backgroundColor: "#6b7280",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#565e66",
    },
  },
  outline: {
    backgroundColor: "transparent",
    color: "#111827",
    border: "1px solid #d1d5db",
    "&:hover": {
      backgroundColor: "#f3f4f6",
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#111827",
    "&:hover": {
      backgroundColor: "#f3f4f6",
    },
  },
  destructive: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#dc2626",
    },
  },
};

// Define sizes
const sizeStyles: Record<ButtonSize, any> = {
  default: { height: 40, padding: "0 16px" },
  sm: { height: 36, padding: "0 12px" },
  lg: { height: 44, padding: "0 32px" },
  icon: { width: 40, height: 40, padding: 0 },
};

const StyledButton = styled(ButtonMUI, {
  shouldForwardProp: (prop) => prop !== "btnvariant" && prop !== "btnsize",
})<{ btnvariant: ButtonVariant; btnsize: ButtonSize }>(({ btnvariant, btnsize }) => ({
  borderRadius: 6,
  fontWeight: 500,
  fontSize: "0.875rem",
  textTransform: "none",
  ...variantStyles[btnvariant],
  ...sizeStyles[btnsize],
}));

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} btnvariant={variant} btnsize={size} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export { Button };
