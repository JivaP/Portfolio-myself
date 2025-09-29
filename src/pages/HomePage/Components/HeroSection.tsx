// import React from "react";
import { Box, Container, Typography, Button, useTheme, alpha } from "@mui/material";
import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { glitterText } from "@/components/ui/glitterStyles";

export function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 2 },
        overflow: "hidden",
        bgcolor: theme.palette.background.default,
        "--animate-first": "moveVertical 30s ease infinite",
        "--animate-second": "moveInCircle 20s reverse infinite",
        "--animate-third": "moveInCircle 40s linear infinite",
        "--animate-fourth": "moveHorizontal 40s ease infinite",
        "--animate-fifth": "moveInCircle 20s ease infinite",
        "@keyframes moveHorizontal": {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        "@keyframes moveInCircle": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "@keyframes moveVertical": {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      }}
    >
      {/* Animated Polygons */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "400px",
            height: "400px",
            clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)",
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, transparent)`,
            filter: "blur(80px)",
            animation: "var(--animate-first)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "15%",
            right: "5%",
            width: "500px",
            height: "500px",
            clipPath: "polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)",
            background: `linear-gradient(225deg, ${
              theme.palette.secondary?.main || theme.palette.primary.light
            }, transparent)`,
            filter: "blur(100px)",
            animation: "var(--animate-second)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "300px",
            height: "300px",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            background: `linear-gradient(45deg, ${theme.palette.primary.light}, transparent)`,
            filter: "blur(60px)",
            animation: "var(--animate-third)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "30%",
            left: "20%",
            width: "350px",
            height: "350px",
            clipPath: "polygon(0% 0%, 80% 0%, 100% 80%, 0% 100%)",
            background: `linear-gradient(60deg, ${theme.palette.secondary.main}, transparent)`,
            filter: "blur(70px)",
            animation: "var(--animate-fourth)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "20%",
            width: "250px",
            height: "250px",
            clipPath: "polygon(10% 0%, 90% 0%, 100% 90%, 0% 100%)",
            background: `linear-gradient(120deg, ${theme.palette.primary.main}, transparent)`,
            filter: "blur(50px)",
            animation: "var(--animate-fifth)",
          }}
        />
      </Box>

      {/* Hero Content */}
      <Container sx={{ position: "relative", textAlign: "center" }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Frontend Developer &{" "}
            <Box component="span" sx={{ ...glitterText, display: "inline-block" }}>
              Digital Creator
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto", mb: 5 }}
          >
            I build modern web applications with React, Node.js, and cutting-edge
            technologies. Passionate about creating digital experiences that make a
            difference.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={20} />}
            >
              View My Work
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{ color: "text.primary", borderColor: "text.secondary" }}
            >
              Get In Touch
            </Button>
          </Box>

          {/* Social Buttons */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            <Button
              component="a"
              href="#"
              variant="outlined"
              startIcon={<Linkedin size={18} />}
              sx={{
                borderRadius: 28,
                borderColor: alpha(theme.palette.text.secondary, 0.5),
                color: "text.primary",
                "&:hover": {
                  borderColor: theme.palette.text.secondary,
                  backgroundColor: alpha(theme.palette.text.secondary, 0.1),
                },
              }}
            >
              LinkedIn
            </Button>
            <Button
              component="a"
              href="#"
              variant="outlined"
              startIcon={<Github size={18} />}
              sx={{
                borderRadius: 28,
                borderColor: alpha(theme.palette.text.secondary, 0.5),
                color: "text.primary",
                "&:hover": {
                  borderColor: theme.palette.text.secondary,
                  backgroundColor: alpha(theme.palette.text.secondary, 0.1),
                },
              }}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="mailto:example@email.com"
              variant="outlined"
              startIcon={<Mail size={18} />}
              sx={{
                borderRadius: 28,
                borderColor: alpha(theme.palette.text.secondary, 0.5),
                color: "text.primary",
                "&:hover": {
                  borderColor: theme.palette.text.secondary,
                  backgroundColor: alpha(theme.palette.text.secondary, 0.1),
                },
              }}
            >
              Email
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
