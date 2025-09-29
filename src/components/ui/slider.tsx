import * as React from "react"
import MuiSlider, { SliderProps as MuiSliderProps } from "@mui/material/Slider"

interface SliderProps extends MuiSliderProps {
  // You can add custom props if needed
}

const Slider: React.FC<SliderProps> = (props) => {
  return <MuiSlider {...props} />
}

export { Slider }
