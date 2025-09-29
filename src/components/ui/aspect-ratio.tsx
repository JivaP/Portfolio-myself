"use client";

import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";

export interface AspectRatioProps extends BoxProps {
    ratio?: number; // width / height, e.g. 16/9, 4/3, 1 (square)
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
    ({ ratio = 16 / 9, children, sx, ...props }, ref) => (
        <Box
            ref={ref}
            sx={{
                position: "relative",
                width: "100%",
                paddingTop: `${100 / ratio}%`, // Maintain aspect ratio
                ...sx,
            }}
            {...props}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                {children}
            </Box>
        </Box>
    )
);

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
