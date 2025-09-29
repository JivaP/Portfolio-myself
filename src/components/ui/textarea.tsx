import * as React from "react";
import { TextField, TextFieldProps } from "@mui/material";

const Textarea = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextField
        {...props}
        ref={ref}
        multiline
        minRows={3} // equivalent to min-height
        fullWidth
        variant="outlined"
        className={className}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
