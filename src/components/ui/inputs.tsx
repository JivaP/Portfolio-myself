"use client";

import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type InputProps = TextFieldProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "outlined", size = "small", InputProps, inputProps, sx, ...props }, ref) => {
    return (
      <TextField
        {...props}
        inputRef={ref}
        variant={variant}
        size={size}
        InputProps={{
          ...InputProps,
          sx: {
            backgroundColor: 'transparent',
            fontSize: '1rem',
            boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
            },
            '&.Mui-disabled': {
              cursor: 'not-allowed',
              opacity: 0.5,
            },
            ...InputProps?.sx,
          },
        }}
        inputProps={{
          ...inputProps,
          sx: {
            fontSize: '0.875rem', // equivalent to md:text-sm
            ...inputProps?.sx,
          },
        }}
        sx={sx}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
