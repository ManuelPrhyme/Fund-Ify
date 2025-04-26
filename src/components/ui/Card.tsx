import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  onClick,
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm overflow-hidden';
  const hoverClasses = hoverEffect
    ? 'transition-all duration-300 hover:shadow-md hover:-translate-y-1'
    : '';
  const cursorClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${cursorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;