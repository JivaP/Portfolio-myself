
import React, { useState, useEffect, } from 'react'
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
  CircularProgress,
  Button as MuiButton,
  // IconButton,
  CardActions,
  CardHeader,
  Avatar,
  useTheme,
  Button
} from '@mui/material'

import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import type { Project } from '@/types'
import { getProjects } from '@/API/project'
import { ExternalLink, FilterIcon, SearchIcon } from 'lucide-react'
// import { AdminContext } from '@/hooks/Context'
// import { ABI_BASE_IMG } from '@/lib'

// Create a styled motion component for cards
const MotionCard = motion(Card)

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [categories, setCategories] = useState<string[]>([])
  const navigate = useNavigate()
  // const { setAdmin } = useContext(AdminContext);
  const theme = useTheme()

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await getProjects({
          orderBy: { createdAt: 'desc' }
        })
        setProjects(projectsData)
        setFilteredProjects(projectsData)

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(projectsData.map((p: any) => p.category))
        )
        setCategories(uniqueCategories as any)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  useEffect(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(project => {
        let technologies: any[] = []
        try {
          const parsed = project?.technologies || '[]'
          technologies = Array.isArray(parsed) ? parsed : [parsed]
        } catch {
          technologies = project?.technologies ? [project.technologies] : []
        }

        return (
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          technologies.some((tech: string) => tech.toLowerCase().includes(term))
        )
      })
    }

    setFilteredProjects(filtered)
  }, [projects, searchTerm, selectedCategory])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  if (loading) {
    return (
      <Container sx={{ py: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress />
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
            Loading projects...
          </Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            My Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            A collection of web applications, tools, and experiments I've built
            using modern technologies and best practices.
          </Typography>
        </motion.div>
      </Box>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, sm: 6, md: 8 }}>
            <TextField
              fullWidth
              placeholder=" Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon style={{ marginRight: 5, color: 'text.secondary' }} />
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              fullWidth
              select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              InputProps={{
                startAdornment: <FilterIcon style={{ marginRight: 5, color: 'text.secondary' }} />
              }}
            >
              <MenuItem value="all">All Categories</MenuItem>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </motion.div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', padding: '64px 0' }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {searchTerm || selectedCategory !== 'all'
              ? 'No projects match your search criteria.'
              : 'No projects found.'}
          </Typography>
          {(searchTerm || selectedCategory !== 'all') && (
            <MuiButton
              variant="outlined"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              sx={{ mt: 2 }}
            >
              Clear Filters
            </MuiButton>
          )}
        </motion.div>
      ) : (
        <Grid container spacing={3}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Parse technologies safely
              let technologies: any[] = []
              try {
                const parsed = project?.technologies || '[]'
                technologies = Array.isArray(parsed) ? parsed : [parsed]
              } catch {
                technologies = project.technologies ? [project.technologies] : []
              }

              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project._id}>
                  <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    {project.images && project.images.length > 0 && (
                      <CardMedia
                        component="img"
                        image={Array.isArray(project.images) ? ` ${project.images[0]}` : ` ${project.images}`}
                        alt={project.title}
                        sx={{ objectFit: 'cover', height: 200, cursor: 'pointer' }}
                      />
                    )}

                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: theme.palette.primary.main, color: '#fff' }}>
                          {project.title.charAt(0)}
                        </Avatar>
                      }
                      title={project.title}
                      subheader={project.category}
                      onClick={() => navigate(`/projects/${project._id}`)}
                      sx={{ cursor: 'pointer' }}
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {project.description}
                      </Typography>

                      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {technologies.map((tech: string, idx: number) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>

                    <CardActions>
                      {project.demo_url && (



                        <Button
                          fullWidth
                          size="small"
                          variant="outlined"
                          startIcon={<ExternalLink size={16} />}
                          component="a"
                          href={project.demo_url}
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                        // <MuiButton
                        //   size="small"
                        //   startIcon={<ExternalLinkIcon />}
                        //   href={project.demo_url}
                        //   target="_blank"
                        //   rel="noopener noreferrer"
                        // >
                        //   Live
                        // </MuiButton>
                      )}
                      {/* {project.github_url && (
                        <MuiButton
                          size="small"
                          startIcon={<GithubIcon />}
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </MuiButton>
                      )} */}
                    </CardActions>
                  </MotionCard>
                </Grid>
              )
            })}
          </AnimatePresence>
        </Grid>
      )}

      {/* Results count */}
      {filteredProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <Typography variant="body2" color="text.secondary">
            Showing {filteredProjects.length} of {projects.length} projects
          </Typography>
        </motion.div>
      )}
    </Container>
  )
}

export default ProjectsPage