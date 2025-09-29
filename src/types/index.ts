export interface Project {
  _id: string
  title: string
  description: string
  images: string
  demo_url?: string
  github_url?: string
  technologies?: any[]
  category: string
  featured: boolean
  created_at: string
  updatedAt: string
  user_id: string
  status: number
}

export interface BlogPost {
  _id: string
  title: string
  content: string
  excerpt: string
  images?: any
  slug: string
  published: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
  userId: string
  created_at: string
}

export interface User {
  id: string
  email: string
  username: string
  role: 'admin' | 'user'
  avatar?: string
  bio?: string
  createdAt: string
}

export interface ContactMessage {
  _id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
  read: boolean
}

export interface Skill {
  id: string
  name: string
  level: number
  category: string
  userId: string
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
  current: boolean
  userId: string
}
