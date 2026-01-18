import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function GlassCard({ children, className, hover = true, gradient = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass rounded-xl p-6",
        gradient && "gradient-border",
        hover && "cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(187_100%_50%_/_0.2)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
