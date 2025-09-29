
"use client"

import { motion } from "framer-motion"
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography
} from "@mui/material"
import { ExternalLink, Github } from "lucide-react"
import { Link } from "react-router-dom"
// import { ABI_BASE_IMG } from "@/lib"
import type { Project } from "@/types"

export const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container>
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Featured Projects
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            A showcase of my recent work and side projects
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, i) => (
            <Grid size={{ xs: 12, md: 3, lg: 3 }}  key={project._id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-4px)"
                    }
                  }}
                >
                  {/* Image */}
                  <CardMedia
                    component="img"
                    image={`${project.images[0]}`}
                    alt={project.title}
                    sx={{
                      width:"400x",
                      aspectRatio: "16/9",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.05)" }
                    }}
                  />

                  {/* Content */}
                  <CardHeader
                    title={
                      <Typography
                        variant="h6"
                        sx={{
                          "&:hover": { color: "primary.main" },
                          transition: "color 0.3s ease"
                        }}
                      >
                        {project.title}
                      </Typography>
                    }
                    subheader={
                      <Chip
                        label={project.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    }
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {project.description}
                    </Typography>

                    {/* Buttons */}
                    <Box display="flex" gap={1}>
                      {project?.demo_url && (
                        <Button
                          size="small"
                          variant="outlined"
                          component="a"
                          href={project.demo_url}
                          target="_blank"
                          startIcon={<ExternalLink size={18} />}
                        >
                          Demo
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          size="small"
                          variant="outlined"
                          component="a"
                          href={project.github_url}
                          target="_blank"
                          startIcon={<Github size={18} />}
                        >
                          Code
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* View All */}
        <Box textAlign="center" mt={6}>
          <Button variant="outlined" component={Link} to="/projects">
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
