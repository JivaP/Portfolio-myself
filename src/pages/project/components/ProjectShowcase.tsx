// "use client";
// import {
//     Grid,
//     Card,
//     CardMedia,
//     CardContent,
//     Typography,
//     Box,
//     Button,
//     Chip,
// } from "@mui/material";
// import { alpha } from "@mui/material/styles";
// import { 
//     // Github,

//     ExternalLink } from "lucide-react";
// import { motion } from "framer-motion";
// import { Project } from "@/types";
// import { ABI_BASE_IMG } from "@/lib";



// export default function ProjectShowcase({ projects }: { projects: Project[] }) {
//     return (
//         <Grid container spacing={4}>
//             {projects.map((project) => (
//                 <Grid
//                     size={{ xs: 12, sm: 4 }}

//                     key={project._id}
//                 >
//                     <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
//                         <Card
//                             sx={{
//                                 height: "100%",
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 borderRadius: 3,
//                                 overflow: "hidden",
//                                 position: "relative",
//                                 boxShadow: 3,
//                                 "&:hover .image": { transform: "scale(1.05)" },
//                                 "&:hover .overlay": { opacity: 1 },
//                             }}
//                         >
//                             {/* Category Label */}
//                             <Chip
//                                 label={project.category}
//                                 size="small"
//                                 sx={{
//                                     position: "absolute",
//                                     top: 12,
//                                     right: 12,
//                                     bgcolor: (theme) => alpha(theme.palette.primary.main, 0.15),
//                                     fontWeight: 600,
//                                 }}
//                             />

//                             {/* Project Image */}
//                             {project.images?.length > 0 && (
//                                 <Box sx={{ position: "relative" }}>
//                                     <CardMedia
//                                         component="img"
//                                         width={"200px"}

//                                         image={`${ABI_BASE_IMG}${project.images[0]}`}
//                                         alt={project.title}
//                                         className="image"
//                                         sx={{
//                                             objectFit: "cover",
//                                             transition: "transform 0.6s ease",
//                                             height: "200px"
//                                         }}
//                                     />

//                                     {/* Overlay with title/description */}
//                                     <Box
//                                         className="overlay"
//                                         sx={{
//                                             position: "absolute",
//                                             inset: 0,
//                                             bgcolor: "rgba(0,0,0,0.55)",
//                                             color: "white",
//                                             display: "flex",
//                                             flexDirection: "column",
//                                             justifyContent: "center",
//                                             alignItems: "center",
//                                             opacity: 0,
//                                             transition: "opacity 0.4s",
//                                             p: 2,
//                                             textAlign: "center",
//                                         }}
//                                     >
//                                         <Typography variant="h6" fontWeight={700}>
//                                             {project.title}
//                                         </Typography>
//                                         <Typography
//                                             variant="body2"
//                                             sx={{ mt: 1, maxWidth: "90%" }}
//                                         >
//                                             {project.description}
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                             )}

//                             {/* Content */}
//                             <CardContent sx={{ flexGrow: 1 }}>
//                                 <Typography
//                                     variant="h6"
//                                     fontWeight={600}
//                                     gutterBottom
//                                     noWrap
//                                     title={project.title}
//                                 >
//                                     {project.title}
//                                 </Typography>
//                                 <Typography
//                                     variant="body2"
//                                     color="text.secondary"
//                                     sx={{ mb: 2 }}
//                                     noWrap
//                                     title={project.description}
//                                 >
//                                     {project.description}
//                                 </Typography>

//                                 {/* Technologies */}
//                                 <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
//                                     {project?.technologies?.slice(0, 4).map((tag, idx: number) => (
//                                         <Chip
//                                             key={idx}
//                                             label={tag}
//                                             size="small"
//                                             sx={{
//                                                 backgroundColor: (theme) =>
//                                                     alpha(theme.palette.primary.main, 0.1),
//                                                 fontSize: "0.75rem",
//                                             }}
//                                         />
//                                     ))}
//                                 </Box>
//                             </CardContent>

