// // import { Badge } from "@/components/ui/badge"
// // import { Button } from "@/components/ui/Button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
// // import { formatDate } from "@/lib/utils"
// // import { Project } from "@/types"
// // import { Edit, ExternalLink, Eye, EyeOff, Github, Star, Trash2 } from "lucide-react"
// // import { ImageSlider } from "./ImageSlider"

// // // Project Card Component
// // export const ProjectCard: React.FC<{
// //     project: Project,
// //     onEdit: (project: Project) => void,
// //     onDelete: (id: string) => void,
// //     onToggleStatus: (project: Project) => void
// // }> = ({ project, onEdit, onDelete, onToggleStatus }) => {

// //     console.log(project, "project>>>")
// //     const technologies: string[] = Array.isArray(project.technologies)
// //         ? project.technologies.flatMap((tech) =>
// //             typeof tech === "string" ? JSON.parse(tech) : []
// //         )
// //         : typeof project.technologies === "string"
// //             ? JSON.parse(project.technologies)
// //             : [];

// //     return (
// //         <Card className="overflow-hidden h-full flex flex-col">
// //             <div className="aspect-video relative overflow-hidden group">
// //                 <ImageSlider
// //                     images={Array.isArray(project.images) ? project.images : [project.images]}
// //                     alt={project.title}
// //                 />
// //                 <div className="absolute top-2 right-2 flex gap-2">
// //                     <button
// //                         onClick={() => onToggleStatus(project)}
// //                         className={`p-1 rounded-full ${project.status === 1
// //                             ? 'bg-green-500 text-white'
// //                             : 'bg-gray-500 text-white'}`}
// //                         title={project.status === 1 ? 'Active' : 'Inactive'}
// //                     >
// //                         {project.status === 1 ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
// //                     </button>
// //                     <button
// //                         onClick={() => { }}
// //                         className={`p-1 rounded-full ${Number(project.featured) > 0
// //                             ? 'bg-yellow-500 text-white'
// //                             : 'bg-black/50 text-white hover:bg-black/70'}`}
// //                         title={Number(project.featured) > 0 ? 'Featured' : 'Not Featured'}
// //                     >
// //                         <Star className="w-4 h-4" fill={Number(project.featured) > 0 ? 'currentColor' : 'none'} />
// //                     </button>
// //                 </div>
// //                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// //                     <Button size="sm" onClick={() => onEdit(project)}>
// //                         <Edit className="w-4 h-4 mr-1" /> Edit
// //                     </Button>
// //                     <Button size="sm" variant="destructive" onClick={() => onDelete(project._id)}>
// //                         <Trash2 className="w-4 h-4 mr-1" /> Delete
// //                     </Button>
// //                 </div>
// //             </div>
// //             <CardHeader className="flex-grow">
// //                 <div className="flex items-center justify-between mb-2">
// //                     <Badge variant={project.status === 1 ? "default" : "secondary"}>
// //                         {project.status === 1 ? 'Active' : 'Inactive'}
// //                     </Badge>
// //                     <span className="text-xs text-muted-foreground">
// //                         {formatDate(project.createdAt)}
// //                     </span>
// //                 </div>
// //                 <CardTitle className="line-clamp-1">{project.title}</CardTitle>
// //                 <div className="flex items-center gap-2 mt-1">
// //                     <Badge variant="outline" className="text-xs">
// //                         {project.category}
// //                     </Badge>
// //                     {Number(project.featured) > 0 && (
// //                         <Badge variant="secondary" className="text-xs flex items-center gap-1">
// //                             <Star className="w-3 h-3" fill="currentColor" /> Featured
// //                         </Badge>
// //                     )}
// //                 </div>
// //                 <CardDescription className="line-clamp-2 mt-2">
// //                     {project.description}
// //                 </CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //                 <div className="flex flex-wrap gap-1 mb-4">
// //                     {technologies.slice(0, 4).map((tech: string, index: number) => (
// //                         <span
// //                             key={index}
// //                             className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
// //                         >
// //                             {tech}
// //                         </span>
// //                     ))}
// //                     {technologies.length > 4 && (
// //                         <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
// //                             +{technologies.length - 4}
// //                         </span>
// //                     )}
// //                 </div>

// //                 <div className="flex items-center justify-between">
// //                     <div className="flex gap-2">
// //                         {project.demo_url && (
// //                             <a
// //                                 href={project.demo_url}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                                 className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
// //                                 title="View Live Demo"
// //                             >
// //                                 <ExternalLink className="w-4 h-4" />
// //                             </a>
// //                         )}
// //                         {project.github_url && (
// //                             <a
// //                                 href={project.github_url}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                                 className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
// //                                 title="View GitHub Repository"
// //                             >
// //                                 <Github className="w-4 h-4" />
// //                             </a>
// //                         )}
// //                     </div>

