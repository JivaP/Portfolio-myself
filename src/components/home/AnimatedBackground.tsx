// import { motion } from "framer-motion";
// // Background animation component
// export const AnimatedBackground = () => {
//     return (
//         <div className="fixed inset-0 -z-10 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-purple-950 opacity-100"></div>

//             {/* Animated grid */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//             {/* Floating elements */}
//             <motion.div
//                 className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 blur-3xl"
//                 animate={{
//                     x: [0, 30, 0],
//                     y: [0, -30, 0],
//                 }}
//                 transition={{
//                     duration: 15,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                 }}
//             />

//             <motion.div
//                 className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur-3xl"
//                 animate={{
//                     x: [0, -50, 0],
//                     y: [0, 30, 0],
//                 }}
//                 transition={{
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                 }}
//             />

//             {/* Animated particles */}
//             {[...Array(15)].map((_, i) => (
//                 <motion.div
//                     key={i}
//                     className="absolute w-2 h-2 bg-white rounded-full opacity-20"
//                     style={{
//                         left: `${Math.random() * 100}%`,
//                         top: `${Math.random() * 100}%`,
//                     }}
//                     animate={{
//                         y: [0, -20, 0],
//                         opacity: [0.2, 0.5, 0.2],
//                     }}
//                     transition={{
//                         duration: 3 + Math.random() * 5,
//                         repeat: Infinity,
//                         delay: Math.random() * 2,
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

import  { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

// Custom cursor component
export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const mouseMove = (e: any) => setMousePosition({ x: e.clientX, y: e.clientY });
        const mouseDown = () => setIsClicked(true);
        const mouseUp = () => setIsClicked(false);

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mousedown', mouseDown);
        window.addEventListener('mouseup', mouseUp);

        const handleMouseEnter = (e: any) => {
            if (e.target.matches('button, a, input, textarea, [data-cursor="pointer"]')) {
                setCursorVariant("pointer");
            } else if (e.target.matches('[data-cursor="text"]')) {
                setCursorVariant("text");
            } else if (e.target.matches('[data-cursor="zoom"]')) {
                setCursorVariant("zoom");
            }
        };
        const handleMouseLeave = () => setCursorVariant("default");

        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mousedown', mouseDown);
            window.removeEventListener('mouseup', mouseUp);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    // Cursor variants
    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: 1,
            transition: { type: "spring" as const, mass: 0.1, damping: 15 }
        },
        pointer: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1.5,
            backgroundColor: "#fff",
            transition: { type: "spring" as const, mass: 0.1, damping: 15 }
        },
        text: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 2,
            backgroundColor: "rgba(255,255,255,0.3)",
            transition: { type: "spring" as const, mass: 0.1, damping: 15 }
        },
        zoom: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 1.8,
            backgroundColor: "transparent",
            transition: { type: "spring" as const, mass: 0.1, damping: 15 }
        }
    };

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    border: cursorVariant === "zoom" ? "2px solid rgba(255,255,255,0.8)" : "none",
                    backdropFilter: cursorVariant === "text" ? "blur(2px)" : "none",
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    zIndex: 9999,
                    scale: isClicked ? 0.7 : 1
                }}
            />

            {/* Cursor follower */}
            <motion.div
                className="cursor-follower"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                }}
                transition={{ type: "spring", mass: 0.2, damping: 10, stiffness: 100 }}
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.2)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    zIndex: 9998,
                }}
            />

            {/* Trail */}
            <CursorTrail mousePosition={mousePosition} />
        </>
    );
};

// Cursor trail
type TrailPoint = { x: number; y: number; id: number };

const CursorTrail = ({ mousePosition }: any) => {
    const [trail, setTrail] = useState<TrailPoint[]>([]);

    useEffect(() => {
        const newPoint = { x: mousePosition.x, y: mousePosition.y, id: Date.now() };
        setTrail(prev => [...prev.slice(-4), newPoint] as any);

        const timer = setTimeout(() => {
            setTrail(prev => prev.filter(point => point?.id as any !== newPoint.id));
        }, 500);

        return () => clearTimeout(timer);
    }, [mousePosition]);

    return (
        <>
            {trail.map((point, index) => (
                <motion.div
                    key={point.id}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        left: point.x - 4,
                        top: point.y - 4,
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: `rgba(150,120,255,${0.2 + index * 0.2})`,
                        pointerEvents: 'none',
                        zIndex: 9997,
                    }}
                />
            ))}
        </>
    );
};

// Background animation
export const AnimatedBackground = () => {
    const particles = useMemo(
        () => Array.from({ length: 15 }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 3 + Math.random() * 5,
            delay: Math.random() * 2
        })),
        []
    );

    return (
        <div className="fixed inset-1 -z-10 overflow-hidden ">
            <div className="absolute inset-0  bg-gradient-to-br from-black via-slate-950 to-purple-950"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Floating blobs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                    style={{ left: p.left, top: p.top }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
                />
            ))}
        </div>
    );
};

// Demo showcase
export const CursorDemo = () => (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-white p-8">
        <AnimatedBackground />
        <CustomCursor />

        <h1 className="text-4xl font-bold mb-8 z-10">Interactive Cursor Demo</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full z-10">
            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <h2 className="text-2xl font-semibold mb-4">Default Cursor</h2>
                <div className="h-32 bg-slate-800/50 rounded-lg flex items-center justify-center">
                    <span>Hover over me</span>
                </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <h2 className="text-2xl font-semibold mb-4">Pointer Cursor</h2>
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-purple-600 rounded-lg">Button</button>
                    <a href="#demo" className="px-4 py-2 bg-cyan-600 rounded-lg">Link</a>
                </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <h2 className="text-2xl font-semibold mb-4">Text Cursor</h2>
                <div data-cursor="text" className="h-32 bg-slate-800/50 rounded-lg flex items-center justify-center">
                    <span>This area has text cursor</span>
                </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <h2 className="text-2xl font-semibold mb-4">Zoom Cursor</h2>
                <div data-cursor="zoom" className="h-32 bg-slate-800/50 rounded-lg flex items-center justify-center">
                    <span>Hover for zoom cursor</span>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center z-10">
            <p className="text-lg mb-4">Try clicking anywhere to see the click animation</p>
            <p className="text-slate-400">The cursor will also leave a subtle trail as it moves</p>
        </div>
    </div>
);

export default CursorDemo;
