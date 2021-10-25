import React from "react";
import Player from "./Player";
import {preparedPlayerData, addWinsToPlayers} from "../helper-functions/playerHelpers"


function PlayerList(props) {

  const playerDataArray = preparedPlayerData(props.playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray,props.matchData);
  const onePlayer = parsedPlayerData[0];

  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);
  
  return (
    <section className="PlayerList">
        <h1>Current participating players</h1>
      { parsedPlayers } 
      </section>
  );
}

export default PlayerList;