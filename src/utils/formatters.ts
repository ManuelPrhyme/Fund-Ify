// Utility functions for formatting data

/**
 * Format currency values
 * @param value - The number to format as currency
 * @param currency - The currency code (default: 'ETH')
 */
export const formatCurrency = (value: number, currency = 'ETH'): string => {
  return `${value.toFixed(4)} ${currency}`;
};

/**
 * Calculate percentage of goal reached
 * @param raised - Amount raised
 * @param goal - Funding goal
 */
export const calculateProgress = (raised: number, goal: number): number => {
  const progress = (raised / goal) * 100;
  return Math.min(progress, 100); // Cap at 100%
};

/**
 * Format date to readable string
 * @param dateString - Date string to format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Calculate time remaining until deadline
 * @param deadline - Deadline date string
 */
export const getTimeRemaining = (deadline: string): string => {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const diff = deadlineDate.getTime() - now.getTime();
  
  // Return expired if deadline has passed
  if (diff <= 0) {
    return 'Expired';
  }
  
  // Calculate days, hours
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} left`;
  }
  
  return `${hours} hour${hours > 1 ? 's' : ''} left`;
};

/**
 * Truncate wallet address for display
 * @param address - Wallet address to truncate
 */
export const truncateAddress = (address: string): string => {
  if (!address) return '';
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

/**
 * Truncate text with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};