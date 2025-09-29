// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from '../components/ui/Button'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
// import { Input } from '../components/ui/Input'
// import { Calendar, Tag, Search, Filter } from 'lucide-react'
// import type { BlogPost } from '@/types'
// import { formatDate } from '../lib/utils'
// import { getBlog_posts } from '@/API/blogPosts'
// import { ImageSlider } from './admin/AdminProjects/Components/ImageSlider'

// const BlogPage: React.FC = () => {
//   const [posts, setPosts] = React.useState<BlogPost[]>([])
//   const [filteredPosts, setFilteredPosts] = React.useState<BlogPost[]>([])
//   const [loading, setLoading] = React.useState(true)
//   const [searchTerm, setSearchTerm] = React.useState('')
//   const [selectedTag, setSelectedTag] = React.useState<string>('all')
//   const [allTags, setAllTags] = React.useState<string[]>([])

//   React.useEffect(() => {
//     const loadBlogPosts = async () => {
//       try {
//         const postsData = await getBlog_posts()
//         setPosts(postsData)
//         setFilteredPosts(postsData)

//         // Extract unique tags
//         const tags = new Set<string>()
//         postsData.forEach((post: any) => {
//           const postTags = Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags || '[]')
//           postTags.forEach((tag: string) => tags.add(tag))
//         })
//         setAllTags(Array.from(tags))
//       } catch (error) {
//         console.error('Error loading blog posts:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadBlogPosts()
//   }, [])

//   React.useEffect(() => {
//     let filtered = posts

//     // Filter by tag
//     if (selectedTag !== 'all') {
//       filtered = filtered.filter(post => {
//         const postTags = Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags || '[]')
//         return postTags.includes(selectedTag)
//       })
//     }

//     // Filter by search term
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase()
//       filtered = filtered.filter(post =>
//         post.title.toLowerCase().includes(term) ||
//         post.excerpt.toLowerCase().includes(term) ||
//         (Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags || '[]')).some((tag: string) =>
//           tag.toLowerCase().includes(term)
//         )
//       )
//     }

//     setFilteredPosts(filtered)
//   }, [posts, searchTerm, selectedTag])

//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center">
//           <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
//           <p className="mt-2 text-sm text-muted-foreground">Loading blog posts...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-bold tracking-tight mb-4">
//           Blog
//         </h1>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           Thoughts on development, technology, design, and everything in between.
//           Sharing insights and experiences from my journey as a developer.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 mb-8">
//         {/* Search */}
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder="Search posts..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10"
//           />
//         </div>

