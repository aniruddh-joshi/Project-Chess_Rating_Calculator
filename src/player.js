import { CONSTANTS } from './config/constants.js';
import { validateRating, validatePlayerName } from './utils/validation.js';

export class Player {
  constructor(name, initialRating = CONSTANTS.DEFAULT_RATING) {
    this.name = validatePlayerName(name);
    this.rating = validateRating(initialRating);
    this.gamesPlayed = 0;
    this.wins = 0;
    this.losses = 0;
    this.draws = 0;
    this.ratingHistory = [{
      date: new Date().toISOString(),
      rating: this.rating
    }];
  }

  updateStats(result) {
    this.gamesPlayed++;
    if (result === 1) this.wins++;
    else if (result === 0) this.losses++;
    else this.draws++;
  }

  updateRating(newRating) {
    this.rating = newRating;
    this.ratingHistory.push({
      date: new Date().toISOString(),
      rating: newRating
    });
  }

  getStats() {
    return {
      name: this.name,
      rating: this.rating,
      gamesPlayed: this.gamesPlayed,
      wins: this.wins,
      losses: this.losses,
      draws: this.draws,
      winRate: this.gamesPlayed ? (this.wins / this.gamesPlayed * 100).toFixed(1) : 0,
      ratingHistory: this.ratingHistory
    };
  }

  getSkillLevel() {
    for (const [level, range] of Object.entries(CONSTANTS.RATING_RANGES)) {
      if (this.rating >= range.min && this.rating <= range.max) {
        return level;
      }
    }
    return 'UNKNOWN';
  }
}