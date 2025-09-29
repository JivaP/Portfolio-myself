

import * as React from "react";
import MuiAlert, { AlertProps as MuiAlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { styled } from "@mui/material/styles";

// ✅ Styled wrapper if you want to customize globally
const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  fontSize: "0.875rem",
}));

export interface CustomAlertProps extends MuiAlertProps {
  title?: string;
  description?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, CustomAlertProps>(
  ({ title, description, children, ...props }, ref) => (
    <StyledAlert ref={ref} {...props}>
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      {description || children}
    </StyledAlert>
  )
);

Alert.displayName = "Alert";

export { Alert };
