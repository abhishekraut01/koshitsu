"use client";
import React, { useEffect, useState } from 'react';
import { Users, Lock, MessageSquare, MessageCircle, Send, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Import your FloatingIcon component
// import { FloatingIcon } from './FloatingIcon';

// For demo purposes, including it here
function FloatingIcon({
  children,
  position = {},
  parallaxStrength = 0.02,
  floatDuration = 3,
  rotation = 0,
  delay = 0,
  className = '',
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
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
          ease: 'easeInOut',
          repeat: Infinity,
          delay: delay,
        },
        opacity: {
          duration: 0.8,
          ease: 'easeInOut',
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      
      {/* Floating Chat Icons - Smaller Sizes */}
      <FloatingIcon
        position={{ top: '120px', left: '350px' }}
        parallaxStrength={0.03}
        rotation={-15}
        floatDuration={3}
        className="hidden md:block"
      >
        <MessageCircle 
          className="w-10 h-10 text-blue-500 drop-shadow-[0_4px_12px_rgba(59,130,246,0.4)]" 
          strokeWidth={1.5} 
        />
      </FloatingIcon>

      <FloatingIcon
        position={{ top: '150px', right: '350px' }}
        parallaxStrength={0.025}
        rotation={12}
        floatDuration={3.5}
        delay={0.5}
        className="hidden md:block"
      >
        <MessageSquare 
          className="w-9 h-9 text-purple-500 drop-shadow-[0_4px_12px_rgba(168,85,247,0.4)]" 
          strokeWidth={1.5} 
        />
      </FloatingIcon>

      <FloatingIcon
        position={{ bottom: '180px', left: '300px' }}
        
        parallaxStrength={0.035}
        rotation={-8}
        floatDuration={2.8}
        delay={1}
        className="hidden md:block"
      >
        <Send 
          className="w-8 h-8 text-green-500 drop-shadow-[0_4px_12px_rgba(34,197,94,0.4)]" 
          strokeWidth={1.5} 
        />
      </FloatingIcon>

      <FloatingIcon
        position={{ bottom: '200px', right: '350px' }}
        parallaxStrength={0.028}
        rotation={18}
        floatDuration={3.2}
        delay={0.3}
        className="hidden md:block"
      >
        <Shield 
          className="w-10 h-10 text-yellow-500 drop-shadow-[0_4px_12px_rgba(234,179,8,0.4)]" 
          strokeWidth={1.5} 
        />
      </FloatingIcon>





      {/* Mobile visible icons - smaller */}
      <FloatingIcon
        position={{ top: '100px', right: '20px' }}
        parallaxStrength={0.025}
        rotation={10}
        floatDuration={3}
        className="md:hidden"
      >
        <MessageCircle className="w-8 h-8 text-blue-500/70" strokeWidth={1.5} />
      </FloatingIcon>

      <FloatingIcon
        position={{ bottom: '120px', left: '20px' }}
        parallaxStrength={0.03}
        rotation={-10}
        floatDuration={3.5}
        delay={0.5}
        className="md:hidden"
      >
        <Send className="w-7 h-7 text-green-500/70" strokeWidth={1.5} />
      </FloatingIcon>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Privacy-First
            <br />
            <span className="text-primary">Real-Time Chat</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Chat without compromise. Choose persistent group conversations or ephemeral private rooms that vanish without a trace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
            <Users className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Create Group
          </button>
          <button className="group flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-200 w-full sm:w-auto">
            <Lock className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Start Private Room
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>End-to-End Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>No Phone Numbers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Zero Data Retention</span>
          </div>
        </motion.div>
      </div>

      {/* Background Blurs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}