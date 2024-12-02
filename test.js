import { Player } from './src/player.js';
import { MatchManager } from './src/matchManager.js';
import { EloCalculator } from './src/eloCalculator.js';

// Test EloCalculator
console.log('Testing EloCalculator...');
const expectedScore = EloCalculator.calculateExpectedScore(2000, 2000);
console.assert(expectedScore === 0.5, 'Equal ratings should give 0.5 expected score');

// Test Player
console.log('Testing Player...');
const player = new Player('Test Player', 1500);
console.assert(player.rating === 1500, 'Initial rating should be set correctly');
console.assert(player.gamesPlayed === 0, 'Initial games played should be 0');

// Test MatchManager
console.log('Testing MatchManager...');
const player1 = new Player('Player 1', 2000);
const player2 = new Player('Player 2', 2000);
const result = MatchManager.recordMatch(player1, player2, 1);
console.assert(player1.rating > 2000, 'Winner rating should increase');
console.assert(player2.rating < 2000, 'Loser rating should decrease');

console.log('All tests completed!');