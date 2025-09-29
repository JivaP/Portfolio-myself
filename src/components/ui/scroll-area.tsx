"use client";

import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type ScrollAreaProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

const ScrollAreaRoot = styled("div")({
  position: "relative",
  overflow: "auto",
  width: "100%",
  height: "100%",
});

const ScrollAreaViewport = styled("div")({
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  overflow: "auto",
});

const ScrollAreaThumb = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  borderRadius: 9999,
  flex: 1,
  cursor: "pointer",
}));

const ScrollBar = ({
  orientation = "vertical",
  ...props
}: { orientation?: "vertical" | "horizontal" } & React.HTMLAttributes<HTMLDivElement>) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      flexDirection: orientation === "vertical" ? "column" : "row",
      touchAction: "none",
      userSelect: "none",
      transition: "background-color 0.2s",
      width: orientation === "vertical" ? 10 : "100%",
      height: orientation === "horizontal" ? 10 : "100%",
      bgcolor: "transparent",
      p: 0.5,
      borderLeft: orientation === "vertical" ? "1px solid transparent" : undefined,
      borderTop: orientation === "horizontal" ? "1px solid transparent" : undefined,
    }}
  >
    <ScrollAreaThumb />
  </Box>
);

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, ...props }, ref) => (
    <ScrollAreaRoot ref={ref} {...props}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
    </ScrollAreaRoot>
  )
);

ScrollArea.displayName = "ScrollArea";
