export class EloCalculator {
  // Default K-factor (rating change sensitivity)
  static DEFAULT_K_FACTOR = 32;
  
  // Calculate expected score based on ratings
  static calculateExpectedScore(playerRating, opponentRating) {
    return 1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));
  }
  
  // Calculate new rating after a match
  static calculateNewRating(playerRating, opponentRating, actualScore, kFactor = this.DEFAULT_K_FACTOR) {
    const expectedScore = this.calculateExpectedScore(playerRating, opponentRating);
    return Math.round(playerRating + kFactor * (actualScore - expectedScore));
  }
}