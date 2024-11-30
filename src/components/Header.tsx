import React, { useState } from 'react';
import { Menu, X, GamepadIcon, Video, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="relative text-white hover:text-emerald-200 transition-colors duration-200 py-2 group"
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Regelwerk', href: '#rules' },
    { name: 'Tastenbelegung', href: '#controls' },
    { name: 'Immobilien', href: '#properties' },
  ];

  const socialLinks = [
    {
      name: 'TikTok',
      icon: Video,
      url: 'https://www.tiktok.com/@donaucommunity',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/donaucommunity/',
      color: 'hover:text-purple-400'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/hwuefs5bjE',
      color: 'hover:text-indigo-400'
    }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-emerald-900/95 backdrop-blur-sm z-50 shadow-lg border-b border-emerald-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GamepadIcon className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            <span className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors">
              Donau City
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 ml-6 border-l border-emerald-700 pl-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${link.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-emerald-200 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-emerald-200 transition-colors py-2"
                    onClick={() => {
                      handleNavClick();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Social Media Icons */}
                <div className="flex items-center space-x-4 pt-4 border-t border-emerald-700">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white ${link.color} transition-colors duration-300`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="sr-only">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;