"use client";
// import React from "react";
import { motion } from "framer-motion";

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js",
    "Tailwind", "Node.js", "Express", "MongoDB", "Git"
];

export default function RotatingSkills() {
    const radius = 180; // circle radius

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
            {/* Center circle */}
            <motion.div
                className="w-40 h-40 rounded-full bg-neutral-700 flex items-center justify-center text-white font-bold"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                Skills
            </motion.div>

            {/* Orbiting skills */}
            {skills.map((skill, i) => {
                const angle = (i / skills.length) * (2 * Math.PI); // angle in radians
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <motion.div
                        key={skill}
                        className="absolute w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center text-white text-sm shadow-lg cursor-pointer"
                        style={{
                            left: `calc(50% + ${x}px - 40px)`, // center align
                            top: `calc(50% + ${y}px - 40px)`,
                        }}
                        whileHover={{ scale: 1.2 }}
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {skill}
                    </motion.div>
                );
            })}
        </div>
    );
}
