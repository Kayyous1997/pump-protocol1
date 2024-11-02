import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, id, className = '', ...props }: InputProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label htmlFor={id} className="block text-left text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <motion.input
        id={id}
        className={`w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all ${className}`}
        whileFocus={{ scale: 1.01 }}
        {...props}
      />
    </motion.div>
  );
};