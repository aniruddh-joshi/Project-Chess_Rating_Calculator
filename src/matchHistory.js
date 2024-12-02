export class MatchHistory {
  constructor() {
    this.matches = [];
  }

  addMatch(player1, player2, result, ratingChanges) {
    const match = {
      id: this.matches.length + 1,
      date: new Date().toISOString(),
      player1: {
        name: player1.name,
        oldRating: player1.rating,
        newRating: ratingChanges.player1NewRating,
        ratingChange: ratingChanges.player1NewRating - player1.rating
      },
      player2: {
        name: player2.name,
        oldRating: player2.rating,
        newRating: ratingChanges.player2NewRating,
        ratingChange: ratingChanges.player2NewRating - player2.rating
      },
      result: result === 1 ? 'Player 1 Wins' : result === 0 ? 'Player 2 Wins' : 'Draw'
    };
    
    this.matches.unshift(match);
    return match;
  }

  getMatches(limit = 5) {
    return this.matches.slice(0, limit);
  }
}