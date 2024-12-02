export const CONSTANTS = {
  DEFAULT_RATING: 1500,
  MIN_RATING: 100,
  MAX_RATING: 3000,
  DEFAULT_K_FACTOR: 32,
  PROVISIONAL_K_FACTOR: 40,
  MASTER_K_FACTOR: 16,
  RATING_RANGES: {
    BEGINNER: { min: 0, max: 1200 },
    INTERMEDIATE: { min: 1201, max: 1800 },
    ADVANCED: { min: 1801, max: 2200 },
    EXPERT: { min: 2201, max: 2500 },
    MASTER: { min: 2501, max: Infinity }
  }
};