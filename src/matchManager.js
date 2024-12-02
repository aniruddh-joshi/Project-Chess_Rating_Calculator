import { EloCalculator } from './eloCalculator.js';
import { MatchHistory } from './matchHistory.js';

export class MatchManager {
  static matchHistory = new MatchHistory();

  static recordMatch(player1, player2, result) {
    // result: 1 for player1 win, 0 for player2 win, 0.5 for draw
    const player1NewRating = EloCalculator.calculateNewRating(
      player1.rating,
      player2.rating,
      result
    );
    
    const player2NewRating = EloCalculator.calculateNewRating(
      player2.rating,
      player1.rating,
      1 - result
    );

    const ratingChanges = {
      player1NewRating,
      player2NewRating
    };

    player1.rating = player1NewRating;
    player2.rating = player2NewRating;
    
    player1.updateStats(result);
    player2.updateStats(1 - result);
    
    // Record match in history
    this.matchHistory.addMatch(player1, player2, result, ratingChanges);
    
    return ratingChanges;
  }

  static getMatchHistory(limit) {
    return this.matchHistory.getMatches(limit);
  }
}