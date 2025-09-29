


// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Box,
//   CircularProgress,
//   Button,
//   Chip,
//   Avatar,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Paper,
//   useTheme,
//   alpha,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import {
//   AwardIcon,
//   CalendarIcon,
//   CodeIcon,
//   DownloadIcon,
//   MailIcon,
//   MapPinIcon,
// } from "lucide-react";
// // import { glitterText, glitterText2 } from "@/components/ui/glitterStyles";

// // Types
// type Skill = {
//   id: number;
//   name: string;
//   level: number;
//   category: string;
// };

// type Experience = {
//   id: number;
//   position: string;
//   company: string;
//   startDate: string;
//   endDate?: string;
//   current?: number;
//   description: string;
// };

// // Motion components
// const MotionCard = motion(Card);
// const MotionPaper = motion(Paper);

// const AboutPage: React.FC = () => {
//   const [skills, setSkills] = useState<Skill[]>([]);
//   const [experiences, setExperiences] = useState<Experience[]>([]);
//   const [loading, setLoading] = useState(true);
//   const theme = useTheme();

//   // Sample Data
//   const sampleSkills: Skill[] = [
//     { id: 1, name: "HTML5", level: 85, category: "Frontend" },
//     { id: 2, name: "CSS3", level: 85, category: "Frontend" },
//     { id: 3, name: "React.js", level: 90, category: "Frontend" },
//     { id: 4, name: "TypeScript", level: 85, category: "Frontend" },
//     { id: 5, name: "Next.js (React Framework)", level: 85, category: "Frontend" },
//     { id: 6, name: "JavaScript (ES6+)", level: 85, category: "Frontend" },
//     { id: 7, name: "Redux Toolkit", level: 85, category: "Frontend" },
//     { id: 7, name: "Zustand", level: 85, category: "Frontend" },
//     // { id: 3, name: "Next.js", level: 80, category: "Frontend  " },
//     // { id: 4, name: "MongoDB", level: 75, category: "Database" },
//     // { id: 5, name: "AWS", level: 60, category: "Cloud" },
//   ];

//   const sampleExperiences: Experience[] = [
//     {
//       id: 1,
//       position: "Frontend Developer",
//       company: "webdads2u private limited",
//       startDate: "2024-06-01",
//       endDate: "persent",
//       current: 1,
//       description:
//         "Worked on modern web apps using React, TypeScript, and Material UI.",
//     },

//   ];
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [])
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         // simulate API delay
//         await new Promise((res) => setTimeout(res, 800));
//         setSkills(sampleSkills);
//         setExperiences(sampleExperiences);
//       } catch (error) {
//         console.error("Error loading about data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   const skillCategories = skills.reduce((acc, skill) => {
//     if (!acc[skill.category]) {
//       acc[skill.category] = [];
//     }
//     acc[skill.category].push(skill);
//     return acc;
//   }, {} as Record<string, Skill[]>);

//   if (loading) {
//     return (
//       <Container
//         sx={{
//           py: 8,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "50vh",
//         }}
//       >
//         <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//           <CircularProgress />
//           <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
//             Loading...
//           </Typography>
//         </Box>
//       </Container>
//     );
//   }

//   return (
//     <Container sx={{ py: 8 }}>
//       {/* Hero Section */}
//       <Box sx={{ textAlign: "center", mb: 8 }}>
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//           <Avatar
//             sx={{
//               width: 128,
//               height: 128,
//               mx: "auto",
//               mb: 4,
//               bgcolor: "primary.main",
//               color: "primary.contrastText",
//             }}
//           >
//             <CodeIcon style={{ fontSize: 64 }} />
//           </Avatar>
//           <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
//             About Me
//           </Typography>
//           <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.6 }}>
//             I'm a passionate Frontend developer with a love for creating digital experiences
//             that make a difference. With expertise in modern web technologies, I build scalable
//             applications that solve real-world problems.
//           </Typography>
//         </motion.div>
//       </Box>

//       {/* Stats */}
//       <Grid container spacing={3} sx={{ mb: 8 }}>
//         {[
//           { value: "1+", label: "Years Experience" },
//           { value: "10+", label: "Projects Completed" },
//           { value: "10+", label: "Happy Clients" },
//           { value: "10+", label: "Technologies" },
//         ].map((stat, index) => (
//           <Grid size={{ xs: 12, lg: 3 }} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               style={{ textAlign: "center" }}
//             >
//               <Typography variant="h3" color="white" gutterBottom>
//                 {stat.value}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {stat.label}
//               </Typography>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>

