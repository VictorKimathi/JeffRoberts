import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
export function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 font-medium tracking-wide transition-all duration-200 focus:outline-none';
  const variantStyles = {
    primary: 'bg-[#FF6900] hover:bg-[#e05e00] text-white',
    secondary: 'bg-transparent border border-[#22272B] hover:border-[#FF6900] hover:text-[#FF6900]'
  };
  return <button type={type} onClick={onClick} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>;
}