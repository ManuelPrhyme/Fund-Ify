import React from 'react';
import { theme } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: `bg-primary hover:bg-primary-dark text-white focus:ring-primary-light ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    secondary: `bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary-light ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    tertiary: `bg-tertiary hover:bg-tertiary-dark text-secondary focus:ring-tertiary-light ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    outline: `border border-primary text-primary hover:bg-primary/10 focus:ring-primary-light ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    ghost: `bg-transparent hover:bg-neutral-100 text-neutral-800 focus:ring-neutral-200 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
  };
  
  // Width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;