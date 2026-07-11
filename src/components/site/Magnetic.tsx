"use client";

import { useRef, ReactNode } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function Magnetic({ 
  children, 
  className, 
  strength = 0.2 
}: { 
  children: ReactNode, 
  className?: string, 
  strength?: number 
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values to track distance from center
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring physics for smooth, elastic movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Calculate the distance from the center of the element
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Apply pull effect
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: xSpring, y: ySpring, display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
