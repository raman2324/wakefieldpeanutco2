import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX: x, transformOrigin: "0 0" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-roast"
    />
  );
}