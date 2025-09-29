"use client";

import * as React from "react";
import { Checkbox as MuiCheckbox, CheckboxProps, styled } from "@mui/material";
import { Box, Check } from "lucide-react";

const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  width: 16,
  height: 16,
  padding: 0,
  borderRadius: 2,
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  "&.Mui-checked": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  "&.Mui-disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 16,
  },
}));

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  return (
    <StyledCheckbox
      {...props}
      ref={ref}
      icon={<Box />}
      checkedIcon={<Check />}
    />
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
