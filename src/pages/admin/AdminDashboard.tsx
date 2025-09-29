import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { FolderOpen, FileText, Mail,  Calendar } from 'lucide-react'

import type { Project, BlogPost, ContactMessage } from '@/types'
import { formatDate } from '../../lib/utils'
import { getProjects } from '@/API/project'
import { getBlog_posts } from '@/API/blogPosts'
import { getContact_messages } from '@/API/Contact'

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = React.useState({
    totalProjects: 0,
    featuredProjects: 0,
    totalBlogPosts: 0,
    publishedPosts: 0,
    totalMessages: 0,
    unreadMessages: 0
  })
  const [recentProjects, setRecentProjects] = React.useState<Project[]>([])
  const [recentPosts, setRecentPosts] = React.useState<BlogPost[]>([])
  const [recentMessages, setRecentMessages] = React.useState<ContactMessage[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [projects, blogPosts, messages] = await Promise.all([
          getProjects({ orderBy: { createdAt: 'desc' } }),
          getBlog_posts(),
          getContact_messages({ orderBy: { createdAt: 'desc' } })
        ])

        // Calculate stats
        const featuredProjectsCount = projects.filter((p: { featured: any }) => Number(p.featured) > 0).length
        const publishedPostsCount = blogPosts.filter((p: BlogPost) => Number(p.published) > 0).length
        const unreadMessagesCount = messages.filter((m: ContactMessage) => Number(m.read) === 0).length

        setStats({
          totalProjects: projects.length,
          featuredProjects: featuredProjectsCount,
          totalBlogPosts: blogPosts.length,
          publishedPosts: publishedPostsCount,
          totalMessages: messages.length,
          unreadMessages: unreadMessagesCount
        })

        // Set recent items
        setRecentProjects(projects.slice(0, 3))
        setRecentPosts(blogPosts.slice(0, 3))
        setRecentMessages(messages.slice(0, 5))
      } catch (error) {
        console.error('Error loading dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your portfolio admin panel</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProjects}</div>
            <p className="text-xs text-muted-foreground">
              {stats.featuredProjects} featured
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBlogPosts}</div>
            <p className="text-xs text-muted-foreground">
              {stats.publishedPosts} published
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMessages}</div>
            <p className="text-xs text-muted-foreground">
              {stats.unreadMessages} unread
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Latest project updates</CardDescription>
              </div>
              <Link
                to="/admin/projects"
                className="text-sm text-primary hover:underline"
              >
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {recentProjects.length === 0 ? (
              <p className="text-muted-foreground text-sm">No projects yet</p>
            ) : (
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project._id} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-muted">
                      <img
                        src={`${project?.images[0]}`}
                        alt={project?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{project.title}</p>
                      <p className="text-xs text-muted-foreground">{project.category}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {formatDate(project.created_at)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Blog Posts */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Blog Posts</CardTitle>
                <CardDescription>Latest articles</CardDescription>
              </div>
              <Link
                to="/admin/blog"
                className="text-sm text-primary hover:underline"
              >
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {recentPosts.length === 0 ? (
              <p className="text-muted-foreground text-sm">No blog posts yet</p>
            ) : (
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post._id} className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium line-clamp-2">{post.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded ${Number(post.published) > 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                          }`}>
                          {Number(post.published) > 0 ? 'Published' : 'Draft'}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(post.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Messages */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Latest contact form submissions</CardDescription>
            </div>
            <Link
              to="/admin/messages"
              className="text-sm text-primary hover:underline"
            >
              View all
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          {recentMessages.length === 0 ? (
            <p className="text-muted-foreground text-sm">No messages yet</p>
          ) : (
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message._id} className="flex items-start gap-3 p-3 rounded-lg border">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">{message.name}</p>
                      <span className="text-xs text-muted-foreground">({message.email})</span>
                      {Number(message.read) === 0 && (
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {message.subject}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {message.message}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {formatDate(message?.created_at ?? "")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/admin/projects">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Manage Projects</p>
                  <p className="text-xs text-muted-foreground">Add, edit, or remove projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/blog">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Write Blog Post</p>
                  <p className="text-xs text-muted-foreground">Create new articles</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/messages">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">View Messages</p>
                  <p className="text-xs text-muted-foreground">Read contact submissions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

export default AdminDashboard
