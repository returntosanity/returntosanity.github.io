var chessapi = new XMLHttpRequest();
var player;
var input;
function getPlayer()
{
  input= getElementById("inputfield").value;
  chessapi.open("GET", "https://api.chess.com/pub/player/"+input, false);
  chessapi.send(null);
  var r = JSON.parse(chessapi.response);
  player= r.properties.username;
  document.getElementById("name").innerText= player;
};
