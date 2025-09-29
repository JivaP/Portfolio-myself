"use client";

import * as React from "react";
import MuiAvatar, { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const AvatarRoot = styled(MuiAvatar)(({ theme }) => ({
  width: 40, // same as h-10 w-10 in Tailwind
  height: 40,
  fontSize: "0.875rem",
  fontWeight: 500,
  backgroundColor: theme.palette.grey[300],
  color: theme.palette.text.primary,
}));

export interface AvatarProps extends MuiAvatarProps {
  fallback?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, children, fallback, ...props }, ref) => (
    <AvatarRoot ref={ref} src={src} alt={alt} {...props}>
      {children || fallback}
    </AvatarRoot>
  )
);

Avatar.displayName = "Avatar";

export { Avatar };
