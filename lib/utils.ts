import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  const years = Math.floor(diffInSeconds / 31536000); // Approximation: 365 * 24 * 60 * 60
  const months = Math.floor(diffInSeconds / 2592000); // Approximation: 30 * 24 * 60 * 60
  const weeks = Math.floor(diffInSeconds / 604800); // 7 * 24 * 60 * 60
  const days = Math.floor(diffInSeconds / 86400); // 24 * 60 * 60
  const hours = Math.floor(diffInSeconds / 3600); // 60 * 60
  const minutes = Math.floor(diffInSeconds / 60); // 60
  const seconds = diffInSeconds;

  if (years > 0) {
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
};

export const formatBigNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  } else if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  } else {
    return num.toString();
  }
};
