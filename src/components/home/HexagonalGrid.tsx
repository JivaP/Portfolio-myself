import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HexagonalGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Hexagon animation
  const hexagonVariants = {
    hidden: { opacity: 0, rotate: -15, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring" as "spring",
        stiffness: 60,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Animated Hexagonal Grid
        </motion.h1>
        
        <motion.div 
          className="w-full h-[517px] relative overflow-hidden rounded-xl border border-slate-700 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
          </div>
          
          {/* Animated dots */}
          <motion.div
            className="absolute"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Row 1 */}
            <motion.div className="w-1.5 h-1.5 left-[804.64px] top-[104.91px] absolute bg-cyan-400 rounded-full" variants={itemVariants} />
            <motion.div className="w-3.5 h-4 left-[787.56px] top-[92.72px] absolute bg-emerald-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[768.20px] top-[92.72px] absolute bg-violet-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-[5.12px] h-6 left-[759.81px] top-[85.30px] absolute bg-pink-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-6 left-[736.73px] top-[92.72px] absolute bg-rose-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[716.11px] top-[92.72px] absolute bg-amber-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-1 h-6 left-[708.26px] top-[86.26px] absolute bg-sky-500 rounded-full" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[686.23px] top-[92.72px] absolute bg-lime-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[665.70px] top-[92.72px] absolute bg-indigo-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-6 left-[643.80px] top-[86.26px] absolute bg-teal-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[623.95px] top-[92.72px] absolute bg-cyan-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[604.04px] top-[92.72px] absolute bg-emerald-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-3 h-5 left-[590.18px] top-[89.14px] absolute bg-violet-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-6 left-[560.23px] top-[86.26px] absolute bg-pink-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[539.70px] top-[92.72px] absolute bg-rose-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[519.05px] top-[92.72px] absolute bg-amber-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-3.5 h-4 left-[493px] top-[92.72px] absolute bg-sky-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-1 h-6 left-[485.70px] top-[86.26px] absolute bg-lime-400 rounded-full" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[463.67px] top-[92.72px] absolute bg-indigo-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[443.04px] top-[92.72px] absolute bg-teal-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-3 h-5 left-[429.18px] top-[89.14px] absolute bg-cyan-400 rounded-md" variants={itemVariants} />

            {/* Row 2 */}
            <motion.div className="w-3 h-6 left-[965.74px] top-[47.03px] absolute bg-emerald-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[945.98px] top-[53.72px] absolute bg-violet-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[917.87px] top-[53.91px] absolute bg-pink-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-[5.12px] h-6 left-[910.41px] top-[46.30px] absolute bg-rose-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-7 h-4 left-[877.26px] top-[53.72px] absolute bg-amber-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-3 h-5 left-[852.59px] top-[50.14px] absolute bg-sky-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-6 left-[832.95px] top-[47.26px] absolute bg-lime-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-6 left-[809.33px] top-[53.72px] absolute bg-indigo-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-[5.12px] h-6 left-[800.94px] top-[46.30px] absolute bg-teal-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-2.5 h-4 left-[788.20px] top-[53.72px] absolute bg-cyan-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[758.04px] top-[53.72px] absolute bg-emerald-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-6 left-[737.51px] top-[47.26px] absolute bg-violet-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-3 h-5 left-[721.68px] top-[50.14px] absolute bg-pink-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-6 left-[693.20px] top-[47.26px] absolute bg-rose-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-6 left-[669.58px] top-[53.72px] absolute bg-amber-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[649.07px] top-[53.91px] absolute bg-sky-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[627.17px] top-[53.72px] absolute bg-lime-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-2.5 h-4 left-[615.45px] top-[53.72px] absolute bg-indigo-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-6 left-[593.55px] top-[47.26px] absolute bg-teal-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-3 h-5 left-[577.71px] top-[50.14px] absolute bg-cyan-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[549.23px] top-[53.72px] absolute bg-emerald-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[527.20px] top-[53.72px] absolute bg-violet-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-[5.12px] h-6 left-[518.81px] top-[46.30px] absolute bg-pink-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-3 h-5 left-[503.52px] top-[50.14px] absolute bg-rose-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[485.14px] top-[53.72px] absolute bg-amber-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[465.61px] top-[53.91px] absolute bg-sky-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[446.83px] top-[53.72px] absolute bg-lime-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[426.30px] top-[53.72px] absolute bg-indigo-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[404.39px] top-[53.72px] absolute bg-teal-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-[5.12px] h-6 left-[394.60px] top-[46.30px] absolute bg-cyan-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-6 left-[362.67px] top-[53.72px] absolute bg-emerald-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-4 h-4 left-[342.14px] top-[53.72px] absolute bg-violet-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-[5.12px] h-6 left-[332.35px] top-[46.30px] absolute bg-pink-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-5 h-4 left-[311.61px] top-[53.91px] absolute bg-rose-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-[5.12px] h-6 left-[304.60px] top-[46.30px] absolute bg-amber-400 rounded-md" variants={itemVariants} />
            <motion.div className="w-2.5 h-4 left-[291.86px] top-[53.72px] absolute bg-sky-500 rounded-md" variants={itemVariants} />
            <motion.div className="w-6 h-6 left-[265.80px] top-[48.60px] absolute bg-lime-400 rounded-md" variants={itemVariants} />
          </motion.div>

          {/* Hexagonal grid */}
          <motion.div 
            className="w-[1008px] h-80 left-[116px] top-[197px] absolute"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div className="w-36 h-36 left-[146.41px] top-[86px] absolute origin-top-left rotate-[60.13deg] bg-gradient-to-br from-cyan-500/70 to-cyan-700/70 backdrop-blur-sm border border-cyan-400/30" variants={hexagonVariants} />
            <motion.div className="w-36 h-36 left-[216px] top-[60.45px] absolute origin-top-left rotate-[-18.44deg] bg-gradient-to-br from-violet-500/70 to-violet-700/70 backdrop-blur-sm border border-violet-400/30" variants={hexagonVariants} />
            <motion.div className="w-36 h-36 left-[440px] top-[8.65px] absolute origin-top-left rotate-[-1.50deg] bg-gradient-to-br from-pink-500/70 to-pink-700/70 backdrop-blur-sm border border-pink-400/30" variants={hexagonVariants} />
            <motion.div className="w-36 h-36 left-[658.87px] top-[16px] absolute origin-top-left rotate-[11.90deg] bg-gradient-to-br from-rose-500/70 to-rose-700/70 backdrop-blur-sm border border-rose-400/30" variants={hexagonVariants} />
            <motion.div className="w-36 h-36 left-[872.38px] top-[79px] absolute origin-top-left rotate-[26deg] bg-gradient-to-br from-amber-500/70 to-amber-700/70 backdrop-blur-sm border border-amber-400/30" variants={hexagonVariants} />
          </motion.div>

          {/* Additional hexagons */}
          <motion.div 
            className="w-36 h-36 left-[87.54px] top-[381px] absolute origin-top-left rotate-[54.20deg] bg-gradient-to-br from-emerald-500/70 to-emerald-700/70 backdrop-blur-sm border border-emerald-400/30" 
            variants={hexagonVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          />
          <motion.div 
            className="w-36 h-36 left-[1170.80px] top-[370px] absolute origin-top-left rotate-[39.90deg] bg-gradient-to-br from-indigo-500/70 to-indigo-700/70 backdrop-blur-sm border border-indigo-400/30" 
            variants={hexagonVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          />
        </motion.div>

        <motion.div 
          className="mt-12 text-center text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p className="text-lg">A responsive hexagonal grid with smooth animations</p>
          <p className="mt-2 text-sm text-slate-500">Built with React, TypeScript, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HexagonalGrid;