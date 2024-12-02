import { Player } from './src/player.js';
import { MatchManager } from './src/matchManager.js';

function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function updateMatchHistory() {
    const historyContent = document.getElementById('matchHistory');
    const matches = MatchManager.getMatchHistory(5);
    
    const historyHTML = matches.map(match => `
        <div class="glass-effect p-6 rounded-xl mb-6 transform transition-all hover:scale-102 animate-fadeIn">
            <div class="text-sm text-indigo-300 mb-3">${formatDate(match.date)}</div>
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
    `).join('');
    
    historyContent.innerHTML = historyHTML;
}

function updateResults(player1, player2, matchResult) {
    const resultContent = document.getElementById('resultContent');
    
    const ratingChange1 = matchResult.player1NewRating - player1.rating;
    const ratingChange2 = matchResult.player2NewRating - player2.rating;
    
    const resultHTML = `
        <div class="glass-effect p-6 rounded-xl animate-fadeIn">
            <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-indigo-300">${player1.name}</h3>
                    <p class="text-gray-300">New Rating: ${matchResult.player1NewRating}
                        <span class="${ratingChange1 >= 0 ? 'rating-change-positive' : 'rating-change-negative'}">
                            (${ratingChange1 >= 0 ? '+' : ''}${ratingChange1})
                        </span>
                    </p>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="text-center p-3 glass-effect rounded-lg">
                            <div class="font-semibold text-emerald-400">Wins</div>
                            <div class="text-2xl mt-1">${player1.wins}</div>
                        </div>
                        <div class="text-center p-3 glass-effect rounded-lg">
                            <div class="font-semibold text-amber-400">Draws</div>
                            <div class="text-2xl mt-1">${player1.draws}</div>
                        </div>
                        <div class="text-center p-3 glass-effect rounded-lg">
                            <div class="font-semibold text-red-400">Losses</div>
                            <div class="text-2xl mt-1">${player1.losses}</div>
                        </div>
                    </div>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-indigo-300">${player2.name}</h3>
                    <p class="text-gray-300">New Rating: ${matchResult.player2NewRating}
                        <span class="${ratingChange2 >= 0 ? 'rating-change-positive' : 'rating-change-negative'}">
                            (${ratingChange2 >= 0 ? '+' : ''}${ratingChange2})
                        </span>
                    </p>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="text-center p-3 glass-effect rounded-lg">
                            <div class="font-semibold text-emerald-400">Wins</div>
                            <div class="text-2xl mt-1">${player2.wins}</div>
                        </div>
                        <div class="text-center p-3 glass-effect rounded-lg">
                            <div class="font-semibold text-amber-400">Draws</div>
                            <div class="text-2xl mt-1">${player2.draws}</div>
                        </div>
                        <div class="text-center p-3 glass-effect rounded-lg">
                            <div class="font-semibold text-red-400">Losses</div>
                            <div class="text-2xl mt-1">${player2.losses}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    resultContent.innerHTML = resultHTML;
    updateMatchHistory();
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    const player1Wins = document.getElementById('player1Wins');
    const draw = document.getElementById('draw');
    const player2Wins = document.getElementById('player2Wins');

    function getPlayers() {
        return {
            player1: new Player(
                document.getElementById('player1Name').value || 'Player 1',
                parseInt(document.getElementById('player1Rating').value) || 1500
            ),
            player2: new Player(
                document.getElementById('player2Name').value || 'Player 2',
                parseInt(document.getElementById('player2Rating').value) || 1500
            )
        };
    }

    player1Wins.addEventListener('click', () => {
        const { player1, player2 } = getPlayers();
        const result = MatchManager.recordMatch(player1, player2, 1);
        updateResults(player1, player2, result);
    });

    draw.addEventListener('click', () => {
        const { player1, player2 } = getPlayers();
        const result = MatchManager.recordMatch(player1, player2, 0.5);
        updateResults(player1, player2, result);
    });

    player2Wins.addEventListener('click', () => {
        const { player1, player2 } = getPlayers();
        const result = MatchManager.recordMatch(player1, player2, 0);
        updateResults(player1, player2, result);
    });
});