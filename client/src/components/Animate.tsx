// components/Animate.tsx
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

interface AnimateProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  once?: boolean;
}

export const Animate = ({ 
  children, 
  variants, 
  className, 
  once = true 
}: AnimateProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once }}
    variants={variants}
    className={className}
  >
    {children}
  </motion.div>
);