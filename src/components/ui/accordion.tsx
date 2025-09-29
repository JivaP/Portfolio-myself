
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown } from "lucide-react";

interface CustomAccordionProps {
  items: {
    id: string | number;
    title: string;
    content: React.ReactNode;
  }[];
}

export default function CustomAccordion({ items }: CustomAccordionProps) {
  return (
    <div>
      {items.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ChevronDown className="h-5 w-5 text-gray-600" />}
            aria-controls={`panel-${item.id}-content`}
            id={`panel-${item.id}-header`}
          >
            <Typography variant="subtitle1" fontWeight="600">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
