'use client';

import { ThemeToggle } from './ThemeToggle';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './ui/resizable-navbar';
import Image from 'next/image';

export function KoshitsuNavbar() {
  const navItems = [
    {
      name: 'Features',
      link: '#features',
    },
    {
      name: 'Security',
      link: '#security',
    },
    {
      name: 'About',
      link: '#about',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="fixed top-2 left-0 right-0 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <a
          href="#"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
        >
          <Image
            src="/koshitsu-logo-new.png"
            alt="Koshitsu Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-black dark:text-white">
            Koshitsu
          </span>
        </a>

        {/* Nav Items */}
        <NavItems items={navItems} />

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <a
            href="#"
            className="relative z-20 flex items-center space-x-2 px-2 py-1"
          >
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-black dark:text-white">
              Koshitsu
            </span>
          </a>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors"
            >
              <span className="block text-base font-medium">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}