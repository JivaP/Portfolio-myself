import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
// Scroll indicator component
export const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
    };
    useEffect(() => {

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
        >
            <div className="h-40 w-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    className="bg-gradient-to-b from-primary to-accent w-full rounded-full"
                    style={{ height: `${scrollProgress}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${scrollProgress}%` }}
                    transition={{ duration: 0.2 }}
                />
            </div>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
        </motion.div>
    );
};
