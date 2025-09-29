import React from 'react'
import { useParams } from 'react-router-dom'
// import type { BlogPost } from '@/types'
import ReactMarkdown from 'react-markdown'
import { createBlog_posts } from '@/API/blogPosts'
import { ImageSlider } from './admin/AdminProjects/Components/ImageSlider'

const BlogPostPage: React.FC = () => {
  const { slug } = useParams()
  const [post, setPost] = React.useState<any | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const loadPost = async () => {
      if (!slug) return
      try {
        const posts = await createBlog_posts({ where: { slug } })
        console.log(posts)
        setPost(posts || null)
      } catch (error) {
        console.error('Error loading post:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPost()
  }, [slug])

  if (loading) return <div className="p-8">Loading...</div>
  if (!post) return <div className="p-8">Post not found.</div>

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.images.length > 0 && <ImageSlider
        images={Array.isArray(post.images) ? post.images : [post.images]}
        alt={post.title}
      />}
      <div className="prose max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default BlogPostPage
