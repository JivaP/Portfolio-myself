"use client";

import * as React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    AccordionProps,
    Typography,
} from "@mui/material";
import { Expand } from "lucide-react";


// Root container (equivalent to Collapsible)
const Collapsible = React.forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
    return <Accordion ref={ref} {...props} />;
});
Collapsible.displayName = "Collapsible";

// Trigger (header) equivalent
interface CollapsibleTriggerProps {
    children: React.ReactNode;
}

const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({ children }) => {
    return (
        <AccordionSummary expandIcon={<Expand />}>
            <Typography>{children}</Typography>
        </AccordionSummary>
    );
};
CollapsibleTrigger.displayName = "CollapsibleTrigger";

// Content (body) equivalent
interface CollapsibleContentProps {
    children: React.ReactNode;
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ children }) => {
    return <AccordionDetails>{children}</AccordionDetails>;
};
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
