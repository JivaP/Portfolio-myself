import React from 'react'
import { useParams } from 'react-router-dom'
import type { Project } from '@/types'
import { GETSingleProject } from '@/API/project'
import { ImageSlider } from './admin/AdminProjects/Components/ImageSlider'

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams()
  const [project, setProject] = React.useState<Project | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const loadProject = async () => {
      if (!id) return
      try {
        const p = await GETSingleProject(id)
        setProject(p)
      } catch (error) {
        console.error('Error loading project:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProject()
  }, [id])

  if (loading) return <div className="p-8">Loading...</div>
  if (!project) return <div className="p-8">Project not found.</div>

  // 🔹 Safe JSON parse
  let technologies: any[] = []
  try {
    const parsed = project?.technologies || '[]'
    technologies = Array.isArray(parsed) ? parsed : [parsed]
  } catch {
    technologies = project.technologies ? [project.technologies] : []
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="mb-6">
        <ImageSlider
          images={Array.isArray(project.images) ? project.images : [project.images]}
          alt={project.title}
        />
      </div>
      <p className="text-muted-foreground mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((t: string, index: number) => (
          <span key={index} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            Live demo
          </a>
        )}
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            Source code
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectDetailPage
