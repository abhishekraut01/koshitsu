"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = {
  left: [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Koshitsu has revolutionized how our team communicates. The privacy features give us peace of mind for sensitive discussions.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Michael Chen",
      role: "Security Analyst",
      company: "CyberSafe",
      content: "Finally, a chat platform that takes privacy seriously. End-to-end encryption without compromising on user experience.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "The ephemeral rooms are perfect for our quick team huddles. No data retention means no worries about information leaks.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    },
  ],
  middle: [
    {
      name: "David Park",
      role: "CTO",
      company: "DataFlow",
      content: "We've tried many chat solutions, but Koshitsu's privacy-first approach is exactly what we needed. The group features are incredibly intuitive and the interface is clean.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    {
      name: "Lisa Thompson",
      role: "Legal Counsel",
      company: "LawFirm Partners",
      content: "Client confidentiality is paramount in our work. Koshitsu's zero data retention policy makes it the only choice for attorney-client communications. Highly recommended!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
    },
    {
      name: "James Wilson",
      role: "Healthcare Administrator",
      company: "MediCare Solutions",
      content: "HIPAA compliance made easy. Koshitsu allows our medical team to communicate securely without worrying about data breaches or unauthorized access.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
  ],
  right: [
    {
      name: "Amanda Foster",
      role: "Privacy Advocate",
      company: "Digital Rights Org",
      content: "This is what the future of messaging should look like. No phone numbers, no tracking, just pure communication.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda"
    },
    {
      name: "Robert Martinez",
      role: "Journalist",
      company: "NewsDaily",
      content: "Protecting sources is critical. Koshitsu's ephemeral rooms ensure sensitive conversations truly disappear without a trace.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
    },
    {
      name: "Karen Singh",
      role: "Remote Team Lead",
      company: "GlobalTech Inc",
      content: "Managing a distributed team across time zones is challenging. Koshitsu makes secure communication effortless and reliable.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karen"
    },
  ],
};

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 mb-4 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 min-h-[200px] flex flex-col justify-between">
      <p className="text-neutral-300 mb-6 text-[15px] leading-relaxed flex-grow">
        {testimonial.content}
      </p>
      <div className="flex items-start gap-3 mt-auto">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-10 h-10 rounded-full bg-neutral-800 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-neutral-500 break-words">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function TestimonialColumn({ items, direction = 'down' }) {
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Some love from 💙
            <br />
            our customers!
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
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
          
          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
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