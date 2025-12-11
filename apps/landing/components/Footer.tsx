import React from 'react';
import { Youtube, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@koshitsu', label: 'YouTube' },
    { icon: Twitter, href: 'https://x.com/koshitsu', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/koshitsu', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/koshitsu', label: 'LinkedIn' },
  ];

  const links = [
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Refund & Cancellation', href: '#refund' },
  ];

  return (
    <footer className="relative bg-background text-foreground overflow-hidden border-t border-border pt-16 pb-0">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Left: Logo & Brand */}
          <div className="flex items-center gap-2 justify-start order-1 md:order-1">
            <MessageSquare className="h-6 w-6 text-foreground" strokeWidth={2.5} />
            <h3 className="text-xl font-bold tracking-tight">
              Koshitsu
            </h3>
          </div>

          {/* Center: Links (Stacked Vertically) */}
          <div className="flex flex-col items-start md:items-center gap-4 order-3 md:order-2 w-full">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Social Icons & Copyright */}
          <div className="flex flex-col items-start md:items-end gap-6 order-2 md:order-3 w-full">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-secondary border border-border rounded-lg hover:bg-muted hover:border-muted-foreground/50 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © {currentYear} Koshitsu. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Giant Background Text - FIXED: Now visible in both light and dark modes */}
      <div className="relative w-full flex justify-center items-end mt-16 md:mt-0 select-none pointer-events-none overflow-hidden h-32 md:h-64 lg:h-80">
        {/* Light mode: dark gray text, Dark mode: light gray text */}
        <h1 className="absolute bottom-[-5%] text-[clamp(6rem,18vw,24rem)] font-black leading-none tracking-tighter text-neutral-300 dark:text-neutral-800">
          KOSHITSU
        </h1>
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
      </div>
    </footer>
  );
}