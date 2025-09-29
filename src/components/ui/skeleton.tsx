import * as React from "react"
import MuiSkeleton, { SkeletonProps as MuiSkeletonProps } from "@mui/material/Skeleton"

interface SkeletonProps extends MuiSkeletonProps {
  // You can add additional props if needed
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <MuiSkeleton {...props} />
}

export { Skeleton }
