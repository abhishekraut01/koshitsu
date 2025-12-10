"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Generic Floating Icon Component
 * 
 * @param {React.ReactNode} children - The icon or content to float
 * @param {Object} position - Position object with top, bottom, left, right values
 * @param {number} parallaxStrength - How much the icon follows mouse (0.01-0.05 recommended)
 * @param {number} floatDuration - Duration of float animation in seconds
 * @param {number} rotation - Rotation angle in degrees
 * @param {number} delay - Animation delay in seconds
 * @param {string} className - Additional CSS classes
 */
export function FloatingIcon({
  children,
  position = {},
  parallaxStrength = 0.02,
  floatDuration = 3,
  rotation = 0,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  position?: React.CSSProperties;
  parallaxStrength?: number;
  floatDuration?: number;
  rotation?: number;
  delay?: number;
  className?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const floatingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          duration: floatDuration,
          repeat: Infinity,
          delay: delay,
        },
        opacity: {
          duration: 0.8,
        },
      },
    },
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        ...position,
        x: mousePosition.x * parallaxStrength,
        y: mousePosition.y * parallaxStrength,
        rotate: rotation,
      }}
      variants={floatingVariant}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}

// Demo
export default function FloatingIconDemo() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center gap-4 px-4 relative z-10">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Generic FloatingIcon Component
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mb-8">
          Move your mouse around to see the parallax effect!
        </p>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl">
          <h2 className="text-xl font-semibold text-white mb-4">Usage Example:</h2>
          <pre className="text-sm text-green-400 overflow-x-auto">
{`import { FloatingIcon } from './FloatingIcon';
import { MessageCircle } from 'lucide-react';

<FloatingIcon
  position={{ top: '100px', left: '50px' }}
  parallaxStrength={0.03}
  rotation={-15}
  floatDuration={3}
>
  <MessageCircle className="w-12 h-12 text-blue-500" />
</FloatingIcon>`}
          </pre>
        </div>
      </div>

      {/* Example floating elements */}
      <FloatingIcon
        position={{ top: '100px', left: '80px' }}
        parallaxStrength={0.03}
        rotation={-15}
        floatDuration={3}
      >
        <div className="w-12 h-12 bg-blue-500 rounded-full shadow-lg"></div>
      </FloatingIcon>

      <FloatingIcon
        position={{ top: '150px', right: '100px' }}
        parallaxStrength={0.025}
        rotation={12}
        floatDuration={3.5}
        delay={0.5}
      >
        <div className="w-16 h-16 bg-purple-500 rounded-lg shadow-lg"></div>
      </FloatingIcon>

      <FloatingIcon
        position={{ bottom: '120px', left: '60px' }}
        parallaxStrength={0.035}
        rotation={-8}
        floatDuration={2.8}
        delay={1}
      >
        <div className="w-10 h-10 bg-green-500 rounded-full shadow-lg"></div>
      </FloatingIcon>

      <FloatingIcon
        position={{ bottom: '180px', right: '80px' }}
        parallaxStrength={0.028}
        rotation={18}
        floatDuration={3.2}
        delay={0.3}
      >
        <div className="w-14 h-14 bg-yellow-500 rounded-lg shadow-lg"></div>
      </FloatingIcon>
    </div>
  );
}