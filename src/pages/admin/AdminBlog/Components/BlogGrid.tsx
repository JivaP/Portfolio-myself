import React from "react"
import type { BlogPost } from "@/types"
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Grid,
} from "@mui/material"
import { ImageSlider } from "../../AdminProjects/Components/ImageSlider"

export const BlogGrid: React.FC<{ posts: BlogPost[] }> = ({ posts }) => (
    <Grid container spacing={2}>
        {posts.map((post) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }}  key={post._id}>
                <Card>
                    <CardHeader
                        title={
                            <Typography variant="h6" component="div">
                                {post.title}
                            </Typography>
                        }
                    />
                    <CardMedia>
                        <ImageSlider
                            images={Array.isArray(post.images) ? post.images : [post.images]}
                            alt={post.title}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {post.excerpt}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
)
