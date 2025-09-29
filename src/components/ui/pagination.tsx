"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button, ButtonProps, Stack } from "@mui/material";

type PaginationProps = React.ComponentProps<"nav">;

export const Pagination: React.FC<PaginationProps> = ({ children, ...props }) => (
  <nav aria-label="pagination" {...props}>
    <Stack direction="row" spacing={1} justifyContent="center">
      {children}
    </Stack>
  </nav>
);

export const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ children, ...props }, ref) => (
    <ul ref={ref} {...props} style={{ display: 'flex', gap: '4px', padding: 0, margin: 0 }}>
      {children}
    </ul>
  )
);
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ children, ...props }, ref) => (
    <li ref={ref} {...props}>
      {children}
    </li>
  )
);
PaginationItem.displayName = "PaginationItem";

export type PaginationLinkProps = {
  isActive?: boolean;
  size?: ButtonProps["size"];
} & React.ComponentProps<"a">;

export const PaginationLink: React.FC<any> = ({
  isActive,
  size = "medium",
  children,
  ...props
}) => (
  <Button
    {...props}
    variant={isActive ? "outlined" : "text"}
    size={size}
    sx={{
      minWidth: 36,
      height: 36,
      px: 1.5,
      textTransform: "none",
      fontWeight: isActive ? 600 : 400,
    }}
  >
    {children}
  </Button>
);
PaginationLink.displayName = "PaginationLink";

export const PaginationPrevious: React.FC<React.ComponentProps<typeof PaginationLink>> = ({
  children,
  ...props
}) => (
  <PaginationLink aria-label="Go to previous page" {...props}>
    <ChevronLeft style={{ marginRight: 4 }} />
    <span>{children || "Previous"}</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

export const PaginationNext: React.FC<React.ComponentProps<typeof PaginationLink>> = ({
  children,
  ...props
}) => (
  <PaginationLink aria-label="Go to next page" {...props}>
    <span>{children || "Next"}</span>
    <ChevronRight style={{ marginLeft: 4 }} />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

export const PaginationEllipsis: React.FC<React.ComponentProps<"span">> = ({ ...props }) => (
  <span
    aria-hidden
    {...props}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
    }}
  >
    <MoreHorizontal />
    <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
      More pages
    </span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";
