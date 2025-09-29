// Updated SocialLinks with better animation
import { motion } from "framer-motion";
export const SocialLinks = ({ socials }: any) => {
    return (
        <motion.div
            className="flex gap-4 justify-center mt-8 py-12 relative z-10"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
        >
            {socials.map(({ name, icon: Icon, href }: any) => (
                <motion.a
                    key={name}
                    href={href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-gray-500 rounded-full px-5 py-2.5 hover:bg-gray-900 transition bg-black/30 backdrop-blur-sm"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <Icon className="w-4 h-4" /> {name}
                </motion.a>
            ))}
        </motion.div>
    );
};