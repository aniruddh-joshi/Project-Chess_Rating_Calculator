export const validateRating = (rating) => {
  const numRating = parseInt(rating);
  if (isNaN(numRating)) return 1500;
  if (numRating < 100) return 100;
  if (numRating > 3000) return 3000;
  return numRating;
};

export const validatePlayerName = (name) => {
  if (!name || typeof name !== 'string') return 'Anonymous';
  return name.trim().slice(0, 30);
};