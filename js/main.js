var chessapi = new XMLHttpRequest();
var player;
var input;
function getPlayer()
{
  input= document.getElementById("inputfield").value;
  console.log(input);
  chessapi.open("GET", "https://api.chess.com/pub/player/"+input, false);
  chessapi.send(null);
  var r = JSON.parse(chessapi.response);
  console.log(r);
  player= r.username;

  document.getElementById("name").innerText= player;
};
