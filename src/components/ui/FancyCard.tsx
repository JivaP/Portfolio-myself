"use client";

import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Typography, Paper } from "@mui/material";

export default function FancyCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Modern Dashboard UI",
      description: "Sleek interface for data visualization and analytics",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1170&q=80",
      features: ["Real-time data updates", "Customizable widgets", "Responsive design", "Dark/light mode"],
    },
    {
      title: "AI Analytics Panel",
      description: "Powerful insights with ML integration",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1170&q=80",
      features: ["Predictive analytics", "Automated reporting", "Interactive charts", "Seamless API integration"],
    },
    {
      title: "E-commerce Dashboard",
      description: "Track sales, orders, and customer behavior",
      img: "https://images.unsplash.com/photo-1581090700227-4c4f50b1d3a5?auto=format&fit=crop&w=1170&q=80",
      features: ["Inventory management", "Customer segmentation", "Sales forecasting", "Conversion tracking"],
    },
    {
      title: "Marketing Insights Panel",
      description: "Monitor campaigns and user engagement",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c44352f?auto=format&fit=crop&w=1170&q=80",
      features: ["Campaign tracking", "Conversion metrics", "A/B testing results", "Custom dashboards"],
    },
    {
      title: "Finance Overview",
      description: "Manage budgets and financial performance",
      img: "https://images.unsplash.com/photo-1612831455549-bf5368a99331?auto=format&fit=crop&w=1170&q=80",
      features: ["Budget tracking", "Expense management", "Profit & loss reports", "Forecasting tools"],
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        py: 12,
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1400, position: "relative" }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full pb-10"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <Paper
                elevation={6}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{
                  position: "relative",
                  height: 250,
                  overflow: "hidden",
                  borderRadius: 2,
                  cursor: "pointer",
                }}
              >
                {/* Card Image */}
                <Box
                  component="img"
                  src={card.img}
                  alt={card.title}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    display: "flex",
                    alignItems: "flex-end",
                    p: 2,
                  }}
                >
                  <Box sx={{ color: "white" }}>
                    <Typography variant="h6" fontWeight="bold">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {card.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Hover Panel */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 280,
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backdropFilter: "blur(4px)",
                    transition: "transform 0.5s",
                    transform: hoveredIndex === idx ? "translateX(0)" : "translateX(100%)",
                    p: 3,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      Key Features
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0, listStyle: "none" }}>
                      {card.features.map((feature, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor: "primary.main",
                              mr: 1,
                            }}
                          />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <Box className="custom-pagination" sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }} />
      </Box>
    </Box>
  );
}
