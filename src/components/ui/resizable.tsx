"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { Box } from "@mui/material";

type PanelGroupProps = React.ComponentProps<typeof ResizablePrimitive.PanelGroup>;

export const ResizablePanelGroup: React.FC<PanelGroupProps> = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={className}
    {...props}
    style={{
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: props.direction === "vertical" ? "column" : "row",
    }}
  />
);

export const ResizablePanel = ResizablePrimitive.Panel;

type ResizableHandleProps = React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
  direction: "horizontal" | "vertical"
};

export const ResizableHandle: React.FC<ResizableHandleProps> = ({
  withHandle,
  className,
  direction,
  ...props
}) => (
  <ResizablePrimitive.PanelResizeHandle
    {...props}
    className={className}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ccc",
      cursor: "col-resize",
      width: direction as any === "vertical" ? "100%" : "4px",
      height: direction as any === "vertical" ? "4px" : "100%",
      position: "relative",
    }}
  >
    {withHandle && (
      <Box
        sx={{
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 24,
          height: 16,
          borderRadius: 1,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      >
        <GripVertical style={{ width: 10, height: 10 }} />
      </Box>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);
