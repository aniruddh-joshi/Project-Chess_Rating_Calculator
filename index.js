import { Player } from './src/player.js';
import { MatchManager } from './src/matchManager.js';

// Example usage
const magnus = new Player("Magnus Carlsen", 2850);
const alireza = new Player("Alireza Firouzja", 2800);

console.log("Initial Ratings:");
console.log(`${magnus.name}: ${magnus.rating}`);
console.log(`${alireza.name}: ${alireza.rating}`);

// Simulate a match (Magnus wins)
const matchResult = MatchManager.recordMatch(magnus, alireza, 1);

console.log("\nAfter Match:");
console.log(`${magnus.name}: ${magnus.rating} (${matchResult.player1NewRating - 2850 >= 0 ? '+' : ''}${matchResult.player1NewRating - 2850})`);
console.log(`${alireza.name}: ${alireza.rating} (${matchResult.player2NewRating - 2800 >= 0 ? '+' : ''}${matchResult.player2NewRating - 2800})`);

// Display player statistics
console.log("\nPlayer Statistics:");
console.log(magnus.getStats());
console.log(alireza.getStats());