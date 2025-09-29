"use client";

import * as React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

export interface BadgeProps extends Omit<ChipProps, "variant" | "color"> {
  variant?: BadgeVariant;
  label: React.ReactNode;
}

// Updated variant colors
const variantStyles: Record<BadgeVariant, any> = {
  default: {
    backgroundColor: "#451A74", // your brand default color
    color: "#ffffff",
  },
  secondary: {
    backgroundColor: "#6b7280", // gray/secondary
    color: "#ffffff",
  },
  destructive: {
    backgroundColor: "#ef4444", // red/destructive
    color: "#ffffff",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#111827", // foreground
    border: "1px solid #d1d5db", // gray border
  },
};

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "badgevariant",
})<{ badgevariant: BadgeVariant }>(({ badgevariant }) => ({
  fontWeight: 600,
  fontSize: "0.75rem",
  height: "auto",
  padding: "0.25rem 0.625rem",
  borderRadius: 6,
  ...variantStyles[badgevariant],
}));

const Badge = ({ variant = "default", label, ...props }: BadgeProps) => {
  return <StyledChip badgevariant={variant} label={label} {...props} />;
};

export { Badge };
