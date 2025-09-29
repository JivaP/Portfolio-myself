import React from "react"
import type { BlogPost } from "@/types"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material"

export const BlogTable: React.FC<{ posts: BlogPost[] }> = ({ posts }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="subtitle2">Title</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle2">Excerpt</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle2">Published</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post._id}>
            <TableCell>{post.title}</TableCell>
            <TableCell>
              <Typography variant="body2" color="text.secondary">
                {post.excerpt}
              </Typography>
            </TableCell>
            <TableCell>{post.published ? "✅" : "❌"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
