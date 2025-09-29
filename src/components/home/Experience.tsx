// Experience showcase section
import { useScroll, useTransform, motion } from "framer-motion";
import { Code2, Palette, Smartphone, Star, Target, Zap } from "lucide-react";
import { useRef } from "react";
export const ExperienceShowcase = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

    const stats = [
        { value: "1+", label: "Years Experience", icon: <Target className="w-8 h-8" /> },
        { value: "10+", label: "Projects Completed", icon: <Code2 className="w-8 h-8" /> },
        { value: "100%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> },
    ];

    const skills = [
        { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, level: 95 },
        { name: "Frontend Development", icon: <Code2 className="w-6 h-6" />, level: 98 },
        { name: "Responsive Design", icon: <Smartphone className="w-6 h-6" />, level: 97 },
        { name: "Performance Optimization", icon: <Zap className="w-6 h-6" />, level: 90 },
    ];

    return (
        <motion.section
            ref={ref}
            style={{ opacity, y }}
            className="py-20 md:py-28 relative"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        A Decade of Digital Excellence
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        With over 10 years of experience creating digital experiences that users love and businesses value.
                    </motion.p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-gray-800 text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="text-primary mb-4 flex justify-center">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-gray-800"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="text-primary mr-3">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{skill.name}</h3>
                                <span className="ml-auto text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2.5">
                                <motion.div
                                    className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};