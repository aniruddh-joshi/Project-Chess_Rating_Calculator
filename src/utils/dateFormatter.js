import { format } from 'date-fns';

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return format(date, 'PPpp');
};

export const getRelativeTime = (isoString) => {
  const date = new Date(isoString);
  const now = new Date();
  const diffInMinutes = Math.floor((now - date) / 1000 / 60);

  if (diffInMinutes < 1) return 'just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return format(date, 'PP');
};