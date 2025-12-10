"use client";
import React from 'react';
import {  Github, Twitter, Linkedin, Mail, Heart, Shield, Lock, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/devsyncin', label: 'GitHub', color: 'hover:text-white' },
    { icon: Twitter, href: 'https://x.com/devsyncin', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/devsync-in/', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Mail, href: 'mailto:devsynccareers@gmail.com', label: 'Email', color: 'hover:text-green-400' },
  ];

  const features = [
    { icon: Shield, text: 'End-to-End Encrypted' },
    { icon: Lock, text: 'Zero Data Retention' },
    { icon: Zap, text: 'Real-Time Messaging' },
    { icon: Users, text: 'Group & Private Rooms' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-neutral-950 via-black to-black border-t border-neutral-900 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Brand & Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 mb-6">
                          <Image
                            src="/koshitsu-logo-new.png"
                            alt="Koshitsu Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                <h3 className="text-2xl font-bold text-white">Koshitsu</h3>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">
                Privacy-first real-time chat that respects your data. Chat without compromise with end-to-end encryption and zero data retention.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-2 px-3 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors group"
                  >
                    <feature.icon className="h-4 w-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    <span className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-neutral-900/80 border border-neutral-800 rounded-xl ${social.color} transition-all duration-300 group`}
                  >
                    <social.icon className="h-5 w-5 text-neutral-400 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              {/* Product Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-white font-semibold text-sm mb-5">Product</h4>
                <ul className="space-y-3">
                  {['Features', 'Security', 'Group Chat', 'Private Rooms', 'Pricing', 'Roadmap'].map((item, idx) => (
                    <li key={idx}>
                      <motion.a
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        whileHover={{ x: 5 }}
                        className="text-neutral-400 hover:text-white text-sm transition-colors inline-flex items-center group"
                      >
                        <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-white font-semibold text-sm mb-5">Resources</h4>
                <ul className="space-y-3">
                  {['Documentation', 'API Reference', 'Blog', 'Community', 'Support', 'Status'].map((item, idx) => (
                    <li key={idx}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-neutral-400 hover:text-white text-sm transition-colors inline-flex items-center group"
                      >
                        <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
                <ul className="space-y-3">
                  {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms', 'Cookies'].map((item, idx) => (
                    <li key={idx}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-neutral-400 hover:text-white text-sm transition-colors inline-flex items-center group"
                      >
                        <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-neutral-900/50"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <span>© {currentYear} Koshitsu</span>
              <span className="hidden sm:block">•</span>
              <span className="text-neutral-600">All rights reserved</span>
            </div>
            
            <motion.a
              href="https://devsync.in"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
            >
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 0.5 
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>by</span>
              <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                DevSync.in
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </footer>
  );
}