//                             {/* Actions */}
//                             <Box sx={{ p: 2, display: "flex", gap: 1, mt: "auto" }}>
//                                 {/* {project.github_url && (
//                                     <Button
//                                         fullWidth
//                                         size="small"
//                                         variant="outlined"
//                                         startIcon={<Github size={16} />}
//                                         component="a"
//                                         href={project.github_url}
//                                         target="_blank"
//                                     >
//                                         Code
//                                     </Button>
//                                 )} */}
//                                 {project.demo_url && (
//                                     <Button
//                                         fullWidth
//                                         size="small"
//                                         variant="contained"
//                                         startIcon={<ExternalLink size={16} />}
//                                         component="a"
//                                         href={project.demo_url}
//                                         target="_blank"
//                                     >
//                                         Live Demo
//                                     </Button>
//                                 )}
//                             </Box>
//                         </Card>
//                     </motion.div>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// }
"use client";
import {
    // Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Button,
    Chip,
} from "@mui/material";
// import { alpha } from "@mui/material/styles";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { formatDate } from "@/lib/utils";

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
    return (
        <Box sx={{ position: 'relative', padding: { xs: '0 24px', sm: '0 10px' } }}>
            {/* Navigation Buttons */}
            <Button
                className="swiper-button-prev-custom"
                sx={{
                    position: 'absolute',
                    left: { xs: -10, sm: -20 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    minWidth: 'auto',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white'
                    },
                    display: { xs: 'none', sm: 'flex' }
                }}
            >
                ‹
            </Button>

            <Button
                className="swiper-button-next-custom"
                sx={{
                    position: 'absolute',
                    right: { xs: -10, sm: -20 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    minWidth: 'auto',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white'
                    },
                    display: { xs: 'none', sm: 'flex' }
                }}
            >
                ›
            </Button>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-custom',
                }}
                // style={{ padding: '10px 0 40px' }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project._id}>
                        <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    position: "relative",
                                    boxShadow: 3,
                                    "&:hover .image": { transform: "scale(1.05)" },
                                    "&:hover .overlay": { opacity: 1 },
                                }}
                            >
                                {/* Category Label */}
                                <Chip
                                    label={project.category}
                                    size="small"
                                    variant="filled"
                                    color="warning"
                                    sx={{
                                        position: "absolute",
                                        top: 12,
                                        right: 12,
                                        color: "white",
                                        // bgcolor: (theme) => alpha(theme.palette.primary.main, 0.15),
                                        // fontWeight: 600,
                                        zIndex: 2
                                    }}
                                />

                                {/* Project Image */}
                                {project.images?.length > 0 && (
                                    <Box sx={{ position: "relative" }}>
                                        <CardMedia
                                            component="img"
                                            width={"200px"}
                                            image={`${project.images[0]}`}
                                            alt={project.title}
                                            className="image"
                                            sx={{
                                                objectFit: "cover",
                                                transition: "transform 0.6s ease",
                                                height: "200px"
                                            }}
                                        />

                                        {/* Overlay with title/description */}
                                        <Box
                                            className="overlay"
                                            sx={{
                                                position: "absolute",
                                                inset: 0,
                                                bgcolor: "rgba(0,0,0,0.55)",
                                                color: "white",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                opacity: 0,
                                                transition: "opacity 0.4s",
                                                p: 2,
                                                textAlign: "center",
                                            }}
                                        >
                                            {/* <Typography variant="h6" fontWeight={700}>
                                                {project.title}
                                            </Typography> */}
                                            <Typography
                                                variant="body2"
                                                sx={{ mt: 1, maxWidth: "90%" }}
                                            >
                                                {project.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}

                                {/* Content */}
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        // variant="h6"
                                        fontWeight={500}
                                        sx={{ color: 'white', mb: 0.5 }}
                                        gutterBottom
                                        noWrap
                                        title={project?.title || "Untitled Project"}
                                    >
                                        {project?.title || "Untitled Project"}
                                    </Typography>
                                    {/* <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                        noWrap
                                        title={project.description}
                                    >
                                        {project.description}
                                    </Typography> */}

                                    {/* Technologies */}
                                    {/* <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                                        {project?.technologies?.slice(0, 4).map((tag, idx: number) => (
                                            <Chip
                                                key={idx}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        alpha(theme.palette.primary.main, 0.1),
                                                    fontSize: "0.75rem",
                                                }}
                                            />
                                        ))}
                                    </Box> */}
                                    <Box sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                                        {formatDate(project?.created_at)}
                                    </Box>
                                </CardContent>

                                {/* Actions */}
                                <Box sx={{ p: 2, display: "flex", gap: 1, mt: "auto" }}>
                                    {project.demo_url && (
                                        <Button
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            startIcon={<ExternalLink size={16} />}
                                            component="a"
                                            href={project.demo_url}
                                            target="_blank"
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                </Box>
                            </Card>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom pagination */}
            <Box
                className="swiper-pagination-custom"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 2,
                    '& .swiper-pagination-bullet': {
                        width: '10px',
                        height: '10px',
                        backgroundColor: 'grey.400',
                        opacity: 1,
                        margin: '0 4px',
                    },
                    '& .swiper-pagination-bullet-active': {
                        backgroundColor: 'primary.main',
                    }
                }}
            />
        </Box>
    );
}