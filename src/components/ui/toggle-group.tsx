"use client";

import * as React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { type ToggleButtonGroupProps, type ToggleButtonProps } from "@mui/material";

// Define the variant and size types
type VariantType = "text" | "outlined" | "contained";
type SizeType = "small" | "medium" | "large";

// Props for the ToggleGroup wrapper
interface ToggleGroupProps extends Omit<ToggleButtonGroupProps, "size"> {
  size?: SizeType;
  variant?: VariantType;
  children: React.ReactNode;
}

// Props for individual ToggleGroupItem
interface ToggleGroupItemProps extends Omit<ToggleButtonProps, "size" | "variant"> {
  size?: SizeType;
  variant?: VariantType;
  children: React.ReactNode;
}

// ToggleGroup context to pass size/variant to children
const ToggleGroupContext = React.createContext<{ size?: SizeType; variant?: VariantType }>({
  size: "medium",
  variant: "outlined",
});

// ToggleGroup component
const ToggleGroup: React.FC<ToggleGroupProps> = ({ size = "medium", variant = "outlined", children, ...props }) => {
  return (
    <ToggleGroupContext.Provider value={{ size, variant }}>
      <ToggleButtonGroup {...props}>{children}</ToggleButtonGroup>
    </ToggleGroupContext.Provider>
  );
};

// ToggleGroupItem component
const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({ children, size, variant, ...props }: any) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleButton
      size={size || context.size}
      variant={variant || context.variant}
      {...props}
    >
      {children}
    </ToggleButton>
  );
};

export { ToggleGroup, ToggleGroupItem };
