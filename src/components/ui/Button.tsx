import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  primary: 'bg-[#C9A96E] text-[#0A0A0A] hover:bg-[#B89855]',
  secondary: 'border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0A0A0A]',
  ghost: 'text-[rgba(240,237,232,0.7)] hover:text-[#C9A96E] border border-[rgba(240,237,232,0.2)] hover:border-[#C9A96E]',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  children,
  onClick,
  href,
  disabled,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseClasses = classNames(
    'inline-flex items-center justify-center font-medium tracking-widest uppercase transition-all duration-300',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      <Component
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={baseClasses}
      >
        {children}
      </Component>
    </motion.div>
  );
}
