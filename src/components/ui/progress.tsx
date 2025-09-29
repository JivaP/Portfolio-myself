"use client";

import * as React from "react";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";

type ProgressProps = {
  value?: number;
} & LinearProgressProps;

export const Progress: React.FC<ProgressProps> = ({ value = 0, ...props }) => {
  return (
    <LinearProgress
      variant="determinate"
      value={value}
      {...props}
      sx={{
        height: 8, // approximate to h-2
        borderRadius: 1, // rounded-full
        backgroundColor: 'primary.light', // bg-primary/20
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'primary.main', // bg-primary
          transition: 'transform 0.3s ease',
        },
      }}
    />
  );
};
