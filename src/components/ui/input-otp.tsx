"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";
import { Box, Stack } from "@mui/material";

const InputOTP = ({ containerClassName, className, ...props }: React.ComponentProps<typeof OTPInput>) => {
  return <OTPInput containerClassName={containerClassName} className={className} {...props} />;
};
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Stack
      ref={ref}
      direction="row"
      spacing={1}
      {...props}
    />
  )
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { index: number }>(
  ({ index, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

    return (
      <Box
        ref={ref}
        sx={{
          position: "relative",
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          boxShadow: isActive ? 1 : 0,
          zIndex: isActive ? 10 : "auto",
        }}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 1,
                height: 16,
                bgcolor: "text.primary",
                animation: "blink 1s infinite",
              }}
            />
          </Box>
        )}
      </Box>
    );
  }
);
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <Box
      ref={ref}
      component="span"
      sx={{ display: "flex", alignItems: "center", mx: 0.5 }}
      role="separator"
      {...props}
    >
      <Minus />
    </Box>
  )
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