// //                     <div className="text-xs text-muted-foreground">
// //                         Updated {formatDate(project.updatedAt)}
// //                     </div>
// //                 </div>
// //             </CardContent>
// //         </Card>
// //     )
// // }

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/Button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
// import { formatDate } from "@/lib/utils"
// import { Project } from "@/types"
// import { Edit, ExternalLink, Eye, EyeOff, Github, Star, Trash2 } from "lucide-react"
// import { ImageSlider } from "./ImageSlider"

// // Project Card Component
// export const ProjectCard: React.FC<{
//     project: Project,
//     onEdit: (project: Project) => void,
//     onDelete: (id: string) => void,
//     onToggleStatus: (project: Project) => void
// }> = ({ project, onEdit, onDelete, onToggleStatus }) => {

//     console.log(project, "project>>>")

//     // ✅ Safe technologies parsing
//     const technologies: string[] = Array.isArray(project.technologies)
//         ? project.technologies
//         : typeof project.technologies === "string"
//             ? (project.technologies as string).split(",").map(t => t.trim())
//             : [];

//     return (
//         <Card className="overflow-hidden h-full flex flex-col">
//             <div className="aspect-video relative overflow-hidden group">
//                 <ImageSlider
//                     images={Array.isArray(project.images) ? project.images : [project.images]}
//                     alt={project.title}
//                 />
//                 <div className="absolute top-2 right-2 flex gap-2">
//                     <button
//                         onClick={() => onToggleStatus(project)}
//                         className={`p-1 rounded-full ${project.status === 1
//                             ? 'bg-green-500 text-white'
//                             : 'bg-gray-500 text-white'}`}
//                         title={project.status === 1 ? 'Active' : 'Inactive'}
//                     >
//                         {project.status === 1 ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
//                     </button>
//                     <button
//                         onClick={() => { }}
//                         className={`p-1 rounded-full ${Number(project.featured) > 0
//                             ? 'bg-yellow-500 text-white'
//                             : 'bg-black/50 text-white hover:bg-black/70'}`}
//                         title={Number(project.featured) > 0 ? 'Featured' : 'Not Featured'}
//                     >
//                         <Star className="w-4 h-4" fill={Number(project.featured) > 0 ? 'currentColor' : 'none'} />
//                     </button>
//                 </div>
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
//                     <Button size="sm" onClick={() => onEdit(project)}>
//                         <Edit className="w-4 h-4 mr-1" /> Edit
//                     </Button>
//                     <Button size="sm" variant="destructive" onClick={() => onDelete(project._id)}>
//                         <Trash2 className="w-4 h-4 mr-1" /> Delete
//                     </Button>
//                 </div>
//             </div>
//             <CardHeader className="flex-grow">
//                 <div className="flex items-center justify-between mb-2">
//                     <Badge variant={project.status === 1 ? "default" : "secondary"}>
//                         {project.status === 1 ? 'Active' : 'Inactive'}
//                     </Badge>
//                     <span className="text-xs text-muted-foreground">
//                         {formatDate(project.createdAt)}
//                     </span>
//                 </div>
//                 <CardTitle className="line-clamp-1">{project.title}</CardTitle>
//                 <div className="flex items-center gap-2 mt-1">
//                     <Badge variant="outline" className="text-xs">
//                         {project.category}
//                     </Badge>
//                     {Number(project.featured) > 0 && (
//                         <Badge variant="secondary" className="text-xs flex items-center gap-1">
//                             <Star className="w-3 h-3" fill="currentColor" /> Featured
//                         </Badge>
//                     )}
//                 </div>
//                 <CardDescription className="line-clamp-2 mt-2">
//                     {project.description}
//                 </CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <div className="flex flex-wrap gap-1 mb-4">
//                     {technologies.slice(0, 4).map((tech: string, index: number) => (
//                         <span
//                             key={`${project._id}-tech-${index}`}   // ✅ unique key fix
//                             className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
//                         >
//                             {tech}
//                         </span>
//                     ))}
//                     {technologies.length > 4 && (
//                         <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
//                             +{technologies.length - 4}
//                         </span>
//                     )}
//                 </div>

