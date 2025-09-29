"use client";

import * as React from "react";
import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import MuiCardHeader from "@mui/material/CardHeader";
import MuiCardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";

interface CardProps extends React.ComponentProps<typeof MuiCard> {
  sx?: SxProps<Theme>;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ sx, ...props }, ref) => (
  <MuiCard ref={ref} elevation={1} sx={{ borderRadius: 2, bgcolor: "background.paper", boxShadow: 1, ...sx }} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof MuiCardHeader>>(
  ({ sx, ...props }, ref) => <MuiCardHeader ref={ref} sx={{ padding: 2.5, ...sx }} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Typography>>(
  ({ sx, ...props }, ref) => <Typography ref={ref} variant="h5" component="h3" sx={{ fontWeight: 600, lineHeight: 1.2, ...sx }} {...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Typography>>(
  ({ sx, ...props }, ref) => <Typography ref={ref} variant="body2" color="text.secondary" sx={{ ...sx }} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof MuiCardContent>>(
  ({ sx, ...props }, ref) => <MuiCardContent ref={ref} sx={{ padding: 2.5, pt: 0, ...sx }} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof MuiCardActions>>(
  ({ sx, ...props }, ref) => <MuiCardActions ref={ref} sx={{ padding: 2.5, pt: 0, ...sx }} {...props} />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