//         {/* Tag Filter */}
//         <div className="flex items-center gap-2">
//           <Filter className="h-4 w-4 text-muted-foreground" />
//           <select
//             value={selectedTag}
//             onChange={(e) => setSelectedTag(e.target.value)}
//             className="px-3 py-2 border border-input rounded-md bg-background text-sm"
//           >
//             <option value="all">All Tags</option>
//             {allTags.map(tag => (
//               <option key={tag} value={tag}>
//                 {tag}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Blog Posts */}
//       {filteredPosts.length === 0 ? (
//         <div className="text-center py-16">
//           <p className="text-lg text-muted-foreground mb-2">
//             {searchTerm || selectedTag !== 'all'
//               ? 'No posts match your search criteria.'
//               : 'No blog posts found.'}
//           </p>
//           {searchTerm || selectedTag !== 'all' ? (
//             <Button
//               onClick={() => {
//                 setSearchTerm('')
//                 setSelectedTag('all')
//               }}
//               variant="outline"
//             >
//               Clear Filters
//             </Button>
//           ) : (
//             <p className="text-sm text-muted-foreground mt-2">
//               Check back soon for new articles!
//             </p>
//           )}
//         </div>
//       ) : (
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {filteredPosts.map((post) => {
//             const tags = Array.isArray(post?.tags)
//               ? post.tags
//               : JSON.parse(post?.tags || '[]')
//             return (
//               <Card key={post._id} className="group hover:shadow-lg transition-all duration-300">
//                 {post.images > 0 && (
//                   <div className="aspect-video overflow-hidden">
//                     <ImageSlider
//                       images={Array.isArray(post.images) ? post.images : [post.images]}
//                       alt={post.title}
//                     />
//                   </div>
//                 )}
//                 <CardHeader>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
//                     <Calendar className="w-4 h-4" />
//                     <time>{formatDate(post.createdAt)}</time>
//                   </div>
//                   <CardTitle className="group-hover:text-primary transition-colors">
//                     <Link to={`/blog/${post.slug}`}>{post.title}</Link>
//                   </CardTitle>
//                   <CardDescription>{post.excerpt}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {tags.map((tag: string, index: number) => (
//                       <button
//                         key={index}
//                         onClick={() => setSelectedTag(tag)}
//                         className="text-xs px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1"
//                       >
//                         <Tag className="w-3 h-3" />
//                         {tag}
//                       </button>
//                     ))}
//                   </div>
//                   <Button size="sm" variant="outline" >
//                     <Link to={`/blog/${post.slug}`}>
//                       Read More
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>
//       )}

//       {/* Results count */}
//       {filteredPosts.length > 0 && (
//         <div className="text-center mt-12">
//           <p className="text-sm text-muted-foreground">
//             Showing {filteredPosts.length} of {posts.length} posts
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default BlogPage
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  // CardMedia,
  CardActions,
  Chip,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Grid,
  CircularProgress,
  Alert,
  alpha
} from '@mui/material'

import { motion } from 'framer-motion'
import type { BlogPost } from '@/types'
import { formatDate } from '../lib/utils'
import { getBlog_posts } from '@/API/blogPosts'
import { ImageSlider } from './admin/AdminProjects/Components/ImageSlider'
import { Calendar, Filter, Forward, Search, Tag } from 'lucide-react'

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [allTags, setAllTags] = useState<string[]>([])

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setError(null)
        const postsData = await getBlog_posts()
        setPosts(postsData)
        setFilteredPosts(postsData)

        // Extract unique tags
        const tags = new Set<string>()
        postsData.forEach((post: any) => {
          const postTags = Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags || '[]')
          postTags.forEach((tag: string) => tags.add(tag))
        })
        setAllTags(['all', ...Array.from(tags)])
      } catch (error) {
        console.error('Error loading blog posts:', error)
        setError('Failed to load blog posts. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadBlogPosts()
  }, [])

  useEffect(() => {
    let filtered = posts

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(post => {
        const postTags = Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags || '[]')
        return postTags.includes(selectedTag)
      })
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        (Array.isArray(post.tags) ? post.tags : JSON.parse(post.tags || '[]')).some((tag: string) =>
          tag.toLowerCase().includes(term)
        )
      )
    }

    setFilteredPosts(filtered)
  }, [posts, searchTerm, selectedTag])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -8,
      boxShadow: '0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08)',
      transition: {
        duration: 0.3
      }
    }
  }

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={40} thickness={4} />
          <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
            Loading blog posts...
          </Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              // background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              // backgroundClip: 'text',
              // WebkitBackgroundClip: 'text',
              // textFillColor: 'transparent'
              textTransform: 'uppercase',
            }}
          >
            Blog
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Thoughts on development, technology, design, and everything in between.
            Sharing insights and experiences from my journey as a developer.
          </Typography>
        </Box>
      </motion.div>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {/* Filters */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 6 }}>
          {/* Search */}
          <TextField
            fullWidth
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: alpha('#fff', 0.1),
              }
            }}
          />

          {/* Tag Filter */}
          <TextField
            select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Filter color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: 150,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          >
            {allTags.map(tag => (
              <MenuItem key={tag} value={tag}>
                {tag === 'all' ? 'All Tags' : tag}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </motion.div>

      {/* Blog Posts */}
      {filteredPosts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
              {searchTerm || selectedTag !== 'all'
                ? 'No posts match your search criteria.'
                : 'No blog posts found.'}
            </Typography>
            {searchTerm || selectedTag !== 'all' ? (
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedTag('all')
                }}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Clear Filters
              </Button>
            ) : (
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                Check back soon for new articles!
              </Typography>
            )}
          </Box>
        </motion.div>
      ) : (
        <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4}>
              {filteredPosts.map((post) => {
                const tags = Array.isArray(post?.tags)
                  ? post.tags
                  : JSON.parse(post?.tags || '[]')
                return (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post._id}>
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 3,
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {/* Post Image */}
                        {post.images && post.images.length > 0 && (
                          <Box sx={{ height: 200, overflow: 'hidden' }}>
                            <ImageSlider
                              images={Array.isArray(post.images) ? post.images : [post.images]}
                              alt={post.title}
                            // height={200}
                            />
                          </Box>
                        )}

                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          {/* Date */}
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Calendar style={{ fontSize: 16, marginRight: 1, color: 'text.secondary' }} />
                            <Typography variant="caption" color="text.secondary">
                              {formatDate(post.createdAt)}
                            </Typography>
                          </Box>

                          {/* Title */}
                          <Typography
                            variant="h6"
                            component="h2"
                            gutterBottom
                            sx={{
                              fontWeight: 600,
                              '&:hover': { color: 'primary.main' }
                            }}
                          >
                            <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                              {post.title}
                            </Link>
                          </Typography>

                          {/* Excerpt */}
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                          >
                            {post.excerpt}
                          </Typography>

                          {/* Tags */}
                          <Box sx={{ mb: 2 }}>
                            {tags.map((tag: string, index: number) => (
                              <Chip
                                key={index}
                                label={tag}
                                size="small"
                                onClick={() => setSelectedTag(tag)}
                                icon={<Tag style={{ fontSize: 16 }} />}
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  backgroundColor: alpha('#2196F3', 0.1),
                                  '&:hover': {
                                    backgroundColor: alpha('#2196F3', 0.2),
                                  }
                                }}
                              />
                            ))}
                          </Box>
                        </CardContent>

                        <CardActions sx={{ p: 3, pt: 0 }}>
                          <Button
                            component={Link}
                            to={`/blog/${post.slug}`}
                            endIcon={<Forward />}
                            sx={{
                              fontWeight: 600,
                              textTransform: 'none',
                            }}
                          >
                            Read More
                          </Button>
                        </CardActions>
                      </Card>
                    </motion.div>
                  </Grid>
                )
              })}
            </Grid>
          </motion.div>

          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography variant="body2" color="text.secondary">
                Showing {filteredPosts.length} of {posts.length} posts
              </Typography>
            </Box>
          </motion.div>
        </>
      )}
    </Container>
  )
}

export default BlogPage