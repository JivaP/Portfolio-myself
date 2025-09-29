"use client";

import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type InputProps = TextFieldProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "outlined", size = "small", ...props }, ref) => {
    return (
      <TextField
        {...props}
        inputRef={ref}
        variant={variant}
        size={size}
        className={className} // keep any custom className if needed
        InputProps={{
          ...props.InputProps,
          className: props.InputProps?.className, // no Tailwind
        }}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
