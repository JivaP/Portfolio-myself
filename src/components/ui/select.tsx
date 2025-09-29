"use client";

import * as React from "react";
import { Select as MUISelect, MenuItem, InputLabel, FormControl, SelectChangeEvent, FormHelperText } from "@mui/material";
import { Check } from "lucide-react";

type Option = { value: string | number; label: string };

type SelectProps = {
  value: string | number;
  onChange: (event: SelectChangeEvent) => void;
  options: Option[];
  label?: string;
  helperText?: string;
  disabled?: boolean;
} & React.ComponentProps<typeof MUISelect>;

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ value, onChange, options, label, helperText, disabled, ...props }, ref) => (
    <FormControl fullWidth variant="outlined" size="small" disabled={disabled} ref={ref}>
      {label && <InputLabel>{label}</InputLabel>}
      <MUISelect value={value} onChange={onChange} label={label} {...props}>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {opt.label}
              {value === opt.value && <Check size={16} />}
            </div>
          </MenuItem>
        ))}
      </MUISelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
);

Select.displayName = "Select";