//       <Grid container spacing={6}>
//         {/* Personal Info */}
//         <Grid size={{ xs: 12, lg: 6 }}>
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//             <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
//               Personal Information
//             </Typography>

//             <List sx={{ mb: 4 }}>
//               {[
//                 { icon: <MapPinIcon style={{ color: "white" }} />, primary: "Location", secondary: "Chennai" },
//                 { icon: <CalendarIcon style={{ color: "white" }} />, primary: "Experience", secondary: "1+ Years" },
//                 { icon: <MailIcon style={{ color: "white" }} />, primary: "Email", secondary: "jiiva4474@gmail.com" },
//               ].map((item, index) => (
//                 <ListItem key={index} sx={{ px: 0 }}>
//                   <ListItemIcon sx={{ minWidth: 48 }}>
//                     <Avatar sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), width: 40, height: 40 }}>
//                       {item.icon}
//                     </Avatar>
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={item.primary}
//                     secondary={item.secondary}
//                     primaryTypographyProps={{ fontWeight: "medium" }}
//                   />
//                 </ListItem>
//               ))}
//             </List>

//             <Box sx={{ display: "flex", gap: 2 }}>
//               <Button variant="contained" startIcon={<DownloadIcon />}>
//                 Download CV
//               </Button>
//               <Button variant="outlined" href="mailto:jiiva4474@gmail.com" startIcon={<MailIcon />}>
//                 Contact Me
//               </Button>
//             </Box>
//           </motion.div>
//         </Grid>

//         {/* Skills & Experience */}
//         <Grid size={{ xs: 12, lg: 6 }} >
//           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//             {/* Skills */}
//             <Box sx={{ mb: 8 }}>
//               <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
//                 Skills & Technologies
//               </Typography>

//               {Object.keys(skillCategories).length === 0 ? (
//                 <Box sx={{ textAlign: "center", py: 4 }}>
//                   <Typography variant="body2" color="text.secondary">
//                     No skills data available.
//                   </Typography>
//                 </Box>
//               ) : (
//                 <Box sx={{ "& > div:not(:last-child)": { mb: 4 } }}>
//                   {Object.entries(skillCategories).map(([category, categorySkills]) => (
//                     <Box key={category}>
//                       <Typography
//                         variant="h6"
//                         gutterBottom
//                         sx={{ fontWeight: "semibold", textTransform: "capitalize" }}
//                       >
//                         {category}
//                       </Typography>
//                       <Box sx={{ "& > div:not(:last-child)": { mb: 2 } }}>
//                         {categorySkills.map((skill) => (
//                           <Box key={skill.id}>
//                             <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//                               <Typography variant="body2" fontWeight="medium">
//                                 {skill.name}
//                               </Typography>
//                               {/* <Typography variant="body2" color="text.secondary">
//                                 {skill.level}%
//                               </Typography> */}
//                             </Box>
//                             {/* <Box sx={{ width: "100%", bgcolor: "grey.200", borderRadius: 4, overflow: "hidden" }}>
//                               <motion.div
//                                 initial={{ width: 0 }}
//                                 animate={{ width: `${skill.level}%` }}
//                                 transition={{ duration: 1, delay: 0.2 }}
//                                 style={{
//                                   height: 8,
//                                   background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                                   borderRadius: 4,
//                                 }}
//                               />
//                             </Box> */}
//                           </Box>
//                         ))}
//                       </Box>
//                     </Box>
//                   ))}
//                 </Box>
//               )}
//             </Box>

//             {/* Experience */}
//             <Box>
//               <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
//                 Work Experience
//               </Typography>

//               {experiences.length === 0 ? (
//                 <Box sx={{ textAlign: "center", py: 4 }}>
//                   <Typography variant="body2" color="text.secondary">
//                     No experience data available.
//                   </Typography>
//                 </Box>
//               ) : (
//                 <Box sx={{ "& > div:not(:last-child)": { mb: 3 } }}>
//                   {experiences.map((exp, index) => (
//                     <MotionCard
//                       key={exp.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       elevation={2}
//                     >
//                       <CardContent sx={{ p: 3 }}>
//                         <Box
//                           sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}
//                         >
//                           <Box>
//                             <Typography variant="h6" component="h3" gutterBottom>
//                               {exp.position}
//                             </Typography>
//                             <Typography variant="body2" sx={{ color: "white ", fontSize: "16px", letterSpacing: "1px" }} fontWeight="800">
//                               {exp.company}
//                             </Typography>
//                           </Box>
//                           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                             <CalendarIcon style={{ fontSize: 18 }} />
//                             <Typography variant="body2" color="text.secondary">
//                               {new Date(exp.startDate).getFullYear()} -{" "}
//                               {Number(exp.current) > 0
//                                 ? "Present"
//                                 : exp.endDate
//                                   ? new Date(exp.endDate).getFullYear()
//                                   : "N/A"}
//                             </Typography>
//                             {Number(exp.current) > 0 && (
//                               <Chip
//                                 label="Current"
//                                 size="small"
//                                 color="success"
//                                 variant="outlined"
//                                 sx={{ height: 20, fontSize: "0.7rem" }}
//                               />
//                             )}
//                           </Box>
//                         </Box>
//                         <Typography variant="body2" color="text.secondary">
//                           {exp.description}
//                         </Typography>
//                       </CardContent>
//                     </MotionCard>
//                   ))}
//                 </Box>
//               )}
//             </Box>
//           </motion.div>
//         </Grid>
//       </Grid>

