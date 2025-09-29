"use client";

import * as React from "react";
import { Box, Paper, Popper } from "@mui/material";

type HoverCardProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
};

export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  content,
  openDelay = 100,
  closeDelay = 100,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const openTimeoutRef = React.useRef<number>(0);
  const closeTimeoutRef = React.useRef<number>(0);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    window.clearTimeout(closeTimeoutRef.current);
    openTimeoutRef.current = window.setTimeout(() => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    }, openDelay);
  };

  const handleMouseLeave = () => {
    window.clearTimeout(openTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpen(false);
    }, closeDelay);
  };

  return (
    <>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        display="inline-block"
      >
        {children}
      </Box>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="top"
        disablePortal={false}
        modifiers={[
          { name: "offset", options: { offset: [0, 8] } },
        ]}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
            minWidth: 200,
            borderRadius: 1,
            pointerEvents: "auto",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </Paper>
      </Popper>
    </>
  );
};
