

export const preparedPlayerData = function(playerData) {

return Object.values(playerData);
};


export const addWinsToPlayers = function(preparedPlayerData,matchData) {
  return preparedPlayerData.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
};