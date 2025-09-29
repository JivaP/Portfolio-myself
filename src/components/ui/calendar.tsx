"use client";

import * as React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DayPickerProps, Modifiers } from "react-day-picker";
import { Button } from "./Button";

type CalendarProps = DayPickerProps & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
};

export function Calendar({ buttonVariant = "ghost", ...props }: CalendarProps) {
  return (
    <DayPicker
      {...props}
      components={{
        DayButton: (dayProps) => <CalendarDayButton {...dayProps} buttonVariant={buttonVariant} />,
        ...props.components,
      }}
    />
  );
}

interface CalendarDayButtonProps {
  day: Date;
  modifiers: Modifiers;
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  [key: string]: any;
}

export const CalendarDayButton = React.forwardRef<HTMLButtonElement, CalendarDayButtonProps>(
  ({ day, modifiers, buttonVariant = "ghost", ...props }, ref) => {
    const isSelectedSingle =
      modifiers.selected &&
      !modifiers.range_start &&
      !modifiers.range_end &&
      !modifiers.range_middle;

    // Determine background and text color
    const bgColor = isSelectedSingle
      ? "#451A74"
      : modifiers.range_start || modifiers.range_end
        ? "#451A74"
        : modifiers.range_middle
          ? "#E0E0E0"
          : "transparent";

    const textColor =
      isSelectedSingle || modifiers.range_start || modifiers.range_end ? "#ffffff" : "#111827";

    const hoverBgColor = isSelectedSingle
      ? "#3a1560"
      : modifiers.range_middle
        ? "#d6d6d6"
        : "#f5f5f5";

    return (
      <Button
        ref={ref}
        size="icon"
        variant={buttonVariant}
        style={{
          minWidth: 32,
          minHeight: 32,
          borderRadius: modifiers.range_middle ? 0 : 4,
          backgroundColor: bgColor,
          color: textColor,
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = hoverBgColor))}
        onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = bgColor))}
        data-selected-single={isSelectedSingle}
        data-range-start={modifiers.range_start}
        data-range-middle={modifiers.range_middle}
        data-range-end={modifiers.range_end}
        {...props}
      >
        {day.getDate()}
      </Button>
    );
  }
);

CalendarDayButton.displayName = "CalendarDayButton";
