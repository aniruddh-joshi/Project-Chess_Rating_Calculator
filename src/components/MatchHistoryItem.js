import { getRelativeTime } from '../utils/dateFormatter.js';

export const createMatchHistoryItem = (match) => `
  <div class="glass-effect p-6 rounded-xl mb-6 transform transition-all hover:scale-102 animate-fadeIn">
    <div class="text-sm text-indigo-300 mb-3">${getRelativeTime(match.date)}</div>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="p-4 rounded-lg transition-colors ${match.result === 'Player 1 Wins' ? 'bg-emerald-900/30 border border-emerald-700/30' : 'bg-gray-800/30 border border-gray-700/30'}">
        <div class="font-semibold text-lg mb-2">${match.player1.name}</div>
        <div class="text-sm text-gray-300">
          Rating: ${match.player1.oldRating} → ${match.player1.newRating}
          <span class="${match.player1.ratingChange >= 0 ? 'rating-change-positive' : 'rating-change-negative'}">
            (${match.player1.ratingChange >= 0 ? '+' : ''}${match.player1.ratingChange})
          </span>
        </div>
      </div>
      <div class="p-4 rounded-lg transition-colors ${match.result === 'Player 2 Wins' ? 'bg-emerald-900/30 border border-emerald-700/30' : 'bg-gray-800/30 border border-gray-700/30'}">
        <div class="font-semibold text-lg mb-2">${match.player2.name}</div>
        <div class="text-sm text-gray-300">
          Rating: ${match.player2.oldRating} → ${match.player2.newRating}
          <span class="${match.player2.ratingChange >= 0 ? 'rating-change-positive' : 'rating-change-negative'}">
            (${match.player2.ratingChange >= 0 ? '+' : ''}${match.player2.ratingChange})
          </span>
        </div>
      </div>
    </div>
    <div class="text-center mt-4 font-medium ${
      match.result === 'Draw' ? 'text-amber-400' :
      match.result === 'Player 1 Wins' ? 'text-emerald-400' : 'text-indigo-400'
    }">${match.result}</div>
  </div>
`;