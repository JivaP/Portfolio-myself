// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";
// import { AnimatedBackground } from "./AnimatedBackground";
// import { ArrowDown, ChevronDown } from "lucide-react";

// // Updated HeroSection with scroll animation
// export const HeroSection = () => {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start start", "end start"]
//     });

//     const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//     const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

//     return (
//         <motion.section
//             ref={ref}
//             style={{ opacity, y }}
//             className="min-h-screen bg-black text-white px-6 flex items-center justify-center relative overflow-hidden"
//         >
//             {/* <AnimatedBackground /> */}

//             <div className="max-w-6xl mx-auto w-full grid grid-cols-12 gap-1 relative z-10">

//                 {/* LEFT */}
//                 <motion.div
//                     className="col-span-12 md:col-span-8 flex flex-col text-start space-y-6"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <h1 className="font-serif text-5xl md:text-[8rem] font-light leading-snug">
//                         <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                             Frontend
//                         </span>
//                     </h1>
//                 </motion.div>

//                 {/* RIGHT
//                 <motion.div
//                     className="col-span-12 md:col-span-4 items-center my-auto space-y-6"
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                 >
//                     <div className="flex flex-col items-center  space-y-4">
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="md:text-[2rem] flex justify-between bg-white w-full text-black font-medium px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
//                         >
//                             Projects
//                             <ArrowDown className="w-full h-10 ml-auto" />
//                         </motion.button>


//                     </div>
//                 </motion.div> */}

//                 {/* INTRO TEXT */}
//                 <motion.div
//                     className="col-span-12 md:col-span-6 text-start space-y-6"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                 >
//                     <p className="text-gray-300 md:text-lg">
//                         I'm <span className="text-yellow-400 font-bold">Jeeva</span>, a
//                         Frontend developer with over a decade of experience creating exceptional digital
//                         experiences. Currently focused on building accessible,
//                         human-centered products.
//                     </p>
//                 </motion.div>

//                 {/* DEVELOPER TEXT */}
//                 <motion.div
//                     className="col-span-12 md:col-span-6 text-center space-y-6"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                 >
//                     <h1 className="font-serif text-5xl md:text-[8rem] font-light leading-snug">
//                         <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
//                             Developer
//                         </span>
//                     </h1>
//                 </motion.div>
//             </div>

//             {/* Scroll hint */}
//             <motion.div
//                 className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.5 }}
//             >
//                 <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
//                 <motion.div
//                     animate={{ y: [0, 10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                 >
//                     <ChevronDown className="w-6 h-6 text-muted-foreground" />
//                 </motion.div>
//             </motion.div>
//         </motion.section>
//     );
// };
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
// import { AnimatedBackground } from "./AnimatedBackground";
import {  ChevronDown } from "lucide-react";

// Updated HeroSection with creative project button
export const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    // Letter animation variants
    //    const letterVariants = {
    //     hidden: { opacity: 0, y: 20 },
    //     visible: (i: any) => ({
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             delay: i * 0.05,
    //             duration: 0.5,
    //             ease: ["easeOut"] // use an array for easing as required by Framer Motion types
    //         }
    //     })
    // };

    const buttonText = "View Projects";
    console.log(buttonText.split(""));

    return (
        <motion.section
            ref={ref}
            style={{ opacity, y }}
            className="min-h-screen bg-black text-white px-6 flex items-center justify-center relative overflow-hidden"
        >
            {/* <AnimatedBackground /> */}

            <div className="max-w-6xl mx-auto w-full grid grid-cols-12 gap-1 relative z-10">

                {/* LEFT */}
                <motion.div
                    className="col-span-12 md:col-span-8 flex flex-col text-start space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-[8rem] font-light leading-snug">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Frontend
                        </span>
                    </h1>
                </motion.div>

                {/* RIGHT - Updated with creative button */}
                <motion.div
                    className="col-span-12 md:col-span-4 items-center my-auto space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <motion.div
                            className="relative group"
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            {/* Main button */}
                            <motion.div
                                className="absolute bottom-8  -translate-x-1/2 flex flex-col items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                                </motion.div>
                            </motion.div>

                            {/* Floating particles around button */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-cyan-400 opacity-0"
                                    variants={{
                                        rest: {
                                            opacity: 0,
                                            scale: 0,
                                            transition: { duration: 0.3 }
                                        },
                                        hover: {
                                            opacity: [0, 0.8, 0],
                                            scale: [0, 1.2, 0],
                                            transition: {
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2
                                            }
                                        }
                                    }}
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* INTRO TEXT */}
                <motion.div
                    className="col-span-12 md:col-span-6 text-start space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-gray-300 md:text-lg">
                        I'm <span className="text-yellow-400 font-bold">Jeeva</span>, a
                        Frontend developer with over a decade of experience creating exceptional digital
                        experiences. Currently focused on building accessible,
                        human-centered products.
                    </p>
                </motion.div>

                {/* DEVELOPER TEXT */}
                <motion.div
                    className="col-span-12 md:col-span-6 text-center space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h1 className="font-serif text-5xl md:text-[8rem] font-light leading-snug">
                        <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                            Developer
                        </span>
                    </h1>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
};