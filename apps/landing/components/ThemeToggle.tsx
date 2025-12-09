'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="relative group">
      <button className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
        {theme === 'light' && <Sun className="h-5 w-5" />}
        {theme === 'dark' && <Moon className="h-5 w-5" />}
        {theme === 'system' && <Monitor className="h-5 w-5" />}
      </button>

      <div className="absolute right-0 mt-2 w-36 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          onClick={() => setTheme('light')}
          className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-secondary rounded-t-lg transition-colors"
        >
          <Sun className="h-4 w-4" />
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-secondary transition-colors"
        >
          <Moon className="h-4 w-4" />
          Dark
        </button>
        <button
          onClick={() => setTheme('system')}
          className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-secondary rounded-b-lg transition-colors"
        >
          <Monitor className="h-4 w-4" />
          System
        </button>
      </div>
    </div>
  );
}
