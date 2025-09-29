"use client";

import * as React from "react";
import FormLabel, { FormLabelProps } from "@mui/material/FormLabel";

type LabelProps = FormLabelProps;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, sx, ...props }, ref) => {
    return (
      <FormLabel
        ref={ref}
        {...props}
        sx={{
          fontSize: '0.875rem', // text-sm
          fontWeight: 500,       // font-medium
          lineHeight: 1.5,       // leading-none equivalent
          opacity: props.disabled ? 0.7 : 1,
          cursor: props.disabled ? 'not-allowed' : 'default',
          ...sx,
        }}
      >
        {children}
      </FormLabel>
    );
  }
);

Label.displayName = "Label";

export { Label };
