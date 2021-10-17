function getPlayerProfile(playerName)
{
  var returnValue;
  var chessapi = new XMLHttpRequest();

  chessapi.open("GET", "https://api.chess.com/pub/player/"+playerName, false);
  chessapi.send(null);
  returnValue = JSON.parse(chessapi.response);
  chessapi.abort();

  return returnValue;
}

function getPlayerStats(playerName)
{
  var returnValue;
  var chessapi = new XMLHttpRequest();

  chessapi.open("GET", "https://api.chess.com/pub/player/"+playerName+"/stats", false);
  chessapi.send(null);
  returnValue = JSON.parse(chessapi.response);
  chessapi.abort();

  return returnValue;
}
