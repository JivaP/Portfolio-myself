


import React from 'react'
import {
  Plus,
  Star,
  Search,
  Grid as GridIcon,
  List as ListIcon,
  Filter,
  Eye,
  EyeOff,
} from 'lucide-react'
import {
  createProject,
  DeleteProject,
  getProjects,
  toggleProjectStatus,
  updateProject,
} from '@/API/project'
import { useAuth } from '@/hooks/useAuth'
import { Project } from '@/types'
import toast from 'react-hot-toast'

// MUI Imports
import {
  Button,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Select,
  InputAdornment,
  Grid,
  Typography,
  Box,
  // IconButton,
} from '@mui/material'

// Framer Motion
import { motion } from 'framer-motion'

// Local Components
import { ProjectCard } from './Components/ProjectCard'
import { ProjectTable } from './Components/ProjectTable'
import { ProjectModal } from './Components/ProjectModal'
import { AdminContext } from '@/hooks/Context'
// import { set } from 'date-fns'

export interface ProjectForm {
  title: string
  description: string
  images?: string[]
  demo_url?: string
  github_url?: string
  technologies: string
  category: string
  featured: boolean
  files?: File[]
}

const AdminProjects: React.FC = () => {
  const { user } = useAuth()
  const [projects, setProjects] = React.useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>([])
  const [loading, setLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [statusFilter, setStatusFilter] = React.useState<'all' | 'active' | 'inactive'>('all')
  const [viewMode, setViewMode] = React.useState<'grid' | 'table'>('grid')
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  console.log(isModalOpen);
  const [editingProject, setEditingProject] = React.useState<Project | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { setAdmin, admin } = React.useContext(AdminContext);
  React.useEffect(() => {
    loadProjects()
  }, [])

  React.useEffect(() => {
    filterProjects()
  }, [projects, searchTerm, statusFilter])

  const loadProjects = async () => {
    try {
      const projectsData = await getProjects()
      setProjects(projectsData)
      setFilteredProjects(projectsData)
    } catch (error) {
      console.error('Error loading projects:', error)
      toast.error('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  const filterProjects = () => {
    let filtered = projects

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((project) =>
        statusFilter === 'active' ? project.status === 1 : project.status === 0
      )
    }

    setFilteredProjects(filtered)
  }

  const openModal = (project?: Project) => {
    setEditingProject(project || null)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setEditingProject(null)
    setIsModalOpen(false)
  }

  const onSubmit = async (data: ProjectForm) => {
    if (!user) return

    setIsSubmitting(true)
    try {
      const formData = new FormData()
      formData.append('title', data.title)
      formData.append('description', data.description)

      if (Array.isArray(data.files) && data.files.length > 0) {
        data.files.forEach((file) => formData.append('images', file))
      }

      formData.append('category', data.category)

      const technologies = data.technologies
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t.length > 0)
      formData.append('technologies', technologies.join(','))

      if (data.demo_url) formData.append('demo_url', data.demo_url)
      if (data.github_url) formData.append('github_url', data.github_url)

      formData.append('featured', data.featured ? '1' : '0')
      formData.append('status', editingProject ? String(editingProject.status) : '1')

      if (editingProject) {
        await updateProject(editingProject._id, formData)
        toast.success('Project updated successfully')
      } else {
        await createProject(formData)
        toast.success('Project created successfully')
      }

      await loadProjects()
      closeModal()
    } catch (error) {
      console.error('Error saving project:', error)
      toast.error('Failed to save project')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    try {
      await DeleteProject(id)
      toast.success('Project deleted successfully')
      await loadProjects()
    } catch (error) {
      console.error('Error deleting project:', error)
      toast.error('Failed to delete project')
    }
  }

  const handleToggleStatus = async (project: Project) => {
    try {
      await toggleProjectStatus(project._id, { status: project.status === 1 ? 0 : 1 })
      toast.success(
        `Project ${project.status === 1 ? 'deactivated' : 'activated'} successfully`
      )
      await loadProjects()
    } catch (error) {
      console.error('Error updating project status:', error)
      toast.error('Failed to update project status')
    }
  }

  const handleToggleFeatured = async (project: Project) => {
    try {
      const formData = new FormData()
      formData.append('featured', Number(project.featured) > 0 ? '0' : '1')
      formData.append('updatedAt', new Date().toISOString())
      await updateProject(project._id, formData)
      toast.success(
        `Project ${Number(project.featured) > 0 ? 'removed from' : 'added to'} featured`
      )
      await loadProjects()
    } catch (error) {
      console.error('Error updating project featured status:', error)
      toast.error('Failed to update project featured status')
    }
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={256}>
        <Box
          sx={{
            width: 32,
            height: 32,
            border: '4px solid',
            borderColor: 'primary.main',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      </Box>
    )
  }

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {/* Header */}
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Projects
          </Typography>
          <Typography color="text.secondary">Manage your portfolio projects</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Plus />}
          onClick={() => setAdmin({ ...admin, projects: true })}
        >
          Add Project
        </Button>
      </Box>

      {/* Filters */}
      <Card>
        <CardContent>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" gap={2}>
            <TextField
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{ width: { xs: '100%', md: 300 } }}
            />

            <Box display="flex" alignItems="center" gap={2}>
              <Filter />
              <Select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as 'all' | 'active' | 'inactive')
                }
                size="small"
              >
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>

              <Box border={1} borderRadius={1} display="flex" overflow="hidden">
                <Button
                  variant={viewMode === 'grid' ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => setViewMode('grid')}
                >
                  <GridIcon />
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => setViewMode('table')}
                >
                  <ListIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Stats Summary */}
      <Grid container spacing={3}>
        {[
          { label: 'Total Projects', value: projects.length, icon: <ListIcon /> },
          { label: 'Active', value: projects.filter((p) => p.status === 1).length, icon: <Eye /> },
          { label: 'Inactive', value: projects.filter((p) => p.status === 0).length, icon: <EyeOff /> },
          { label: 'Featured', value: projects.filter((p) => Number(p.featured) > 0).length, icon: <Star /> },
        ].map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {stat.label}
                      </Typography>
                      <Typography variant="h5" fontWeight="bold">
                        {stat.value}
                      </Typography>
                    </Box>
                    <Box p={1} borderRadius="50%" bgcolor="primary.main" color="white">
                      {stat.icon}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Projects Content */}
      {
        filteredProjects.length === 0 ? (
          <Card>
            <CardContent sx={{ py: 8, textAlign: 'center' }}>
              <Typography color="text.secondary" mb={2}>
                {searchTerm || statusFilter !== 'all'
                  ? 'No projects match your filters.'
                  : 'No projects yet.'}
              </Typography>
              {!searchTerm && statusFilter === 'all' && (
                <Button variant="contained" startIcon={<Plus />} onClick={() => openModal()}>
                  Add Your First Project
                </Button>
              )}
            </CardContent>
          </Card>
        ) : viewMode === 'grid' ? (
          <Grid container spacing={3}>
            {filteredProjects.map((project) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project._id}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <ProjectCard
                    project={project}
                    onEdit={openModal}
                    onDelete={handleDeleteProject}
                    onToggleStatus={handleToggleStatus}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <ProjectTable
            projects={filteredProjects}
            onEdit={openModal}
            onDelete={handleDeleteProject}
            onToggleStatus={handleToggleStatus}
            onToggleFeatured={handleToggleFeatured}
          />
        )
      }

      {/* Project Modal */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ProjectModal
          isOpen={admin.projects}
          editingProject={editingProject}
          onClose={() => setAdmin({ ...admin, projects: false })}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
        />
      </motion.div>
    </Box >
  )
}

export default AdminProjects
