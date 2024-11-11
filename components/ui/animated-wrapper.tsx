'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimationType = 'fadeIn' | 'slideUp' | 'scale' | 'rotate';

interface AnimateElementProps {
  children: ReactNode;
  type: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const animations: Record<AnimationType, any> = {
  fadeIn: { opacity: [0, 1] },
  slideUp: { opacity: [0, 1], y: [50, 0] },
  scale: { scale: [0, 1] },
  rotate: { rotate: [-180, 0], opacity: [0, 1] },
};

export const AnimateElement: React.FC<AnimateElementProps> = ({
  children,
  type,
  delay = 0.2,
  duration = 0.6,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          ...animations[type],
          transition: {
            duration,
            delay,
            ease: [0.17, 0.55, 0.55, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
