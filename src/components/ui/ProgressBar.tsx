import React from 'react';
import { calculateProgress } from '../../utils/formatters';
import { theme } from '../../theme';

interface ProgressBarProps {
  raised: number;
  goal: number;
  showPercentage?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  raised,
  goal,
  showPercentage = true,
  className = '',
  size = 'md',
}) => {
  const progress = calculateProgress(raised, goal);
  
  // Height based on size
  const heightClass = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };
  
  return (
    <div className={`w-full ${className}`}>
      <div className={`w-full bg-neutral-200 rounded-full overflow-hidden ${heightClass[size]}`}>
        <div
          className="bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className={heightClass[size]}></div>
        </div>
      </div>
      
      {showPercentage && (
        <div className="flex justify-between mt-1 text-sm text-neutral-600">
          <span>{progress.toFixed(0)}% funded</span>
          <span>{raised.toFixed(2)} / {goal.toFixed(2)} ETH</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;