import React from 'react';

type TagSize = 'sm' | 'md';
type TagVariant = 'primary' | 'secondary' | 'tertiary' | 'neutral';

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    tertiary: 'bg-tertiary/10 text-secondary',
    neutral: 'bg-neutral-100 text-neutral-800',
  };
  
  // Base classes
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  const cursorClass = onClick ? 'cursor-pointer hover:opacity-80' : '';
  
  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${cursorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Tag;