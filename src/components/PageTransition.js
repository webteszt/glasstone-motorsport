"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  // Segédfüggvények a görgetés kezeléséhez
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
    // Biztosítjuk, hogy a vízszintes görgetés ne jöjjön vissza
    document.body.style.overflowX = "hidden";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onAnimationStart={disableScroll} // Amint elindul a váltás, fixáljuk az oldalt
      onAnimationComplete={enableScroll} // Amint kész, újra lehet görgetni
      className="bg-black min-h-screen"
    >
      {children}
    </motion.div>
  );
}