//       {/* CTA Section */}
//       <MotionPaper
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         elevation={0}
//         sx={{
//           mt: 10,
//           textAlign: "center",
//           // bgcolor: alpha(theme.palette.primary.main, 0.05),
//           borderRadius: 4,
//           p: 6,
//         }}
//       >
//         <AwardIcon style={{ fontSize: 48, marginBottom: 2 }} />
//         <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
//           Ready to Work Together?
//         </Typography>
//         <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
//           I'm always interested in new opportunities and exciting projects. Let's discuss how we can
//           bring your ideas to life.
//         </Typography>
//         <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
//           <Button variant="contained" size="large" href="mailto:jiiva4474@gmail.com" startIcon={<MailIcon />}>
//             Get in Touch
//           </Button>
//           <Button variant="outlined" size="large" href="/projects">
//             View My Work
//           </Button>
//         </Box>
//       </MotionPaper>
//     </Container>
//   );
// };

// export default AboutPage;
"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Button,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  AwardIcon,
  CalendarIcon,
  CodeIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";

// Types
type Skill = {
  id: number;
  name: string;
  level: number;
  category: string;
};

type Experience = {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  current?: number;
  description: string;
};

// Motion components
const MotionCard = motion(Card);
const MotionPaper = motion(Paper);

// Counter component for animated numbers
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString());
    if (start === end) return;

    const totalMilliseconds = duration * 1000;
    const incrementTime = (totalMilliseconds / end) * 0.5;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count}+</>;
};

