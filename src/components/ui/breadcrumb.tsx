"use client";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string; // if missing, it’s the current page
}

interface CustomBreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number; // for ellipsis
}

export default function CustomBreadcrumbs({
  items,
  separator = <ChevronRight className="h-4 w-4" />,
  maxItems,
}: CustomBreadcrumbsProps) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={separator}
      maxItems={maxItems}
      sx={{ fontSize: "0.875rem" }}
    >
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            color="inherit"
            href={item.href}
            underline="hover"
            sx={{ transition: "color 0.2s" }}
          >
            {item.label}
          </Link>
        ) : (
          <Typography
            key={index}
            color="text.primary"
            sx={{ fontWeight: 500 }}
          >
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
