"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = {
  left: [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Koshitsu has revolutionized how our team communicates. The privacy features give us peace of mind for sensitive discussions.",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Sarah"
    },
    {
      name: "Michael Chen",
      role: "Security Analyst",
      company: "CyberSafe",
      content: "Finally, a chat platform that takes privacy seriously. End-to-end encryption without compromising on user experience.",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Michael"
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "The ephemeral rooms are perfect for our quick team huddles. No data retention means no worries about information leaks.",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Emily"
    },
  ],
  middle: [
    {
      name: "David Park",
      role: "CTO",
      company: "DataFlow",
      content: "We've tried many chat solutions, but Koshitsu's privacy-first approach is exactly what we needed. The group features are incredibly intuitive and the interface is clean.",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=David"
    },
    {
      name: "Lisa Thompson",
      role: "Legal Counsel",
      company: "LawFirm Partners",
      content: "Client confidentiality is paramount in our work. Koshitsu's zero data retention policy makes it the only choice for attorney-client communications. Highly recommended!",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Lisa"
    },
    {
      name: "James Wilson",
      role: "Healthcare Administrator",
      company: "MediCare Solutions",
      content: "HIPAA compliance made easy. Koshitsu allows our medical team to communicate securely without worrying about data breaches or unauthorized access.",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=James"
    },
  ],
  right: [
    {
      name: "Amanda Foster",
      role: "Privacy Advocate",
      company: "Digital Rights Org",
      content: "This is what the future of messaging should look like. No phone numbers, no tracking, just pure communication.",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Amanda"
    },
    {
      name: "Robert Martinez",
      role: "Journalist",
      company: "NewsDaily",
      content: "Protecting sources is critical. Koshitsu's ephemeral rooms ensure sensitive conversations truly disappear without a trace.",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Robert"
    },
    {
      name: "Karen Singh",
      role: "Remote Team Lead",
      company: "GlobalTech Inc",
      content: "Managing a distributed team across time zones is challenging. Koshitsu makes secure communication effortless and reliable.",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Sarah"
    },
  ],
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1, 
        boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)"
      }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-secondary/80 to-muted/80 backdrop-blur-xl rounded-2xl p-6 border border-border hover:border-blue-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <p className="text-foreground/80 text-[15px] leading-relaxed mb-6">
          {testimonial.content}
        </p>
        <div className="flex items-start gap-3 pt-4 border-t border-border">
          <Image 
            src={testimonial.avatar}
            alt={testimonial.name}
            width={40}
            height={40}
            className="w-11 h-11 rounded-full bg-muted ring-2 ring-border group-hover:ring-blue-500/40 transition-all duration-300 shrink-0"
          />

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-sm mb-1">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {testimonial.role} at <span className="text-foreground/70">{testimonial.company}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
}

function TestimonialColumn({ items, direction = 'down' }: { items: Testimonial[]; direction?: 'up' | 'down' }) {
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className="relative h-[600px] overflow-hidden mask-gradient">
      <motion.div
        animate={{
          y: direction === 'down' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="space-y-4"
      >
        {duplicatedItems.map((testimonial, idx) => (
          <TestimonialCard key={idx} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-yellow-600 dark:text-yellow-400 text-sm font-medium">
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Some love from
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            our users
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Left Column - Scrolls Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TestimonialColumn items={testimonials.left} direction="up" />
          </motion.div>

          {/* Middle Column - Scrolls Down */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TestimonialColumn items={testimonials.middle} direction="down" />
          </motion.div>

          {/* Right Column - Scrolls Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TestimonialColumn items={testimonials.right} direction="up" />
          </motion.div>

          {/* Top Gradient Fade */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10"></div>
          
          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}