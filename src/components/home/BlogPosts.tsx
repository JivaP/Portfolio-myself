import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Calendar, Tag, ArrowRight } from "lucide-react"
import { Button } from "../ui/Button"
import { Link } from "react-router-dom"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/types"
import { ImageSlider } from "@/pages/admin/AdminProjects/Components/ImageSlider"

export const BlogPosts = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on development, technology, and design
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const tags = Array.isArray(post.tags) ? post.tags : JSON.parse(post?.tags || "[]")
            return (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  {post.images && (
                    <div className="aspect-video overflow-hidden">
                      <ImageSlider images={Array.isArray(post.images) ? post.images : [post.images]} alt={post.title} />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <time>{formatDate(post.createdAt)}</time>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.slice(0, 2).map(({tag, idx}:any) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {tag}
                        </span>
                      ))}
                      {tags.length > 2 && <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">+{tags.length - 2} more</span>}
                    </div>
                    <Button size="sm" variant="outline">
                      <Link to={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
