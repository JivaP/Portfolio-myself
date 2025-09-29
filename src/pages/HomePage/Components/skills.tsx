// "use client";
// import { Box, Container, Typography, useTheme } from "@mui/material";
// import { motion } from "framer-motion";
// import {
//   Code2,
//   Layout,
//   Palette,
//   Cpu,
//   Atom,
//   Box as BoxIcon,
//   Database,
//   Cog,
//   Brain,
// } from "lucide-react";

// const skills = [
//   { name: "HTML5", icon: <Code2 size={32} color="#E44D26" /> },
//   { name: "CSS3", icon: <Layout size={32} color="#1572B6" /> },
//   { name: "Bootstrap", icon: <Palette size={32} color="#7952B3" /> },
//   { name: "Material UI", icon: <Cpu size={32} color="#007FFF" /> },
//   { name: "Next.js", icon: <BoxIcon size={32} color="#000000" /> },
//   { name: "React.js", icon: <Atom size={32} color="#61DAFB" /> },
//   { name: "JavaScript", icon: <Database size={32} color="#F7DF1E" /> },
//   { name: "TypeScript", icon: <Cog size={32} color="#3178C6" /> },
//   { name: "AI Tools", icon: <Brain size={32} color="#10A37F" /> },
// ];

// export default function SkillsRollerCoaster() {
//   const theme = useTheme()
//   return (
//     <Box
//       component="section"
//       sx={{
//         pt: { xs: 10, md: 14 },
//         // background: "#fdfdfd",
//         // overflow: "hidden",
//         // position: "relative",
//       }}
//     >
//       {/* <Container> */}
//       <Typography
//         variant="h4"
//         align="center"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ mb: 6 }}
//       >
//         Skills
//       </Typography>

//       {/* Roller-Coaster Effect */}
//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           // height: "200px",
//           overflow: "hidden",
//           padding: 2,
//           background: theme.palette.getContrastText(theme.palette.background.paper),

//         }}
//       >
//         <motion.div
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
//           style={{
//             display: "flex",
//             gap: "40px",
//             width: "max-content",
//             // position: "absolute",
//             // whiteSpace: "nowrap",
//             // background: "yellow"

//           }}
//         >
//           {/* Double skills so loop looks seamless */}
//           {[...skills, ...skills].map((skill, i) => (
//             <Box
//               key={i}
//               sx={{

//                 display: "flex",
//                 gap: 1,
//                 alignItems: "center",

//               }}
//             >
//               {skill.icon}
//               <Typography
//                 variant="subtitle2"
//                 sx={{ mt: 1, fontWeight: 600, fontSize: "0.9rem", color: theme.palette.primary }}
//               >
//                 {skill.name}
//               </Typography>
//             </Box>
//           ))}
//         </motion.div>
//       </Box>
//       {/* </Container> */}
//     </Box>
//   );
// }


"use client";
import { Box,  Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Palette,
  Cpu,
  Atom,
  Box as BoxIcon,
  Database,
  Cog,
  Brain,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: <Code2 size={32} /> },
  { name: "CSS3", icon: <Layout size={32} /> },
  { name: "Bootstrap", icon: <Palette size={32} /> },
  { name: "Material UI", icon: <Cpu size={32} /> },
  { name: "Next.js", icon: <BoxIcon size={32} /> },
  { name: "React.js", icon: <Atom size={32} /> },
  { name: "JavaScript", icon: <Database size={32} /> },
  { name: "TypeScript", icon: <Cog size={32} /> },
  { name: "AI Tools", icon: <Brain size={32} /> },
];

export default function SkillsRollerCoaster() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 2, md: 10 },
      }}
    >

      {/* Roller-Coaster Effect */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          py: 1,
          borderTop: `1px solid ${theme.palette.primary.main}`,
          borderBottom: `1px solid ${theme.palette.primary.main}`,
          // background: theme.palette.background.paper,
          // background: "black",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          style={{
            display: "flex",
            gap: "40px",
            width: "max-content",
          }}
        >
          {/* Double skills so loop looks seamless */}
          {[...skills, ...skills].map((skill, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                px: 1,
                // py: 1,
                borderRadius: 1,
                // bgcolor: "white",
                // boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              {/* Icon with primary color + shadow */}
              <Box
                sx={{
                  color: theme.palette.primary.light,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))",
                }}
              >
                {skill.icon}
              </Box>

              {/* Text with primary color + shadow */}
              <Typography
                variant="subtitle2"
                sx={{
                  // mt: 1,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "white",
                  // textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