//                 <div className="flex items-center justify-between">
//                     <div className="flex gap-2">
//                         {project.demo_url && (
//                             <a
//                                 href={project.demo_url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
//                                 title="View Live Demo"
//                             >
//                                 <ExternalLink className="w-4 h-4" />
//                             </a>
//                         )}
//                         {project.github_url && (
//                             <a
//                                 href={project.github_url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
//                                 title="View GitHub Repository"
//                             >
//                                 <Github className="w-4 h-4" />
//                             </a>
//                         )}
//                     </div>

//                     <div className="text-xs text-muted-foreground">
//                         Updated {formatDate(project.updatedAt)}
//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     )
// }
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Chip,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { Project } from "@/types";
import { ImageSlider } from "./ImageSlider";

// Lucide icons
import { Edit, Trash2, ExternalLink, Github, Star, Eye, EyeOff } from "lucide-react";

export const ProjectCard: React.FC<{
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (project: Project) => void;
}> = ({ project, onEdit, onDelete, onToggleStatus }) => {
  // ✅ safe technologies parsing
  const technologies: string[] = Array.isArray(project.technologies)
    ? project.technologies
    : typeof project.technologies === "string"
    ? (project.technologies as string).split(",").map((t) => t.trim())
    : [];

  const isActive = project.status === 1;
  const isFeatured = Number(project.featured) > 0;

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Image Section */}
      <Box sx={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
        <ImageSlider
          images={Array.isArray(project.images) ? project.images : [project.images]}
          alt={project.title}
        />

        {/* Status & Featured Toggles */}
        <Box sx={{ position: "absolute", top: 8, right: 8, display: "flex", gap: 1 }}>
          <Tooltip title={isActive ? "Active" : "Inactive"}>
            <IconButton
              size="small"
              sx={{ bgcolor: isActive ? "success.main" : "grey.500", color: "white" }}
              onClick={() => onToggleStatus(project)}
            >
              {isActive ? <Eye size={16} /> : <EyeOff size={16} />}
            </IconButton>
          </Tooltip>

          <Tooltip title={isFeatured ? "Featured" : "Not Featured"}>
            <IconButton
              size="small"
              sx={{
                bgcolor: isFeatured ? "warning.main" : "rgba(0,0,0,0.5)",
                color: "white",
                "&:hover": { bgcolor: isFeatured ? "warning.dark" : "rgba(0,0,0,0.7)" },
              }}
            >
              <Star size={16} fill={isFeatured ? "currentColor" : "none"} />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Hover Edit/Delete */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            opacity: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            transition: "opacity 0.3s",
            "&:hover": { opacity: 1 },
          }}
        >
          <IconButton
            onClick={() => onEdit(project)}
            sx={{ bgcolor: "white", "&:hover": { bgcolor: "grey.100" } }}
          >
            <Edit size={18} />
          </IconButton>
          <IconButton
            onClick={() => onDelete(project._id)}
            sx={{ bgcolor: "error.main", color: "white", "&:hover": { bgcolor: "error.dark" } }}
          >
            <Trash2 size={18} />
          </IconButton>
        </Box>
      </Box>

      {/* Header */}
      <CardHeader
        title={
          <Typography variant="h6" noWrap>
            {project.title}
          </Typography>
        }
        subheader={
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Chip
              size="small"
              label={isActive ? "Active" : "Inactive"}
              color={isActive ? "success" : "default"}
              variant="outlined"
            />
            <Typography variant="caption" color="text.secondary">
              {formatDate(project.created_at)}
            </Typography>
          </Box>
        }
        sx={{ pb: 0 }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Category + Featured */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Chip size="small" variant="outlined" label={project.category} />
          {isFeatured && (
            <Chip
              size="small"
              variant="filled"
              color="warning"
              icon={<Star size={14} />}
              label="Featured"
            />
          )}
        </Box>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>

        {/* Technologies */}
        <Box display="flex" flexWrap="wrap" gap={0.5} mb={2}>
          {technologies.slice(0, 4).map((tech, i) => (
            <Chip key={`${project._id}-tech-${i}`} label={tech} size="small" />
          ))}
          {technologies.length > 4 && (
            <Chip label={`+${technologies.length - 4}`} size="small" variant="outlined" />
          )}
        </Box>
      </CardContent>

      {/* Footer */}
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {project.demo_url && (
            <IconButton component="a" href={project.demo_url} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} />
            </IconButton>
          )}
          {project.github_url && (
            <IconButton component="a" href={project.github_url} target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </IconButton>
          )}
        </Box>
        <Typography variant="caption" color="text.secondary">
          Updated {formatDate(project.updatedAt)}
        </Typography>
      </CardActions>
    </Card>
  );
};
