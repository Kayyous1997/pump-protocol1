import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className="bg-black border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="h-8 w-8 text-white" />
              </motion.div>
              <span className="text-xl font-bold">Pump Protocol</span>
            </motion.div>
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setIsHovered(item.path)}
                onMouseLeave={() => setIsHovered(null)}
                className="relative"
              >
                <motion.span
                  className={`${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200 px-1 py-2`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.span>
                {(isActive(item.path) || isHovered === item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;