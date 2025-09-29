
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  // Card,
  // CardContent,
  // CardHeader,
  // CardMedia,
  // Chip,
  // Grid,
  Paper,
  useTheme,
  alpha
} from '@mui/material';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Project } from '@/types';
// import { formatDate } from '../lib/utils';
import { getProjects } from '@/API/project';
import { getBlog_posts } from '@/API/blogPosts';
import { glitterText } from '@/components/ui/glitterStyles';
import { motion } from 'framer-motion';
import ProjectGrid from './project/components/ProjectShowcase';
import SkillsRollerCoaster from './HomePage/Components/skills';
import ContactPage from './ContactPage';

export function HomePage() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  // const [recentBlogPosts, setRecentBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
console.log(loading);

  useEffect(() => {
    const loadFeaturedContent = async () => {
      try {
        setLoading(true);
        // Load featured projects
        const projects = await getProjects({
          where: { featured: "1" },
          orderBy: { createdAt: 'desc' },
          limit: 3
        });
        setFeaturedProjects(projects);

        // Load recent blog posts
        const blogPosts = await getBlog_posts();
        // setRecentBlogPosts(blogPosts);
        console.log(blogPosts, "blogPosts>>>");
      } catch (error) {
        console.error('Error loading featured content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedContent();
  }, []);

  // if (loading) {
  //   return (
  //     <Container sx={{ py: 4, textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  //       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
  //         <Box
  //           sx={{
  //             width: 40,
  //             height: 40,
  //             borderRadius: '50%',
  //             border: `4px solid ${theme.palette.primary.main}`,
  //             borderTopColor: 'transparent',
  //             animation: 'spin 1s linear infinite',
  //             '@keyframes spin': {
  //               '0%': { transform: 'rotate(0deg)' },
  //               '100%': { transform: 'rotate(360deg)' }
  //             }
  //           }}
  //         />
  //       </Box>
  //       <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
  //         Loading...
  //       </Typography>
  //     </Container>
  //   );
  // }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 10, md: 10 },


        }}
      >
        {/* <Box sx={{ ...glitterBackgroundHeader, position: 'absolute', top: 0, left: 0, width: '100%', height: "130px", zIndex: -1 }} /> */}
        <Container sx={{ position: 'relative', textAlign: 'center' }}>
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
                textAlign: "center",
                px: 2,
                pb: 4,
              }}
            >
              <Typography
                variant="h1"
                component={motion.h1}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 700,
                  mb: 4,
                  // ...glitterText,
                }}
              >
                Frontend{" "}
                <Box
                  component="span"
                  sx={{
                    ...glitterText,
                    display: "inline-block",
                    p: 2
                  }}
                >
                  Developer
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#ffffffc0',
                  maxWidth: 600,
                  mx: 'auto',
                  mb: 5
                }}
              >
                I build modern web applications with React, Next.js, and cutting-edge
                technologies. Passionate about creating digital experiences that make a
                difference.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 4 }}>
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight size={20} />}
                >
                  View My Work
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{ color: 'text.primary', borderColor: 'text.secondary' }}
                >
                  Get In Touch
                </Button>
              </Box>
              {/* Social Buttons */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                <Button
                  component="a"
                  href="#"
                  variant="outlined"
                  startIcon={<Linkedin size={18} />}
                  sx={{
                    borderRadius: 28,
                    borderColor: alpha(theme.palette.text.secondary, 0.5),
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: theme.palette.text.secondary,
                      backgroundColor: alpha(theme.palette.text.secondary, 0.1)
                    }
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  component="a"
                  href="#"
                  variant="outlined"
                  startIcon={<Github size={18} />}
                  sx={{
                    borderRadius: 28,
                    borderColor: alpha(theme.palette.text.secondary, 0.5),
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: theme.palette.text.secondary,
                      backgroundColor: alpha(theme.palette.text.secondary, 0.1)
                    }
                  }}
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  href="mailto:example@email.com"
                  variant="outlined"
                  startIcon={<Mail size={18} />}
                  sx={{
                    borderRadius: 28,
                    borderColor: alpha(theme.palette.text.secondary, 0.5),
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: theme.palette.text.secondary,
                      backgroundColor: alpha(theme.palette.text.secondary, 0.1)
                    }
                  }}
                >
                  Email
                </Button>
              </Box>
            </Box>
          </Box>

        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box sx={{ py: { xs: 0, md: 1 } }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Featured Projects
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              A showcase of my recent work and side projects
            </Typography>
          </Box>

          {featuredProjects.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                No featured projects yet.
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Check back soon for updates!
              </Typography>
            </Box>
          ) : (
            <ProjectGrid projects={featuredProjects} />

          )}

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              endIcon={<ArrowRight size={18} />}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Recent Blog Posts Section */}
      {/* <Box sx={{ py: { xs: 8, md: 1 }, backgroundColor: alpha(theme.palette.text.primary, 0.05) }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Latest Blog Posts
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Thoughts on development, technology, and design
            </Typography>
          </Box>

          {recentBlogPosts.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                No blog posts yet.
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Stay tuned for upcoming articles!
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {recentBlogPosts.map((post) => {
                const tags = Array.isArray(post?.tags)
                  ? post.tags
                  : JSON.parse(post?.tags || '[]');

                return (
                  <Grid size={{ xs: 12, md: 4 }} key={post._id}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: 6
                        }
                      }}
                    >
                      {post.images && post.images.length > 0 && (
                        <CardMedia
                          component="img"
                          height="200"
                          image={post.images[0]}
                          alt={post.title}
                        />
                      )}
                      <CardHeader
                        title={
                          <Typography
                            variant="h6"
                            component={Link}
                            to={`/blog/${post.slug}`}
                            sx={{
                              textDecoration: 'none',
                              color: 'text.primary',
                              '&:hover': { color: 'primary.main' }
                            }}
                          >
                            {post.title}
                          </Typography>
                        }
                        subheader={
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Calendar size={16} style={{ marginRight: '4px' }} />
                            <Typography variant="caption">
                              {formatDate(post.createdAt)}
                            </Typography>
                          </Box>
                        }
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                          {post.excerpt}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {tags.slice(0, 2).map((tag: string, index: number) => (
                            <Chip
                              key={index}
                              icon={<Tag size={14} style={{ marginLeft: '4px' }} />}
                              label={tag}
                              size="small"
                              sx={{
                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                color: 'primary.main'
                              }}
                            />
                          ))}
                          {tags.length > 2 && (
                            <Chip
                              label={`+${tags.length - 2} more`}
                              size="small"
                              variant="outlined"
                            />
                          )}
                        </Box>
                        <Button
                          component={Link}
                          to={`/blog/${post.slug}`}
                          size="small"
                          endIcon={<ArrowRight size={16} />}
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              component={Link}
              to="/blog"
              variant="outlined"
              endIcon={<ArrowRight size={16} />}
            >
              View All Posts
            </Button>
          </Box>
        </Container>
      </Box> */}

      {/* skills */}
      <SkillsRollerCoaster />

      {/* CTA Section */}
      <Box sx={{ pt: { xs: 8, md: 10 } }}>
        <Container>
          <Paper
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, #000)`,
              color: 'white',
              textAlign: 'center',
              py: 8,
              px: 4
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Let's Work Together
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, maxWidth: 600, mx: 'auto' }}>
              Have a project in mind? I'd love to help bring your ideas to life.
              Let's discuss your next digital venture.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={20} />}
              sx={{
                backgroundColor: 'white',
                color: 'white',
                '&:hover': { backgroundColor: 'grey.100' }
              }}
            >
              Start a Conversation
            </Button>
          </Paper>
        </Container>


      </Box>
      <ContactPage />
    </Box >
  );
}