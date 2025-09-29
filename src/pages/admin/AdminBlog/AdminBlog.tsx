// import React from "react"
// import toast from "react-hot-toast"
// import { getBlog_posts } from "@/API/blogPosts"
// import type { BlogPost } from "@/types"
// import { Grid, List } from "lucide-react"
// import { Button } from "@/components/ui/Button"
// import { BlogFormModal } from "./Components/BlogFormModal"
// import { BlogGrid } from "./Components/BlogGrid"
// import { BlogTable } from "./Components/BlogTable"

// const AdminBlog: React.FC = () => {
//   const [posts, setPosts] = React.useState<BlogPost[]>([])
//   const [loading, setLoading] = React.useState(true)
//   const [view, setView] = React.useState<"grid" | "table">("grid")

//   const loadPosts = async () => {
//     try {
//       const data = await getBlog_posts()
//       setPosts(data)
//     } catch (err) {
//       toast.error("Failed to load posts")
//     } finally {
//       setLoading(false)
//     }
//   }

//   React.useEffect(() => {
//     loadPosts()
//   }, [])

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">Blog</h1>
//           <p className="text-muted-foreground">Manage blog posts</p>
//         </div>

//         <div className="flex items-center gap-2">
//           <Button variant={view === "grid" ? "default" : "outline"} onClick={() => setView("grid")}>
//             <Grid className="w-4 h-4" />
//           </Button>
//           <Button variant={view === "table" ? "default" : "outline"} onClick={() => setView("table")}>
//             <List className="w-4 h-4" />
//           </Button>
//           <BlogFormModal onSuccess={loadPosts} />
//         </div>
//       </div>

//       {loading ? (
//         <div className="p-8">Loading...</div>
//       ) : view === "grid" ? (
//         <BlogGrid posts={posts} />
//       ) : (
//         <BlogTable posts={posts} />
//       )}
//     </div>
//   )
// }

// export default AdminBlog
import React from "react"
import toast from "react-hot-toast"
import { getBlog_posts } from "@/API/blogPosts"
import type { BlogPost } from "@/types"
import { Grid as GridIcon, List } from "lucide-react"
import {
  Box,
  Typography,
  Stack,
  CircularProgress,
  IconButton,
} from "@mui/material"
// import { Button } from "@/components/ui/Button"
import { BlogFormModal } from "./Components/BlogFormModal"
import { BlogGrid } from "./Components/BlogGrid"
import { BlogTable } from "./Components/BlogTable"

const AdminBlog: React.FC = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([])
  const [loading, setLoading] = React.useState(true)
  const [view, setView] = React.useState<"grid" | "table">("grid")

  const loadPosts = async () => {
    try {
      const data = await getBlog_posts()
      setPosts(data)
    } catch (err) {
      toast.error("Failed to load posts")
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    loadPosts()
  }, [])

  return (
    <Box>
      {/* Header Section */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Blog
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage blog posts
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton
            color={view === "grid" ? "primary" : "default"}
            onClick={() => setView("grid")}
          >
            <GridIcon size={20} />
          </IconButton>
          <IconButton
            color={view === "table" ? "primary" : "default"}
            onClick={() => setView("table")}
          >
            <List size={20} />
          </IconButton>
          <BlogFormModal onSuccess={loadPosts} />
        </Stack>
      </Stack>

      {/* Content Section */}
      {loading ? (
        <Box display="flex" justifyContent="center" p={6}>
          <CircularProgress />
        </Box>
      ) : view === "grid" ? (
        <BlogGrid posts={posts} />
      ) : (
        <BlogTable posts={posts} />
      )}
    </Box>
  )
}

export default AdminBlog
