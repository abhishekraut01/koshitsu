"use client";

import { Users, Lock, MessageSquare, MessageCircle, Send, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingIcon } from './ui/FloatingIcon';

// Floating Icon Component

// Animated Chat Bubble Icon
function ChatBubbleIcon({ className = '', color = 'text-blue-500' }) {
  return (
    <div className={`${className} ${color} drop-shadow-[0_8px_16px_rgba(59,130,246,0.4)]`}>
      <MessageCircle className="w-full h-full" strokeWidth={1.5} />
    </div>
  );
}

// Animated Message Icon
function MessageIcon({ className = '', color = 'text-purple-500' }) {
  return (
    <div className={`${className} ${color} drop-shadow-[0_8px_16px_rgba(168,85,247,0.4)]`}>
      <MessageSquare className="w-full h-full" strokeWidth={1.5} />
    </div>
  );
}

// Animated Send Icon
function SendIcon({ className = '', color = 'text-green-500' }) {
  return (
    <div className={`${className} ${color} drop-shadow-[0_8px_16px_rgba(34,197,94,0.4)]`}>
      <Send className="w-full h-full" strokeWidth={1.5} />
    </div>
  );
}

// Animated Shield Icon
function ShieldIcon({ className = '', color = 'text-yellow-500' }) {
  return (
    <div className={`${className} ${color} drop-shadow-[0_8px_16px_rgba(234,179,8,0.4)]`}>
      <Shield className="w-full h-full" strokeWidth={1.5} />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      
      {/* Floating Chat Icons */}
      <FloatingIcon
        position={{ top: '120px', left: '80px' }}
        parallaxStrength={0.03}
        rotation={-15}
        floatDuration={3}
      >
        <ChatBubbleIcon className="w-16 h-16 md:w-20 md:h-20" color="text-blue-500" />
      </FloatingIcon>

      <FloatingIcon
        position={{ top: '200px', right: '100px' }}
        parallaxStrength={0.025}
        rotation={12}
        floatDuration={3.5}
        delay={0.5}
      >
        <MessageIcon className="w-14 h-14 md:w-16 md:h-16" color="text-purple-500" />
      </FloatingIcon>

      <FloatingIcon
        position={{ bottom: '150px', left: '60px' }}
        parallaxStrength={0.035}
        rotation={-8}
        floatDuration={2.8}
        delay={1}
      >
        <SendIcon className="w-12 h-12 md:w-14 md:h-14" color="text-green-500" />
      </FloatingIcon>

      <FloatingIcon
        position={{ bottom: '200px', right: '80px' }}
        parallaxStrength={0.028}
        rotation={18}
        floatDuration={3.2}
        delay={0.3}
      >
        <ShieldIcon className="w-16 h-16 md:w-18 md:h-18" color="text-yellow-500" />
      </FloatingIcon>

      {/* Small decorative icons for mobile */}
      <FloatingIcon
        position={{ top: '300px', left: '20px' }}
        parallaxStrength={0.02}
        rotation={-20}
        floatDuration={4}
        delay={0.8}
      >
        <MessageCircle className="w-8 h-8 text-blue-400/60" strokeWidth={1.5} />
      </FloatingIcon>

      <FloatingIcon
        position={{ top: '400px', right: '30px' }}
        parallaxStrength={0.022}
        rotation={15}
        floatDuration={3.6}
        delay={1.2}
      >
        <MessageSquare className="w-10 h-10 text-purple-400/60" strokeWidth={1.5} />
      </FloatingIcon>

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

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}