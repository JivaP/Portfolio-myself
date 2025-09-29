"use client";

import * as React from "react";
import {
  RadioGroup as MUIRadioGroup,
  FormControlLabel,
  Radio,
  RadioProps,
  Stack,
} from "@mui/material";

type RadioGroupProps = React.ComponentProps<typeof MUIRadioGroup> & {
  children: React.ReactNode;
  row?: boolean;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, row = false, ...props }) => {
  return (
    <MUIRadioGroup {...props} row={row}>
      <Stack direction={row ? "row" : "column"} spacing={1}>
        {children}
      </Stack>
    </MUIRadioGroup>
  );
};

type RadioGroupItemProps = Omit<RadioProps, "color"> & {
  label?: React.ReactNode;
};

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ label, ...props }) => {
  return (
    <FormControlLabel
      value={props.value}
      control={
        <Radio
          {...props}
          sx={{
            width: 16,
            height: 16,
            padding: 0,
            '& .MuiSvgIcon-root': {
              fontSize: 16,
            },
            '&.Mui-checked': {
              color: 'primary.main',
            },
          }}
        />
      }
      label={label}
    />
  );
};
