import * as React from "react";
import { Tabs as MuiTabs, Tab, Box } from "@mui/material";

interface TabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  children: React.ReactNode;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabsWrapper: React.FC<TabsProps> = ({ value, onChange, children }) => {
  return (
    <MuiTabs
      value={value}
      onChange={onChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      {children}
    </MuiTabs>
  );
};

export const TabTrigger: React.FC<{ label: string; index: number }> = ({ label, index }) => {
  return <Tab label={label} value={index} />;
};

export const TabContent: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};
