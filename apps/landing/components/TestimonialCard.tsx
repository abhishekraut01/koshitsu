"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = {
  left: [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Koshitsu has revolutionized how our team communicates. The privacy features give us peace of mind for sensitive discussions.",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Michael Chen",
      role: "Security Analyst",
      company: "CyberSafe",
      content: "Finally, a chat platform that takes privacy seriously. End-to-end encryption without compromising on user experience.",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "The ephemeral rooms are perfect for our quick team huddles. No data retention means no worries about information leaks.",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
  ],
  middle: [
    {
      name: "David Park",
      role: "CTO",
      company: "DataFlow",
      content: "We've tried many chat solutions, but Koshitsu's privacy-first approach is exactly what we needed. The group features are incredibly intuitive and the interface is clean.",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Lisa Thompson",
      role: "Legal Counsel",
      company: "LawFirm Partners",
      content: "Client confidentiality is paramount in our work. Koshitsu's zero data retention policy makes it the only choice for attorney-client communications. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      name: "James Wilson",
      role: "Healthcare Administrator",
      company: "MediCare Solutions",
      content: "HIPAA compliance made easy. Koshitsu allows our medical team to communicate securely without worrying about data breaches or unauthorized access.",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
  ],
  right: [
    {
      name: "Amanda Foster",
      role: "Privacy Advocate",
      company: "Digital Rights Org",
      content: "This is what the future of messaging should look like. No phone numbers, no tracking, just pure communication.",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    {
      name: "Robert Martinez",
      role: "Journalist",
      company: "NewsDaily",
      content: "Protecting sources is critical. Koshitsu's ephemeral rooms ensure sensitive conversations truly disappear without a trace.",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      name: "Karen Singh",
      role: "Remote Team Lead",
      company: "GlobalTech Inc",
      content: "Managing a distributed team across time zones is challenging. Koshitsu makes secure communication effortless and reliable.",
      avatar: "https://i.pravatar.cc/150?img=16"
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-16 h-16 text-primary" strokeWidth={1.5} />
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        {/* Testimonial Text with Quote Marks */}
        <div className="mb-6">
          <Quote className="w-8 h-8 text-primary/60 mb-4" strokeWidth={2} />
          <p className="text-foreground text-base leading-relaxed italic">
            `{testimonial.content}`
          </p>
        </div>

        {/* Divider */}
        <div className="w-30 h-0.5 bg-linear-to-r from-primary to-transparent mb-6"></div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image 
              src={testimonial.avatar}
              alt={testimonial.name}
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/40 transition-all duration-300"
              unoptimized
            />
            {/* Small accent dot */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground text-base mb-0.5">
              {testimonial.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
            </p>
            <p className="text-xs text-muted-foreground/70 mt-0.5">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle gradient background effect */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
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
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background opacity-50"></div>
      
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
            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Some love from
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
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
          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background to-transparent pointer-events-none z-10"></div>
          
          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none z-10"></div>
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