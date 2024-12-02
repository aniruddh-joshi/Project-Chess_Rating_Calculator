export const createPlayerStats = (player, matchResult, isPlayer1) => {
  const ratingChange = isPlayer1 
    ? matchResult.player1NewRating - player.rating 
    : matchResult.player2NewRating - player.rating;

  return `
    <div class="space-y-4">
      <h3 class="text-xl font-semibold text-indigo-300">${player.name}</h3>
      <p class="text-gray-300">
        New Rating: ${isPlayer1 ? matchResult.player1NewRating : matchResult.player2NewRating}
        <span class="${ratingChange >= 0 ? 'rating-change-positive' : 'rating-change-negative'}">
          (${ratingChange >= 0 ? '+' : ''}${ratingChange})
        </span>
      </p>
      <div class="grid grid-cols-3 gap-4">
        <div class="text-center p-3 glass-effect rounded-lg">
          <div class="font-semibold text-emerald-400">Wins</div>
          <div class="text-2xl mt-1">${player.wins}</div>
        </div>
        <div class="text-center p-3 glass-effect rounded-lg">
          <div class="font-semibold text-amber-400">Draws</div>
          <div class="text-2xl mt-1">${player.draws}</div>
        </div>
        <div class="text-center p-3 glass-effect rounded-lg">
          <div class="font-semibold text-red-400">Losses</div>
          <div class="text-2xl mt-1">${player.losses}</div>
        </div>
      </div>
    </div>
  `;
};