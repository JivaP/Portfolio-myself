// // import React from 'react'
// import { Link } from 'react-router-dom'
// import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

// export function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="border-t bg-background">
//       <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
//           {/* Brand */}
//           <div className="md:col-span-1">
//             <Link to="/" className="flex items-center aspace-x-2">
//               <div className="h-8 w-8 rounded-full bg-primary"></div>
//               <span className="text-xl font-bold">Portfolio</span>
//             </Link>
//             <p className="mt-4 text-sm text-muted-foreground">
//               Full-stack developer passionate about creating digital experiences
//               that make a difference.
//             </p>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
//               Navigation
//             </h3>
//             <ul className="mt-4 space-y-3">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/projects"
//                   className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/blog"
//                   className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   About
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
//               Contact
//             </h3>
//             <ul className="mt-4 space-y-3">
//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   Get in Touch
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="mailto:hello@example.com"
//                   className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                 >
//                   hello@example.com
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
//               Follow Me
//             </h3>
//             <div className="mt-4 flex space-x-4">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground transition-colors hover:text-primary"
//               >
//                 <Github className="h-5 w-5" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground transition-colors hover:text-primary"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground transition-colors hover:text-primary"
//               >
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a
//                 href="mailto:hello@example.com"
//                 className="text-muted-foreground transition-colors hover:text-primary"
//               >
//                 <Mail className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 border-t pt-8">
//           <div className="flex flex-col items-center justify-between md:flex-row">
//             <p className="text-sm text-muted-foreground">
//               © {currentYear} Portfolio. All rights reserved.
//             </p>
//             <div className="mt-4 flex space-x-6 md:mt-0">
//               <Link
//                 to="/privacy"
//                 className="text-sm text-muted-foreground transition-colors hover:text-primary"
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 to="/terms"
//                 className="text-sm text-muted-foreground transition-colors hover:text-primary"
//               >
//                 Terms of Service
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "black",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    mr: 1,
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Portfolio
                </Typography>
              </Box>
            </Link>
            <Typography variant="body2" color="grey.400">
              Frontend developer passionate about creating digital experiences
              that make a difference.
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              gutterBottom
              sx={{ textTransform: "uppercase" }}
            >
              Navigation
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "grey.400" }}>
                Home
              </Link>
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "grey.400" }}
              >
                Projects
              </Link>
              {/* <Link
                to="/blog"
                style={{ textDecoration: "none", color: "grey.400" }}
              >
                Blog
              </Link> */}
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "grey.400" }}
              >
                About
              </Link>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              gutterBottom
              sx={{ textTransform: "uppercase" }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "grey.400" }}
              >
                Get in Touch
              </Link>
              <a
                href="mailto:jiiva4474@gmail.com"
                style={{ textDecoration: "none", color: "grey.400" }}
              >
                jiiva4474@gmail.com
              </a>
            </Box>
          </Grid>

          {/* Social */}
          <Grid size={{ xs: 12, md: 3 }} >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              gutterBottom
              sx={{ textTransform: "uppercase" }}
            >
              Follow Me
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <IconButton
                href="https://github.com/JivaP"
                target="_blank"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <Github size={20} />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/jeeva-p-971958290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <Linkedin size={20} />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/jee.ee._?igsh=MWtvc2Vub3Z2dHJvdg%3D%3D&utm_source=qr"
                target="_blank"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <Instagram size={20} />
              </IconButton>
              <IconButton
                href="mailto:jiiva4474@gmail.com"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <Mail size={20} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{ borderColor: "grey.800", my: 4 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="grey.500">
            © {currentYear} Portfolio. All rights reserved.
          </Typography>
         
        </Box>
      </Container>
    </Box>
  );
}
