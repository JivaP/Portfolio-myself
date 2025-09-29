import * as React from "react";
import { Divider, DividerProps } from "@mui/material";

type SeparatorProps = DividerProps & {
  orientation?: "horizontal" | "vertical";
};

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = "horizontal", ...props }: any, ref) => {
    return <Divider ref={ref} orientation={orientation} {...props} />;
  }
);

Separator.displayName = "Separator";

export { Separator };
