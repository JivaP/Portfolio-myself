"use client"

import * as React from "react"
import MuiSwitch, { SwitchProps as MuiSwitchProps } from "@mui/material/Switch"
import { styled } from "@mui/material/styles"

const CustomSwitch = styled(MuiSwitch)(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(16px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    width: 16,
    height: 16,
    borderRadius: "50%",
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(["transform"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.grey[400],
    boxSizing: "border-box",
  },
}))

type SwitchProps = MuiSwitchProps

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  return <CustomSwitch ref={ref} {...props} />
})

Switch.displayName = "Switch"

export { Switch }
