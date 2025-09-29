"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { Box, Paper, Stack, Typography } from "@mui/material";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = { config: ChartConfig };

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a <ChartContainer />");
  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <Box
        ref={ref}
        data-chart={chartId}
        sx={{
          display: "flex",
          justifyContent: "center",
          aspectRatio: "16/9",
          fontSize: "0.75rem",
          "& .recharts-cartesian-axis-tick text": { fill: "text.secondary" },
          "& .recharts-cartesian-grid line": { stroke: "divider" },
          "& .recharts-dot": { stroke: "transparent" },
          "& .recharts-layer": { outline: "none" },
          "& .recharts-sector": { outline: "none", stroke: "transparent" },
          "& .recharts-surface": { outline: "none" },
        }}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </Box>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, cfg]) => cfg.theme || cfg.color);
  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  }
>(({ active, payload, hideLabel = false, hideIndicator = false, indicator = "dot", label,  nameKey }, ref) => {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  const tooltipLabel = !hideLabel && payload.length
    ? label || payload[0].name || "value"
    : null;

  return (
    <Paper
      ref={ref}
      elevation={3}
      sx={{ p: 1.5, minWidth: 120, fontSize: "0.75rem", display: "grid", gap: 1.5 }}
    >
      {tooltipLabel && <Typography fontWeight={500}>{tooltipLabel}</Typography>}
      <Stack spacing={1.5}>
        {payload.map((item, idx) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = config[key];
          const indicatorColor = itemConfig?.color || item.color;

          return (
            <Stack
              key={idx}
              direction="row"
              alignItems={indicator === "dot" ? "center" : "flex-start"}
              spacing={1}
            >
              {!hideIndicator && (
                <Box
                  sx={{
                    width: indicator === "dot" ? 10 : 4,
                    height: 10,
                    bgcolor: indicatorColor,
                    borderRadius: 0.25,
                  }}
                />
              )}
              <Stack direction="row" justifyContent="space-between" flex={1}>
                <Typography color="text.secondary">{itemConfig?.label || item.name}</Typography>
                <Typography fontFamily="monospace">{item.value?.toLocaleString()}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Paper>
  );
});
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: NonNullable<RechartsPrimitive.LegendProps['payload']>;
    hideIcon?: boolean;
    nameKey?: string;
  }
>(({ payload, hideIcon = false, nameKey, ...props }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <Stack
      ref={ref}
      direction="row"
      justifyContent="center"
      spacing={2}
      pt={1}
      {...props}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = config[key];
        return (
          <Stack key={item.value} direction="row" alignItems="center" spacing={1.5}>
            {!hideIcon && (
              itemConfig?.icon ? <itemConfig.icon /> : (
                <Box sx={{ width: 8, height: 8, bgcolor: item.color, borderRadius: 0.25 }} />
              )
            )}
            <Typography>{itemConfig?.label}</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

 export function getPayloadConfigFromPayload(config: ChartConfig, payload: any, key: string) {
  if (typeof payload !== "object" || !payload) return undefined;
  const payloadPayload = payload.payload && typeof payload.payload === "object" ? payload.payload : undefined;
  const configLabelKey = key in payload ? payload[key] : payloadPayload?.[key] || key;
  return config[configLabelKey] || config[key];
}

export {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
  ChartStyle,
};