const AboutPage: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  // Sample Data
  const sampleSkills: Skill[] = [
    { id: 1, name: "HTML5", level: 85, category: "Frontend" },
    { id: 2, name: "CSS3", level: 85, category: "Frontend" },
    { id: 3, name: "React.js", level: 90, category: "Frontend" },
    { id: 4, name: "TypeScript", level: 85, category: "Frontend" },
    { id: 5, name: "Next.js (React Framework)", level: 85, category: "Frontend" },
    { id: 6, name: "JavaScript (ES6+)", level: 85, category: "Frontend" },
    { id: 7, name: "Redux Toolkit", level: 85, category: "Frontend" },
    { id: 8, name: "Zustand", level: 85, category: "Frontend" },
  ];

  const sampleExperiences: Experience[] = [
    {
      id: 1,
      position: "Frontend Developer",
      company: "Webdads2u private limited",
      startDate: "2024-06-01",
      endDate: "present",
      current: 1,
      description:
        "Worked on modern web apps using React,Nextjs,TypeScript, and Material UI.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        // simulate API delay
        await new Promise((res) => setTimeout(res, 800));
        setSkills(sampleSkills);
        setExperiences(sampleExperiences);
      } catch (error) {
        console.error("Error loading about data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (loading) {
    return (
      <Container
        sx={{
          py: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CircularProgress />
          <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
            Loading...
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Avatar
            sx={{
              width: 128,
              height: 128,
              mx: "auto",
              mb: 4,
              bgcolor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            <CodeIcon style={{ fontSize: 64 }} />
          </Avatar>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            About Me
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.6 }}>
            I'm a passionate Frontend developer with a love for creating digital experiences
            that make a difference. With expertise in modern web technologies, I build scalable
            applications that solve real-world problems.
          </Typography>
        </motion.div>
      </Box>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {[
          { value: 1, label: "Years Experience" },
          { value: 10, label: "Projects Completed" },
          // { value: 10, label: "Happy Clients" },
          { value: 10, label: "Technologies" },
        ].map((stat, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(
                    theme.palette.secondary.main,
                    0.1
                  )} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                }}
              >
                <Typography variant="h3" color="white" gutterBottom sx={{ fontWeight: "bold" }}>
                  <Counter value={stat.value} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={6}>
        {/* Personal Info */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
              Personal Information
            </Typography>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(
                  theme.palette.secondary.main,
                  0.05
                )} 100%)`,
              }}
            >
              <List>
                {[
                  { icon: <MapPinIcon style={{ color: "white" }} />, primary: "Location", secondary: "Chennai" },
                  { icon: <CalendarIcon style={{ color: "white" }} />, primary: "Experience", secondary: "1+ Years" },
                  { icon: <MailIcon style={{ color: "white" }} />, primary: "Email", secondary: "jiiva4474@gmail.com" },
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 48 }}>
                      <Avatar sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), width: 40, height: 40 }}>
                        {item.icon}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={item.primary}
                      secondary={item.secondary}
                      primaryTypographyProps={{ fontWeight: "medium" }}
                      secondaryTypographyProps={{ color: "text.primary", fontWeight: "medium" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href="/jeeva-cv.pdf" target="_blank" startIcon={<DownloadIcon />}>
                Download CV
              </Button>
              <Button variant="outlined" size="large" href="mailto:jiiva4474@gmail.com" startIcon={<MailIcon />}>
                Contact Me
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* Skills & Experience */}
        <Grid size={{ xs: 12, md: 6 }} >
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {/* Skills */}
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
                Skills & Technologies
              </Typography>

              {Object.keys(skillCategories).length === 0 ? (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <Typography variant="body2" color="text.secondary">
                    No skills data available.
                  </Typography>
                </Box>
              ) : (
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(
                      theme.palette.secondary.main,
                      0.05
                    )} 100%)`,
                  }}
                >
                  {Object.entries(skillCategories).map(([category, categorySkills]) => (
                    <Box key={category} sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "semibold", textTransform: "capitalize", color: "primary.main" }}
                      >
                        {category}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {categorySkills.map((skill) => (
                          <Chip
                            key={skill.id}
                            label={skill.name}
                            variant="outlined"
                            sx={{
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              borderColor: alpha(theme.palette.primary.main, 0.3),
                              color: "text.primary",
                              fontWeight: "medium",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Paper>
              )}
            </Box>

            {/* Experience */}
            <Box>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
                Work Experience
              </Typography>

              {experiences.length === 0 ? (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <Typography variant="body2" color="text.secondary">
                    No experience data available.
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ "& > div:not(:last-child)": { mb: 3 } }}>
                  {experiences.map((exp, index) => (
                    <MotionCard
                      key={exp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      elevation={2}
                      sx={{
                        borderRadius: 4,
                        // background: ,
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2, flexWrap: "wrap" }}
                        >
                          <Box>
                            <Typography variant="h6" component="h3" gutterBottom   >
                              {exp.position}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.primary", fontSize: "16px", fontWeight: "800", letterSpacing: "1.2px" }}>
                              {exp.company}
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: { xs: 1, sm: 0 } }}>
                            <CalendarIcon style={{ fontSize: 18, color: "#511F89" }} />
                            <Typography variant="body2" color="text.primary" fontWeight="medium">
                              {new Date(exp.startDate).getFullYear()} -{" "}
                              {Number(exp.current) > 0
                                ? "Present"
                                : exp.endDate
                                  ? new Date(exp.endDate).getFullYear()
                                  : "N/A"}
                            </Typography>
                            {Number(exp.current) > 0 && (
                              <Chip
                                label="Current"
                                size="small"
                                color="success"
                                variant="outlined"
                                sx={{ height: 20, fontSize: "0.7rem" }}
                              />
                            )}
                          </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {exp.description}
                        </Typography>
                      </CardContent>
                    </MotionCard>
                  ))}
                </Box>
              )}
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* CTA Section */}
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        elevation={0}
        sx={{
          mt: 10,
          textAlign: "center",
          borderRadius: 4,
          p: 6,
          // background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(
          //   theme.palette.secondary.main,
          //   0.1
          // )} 100%)`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        }}
      >
        <AwardIcon style={{ fontSize: 48, marginBottom: 2, color: theme.palette.primary.main }} />
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Ready to Work Together?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can
          bring your ideas to life.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" href="mailto:jiiva4474@gmail.com" startIcon={<MailIcon />}>
            Get in Touch
          </Button>
          <Button variant="outlined" size="large" href="/projects">
            View My Work
          </Button>
        </Box>
      </MotionPaper>
    </Container>
  );
};

export default AboutPage;