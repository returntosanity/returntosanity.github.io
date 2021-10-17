var chessapi = new XMLHttpRequest();
var player;
var registered;
var rating;
var lastgame;
var input;
var link;

function getPlayer()
{
  input= document.getElementById("inputfield").value;
  console.log(input);

  chessapi.open("GET", "https://api.chess.com/pub/player/"+input, false);
  chessapi.send(null);
  var r = JSON.parse(chessapi.response);
  chessapi.abort();

  chessapi.open("GET", "https://api.chess.com/pub/player/"+input+"/stats", false);
  chessapi.send(null);
  var stats = JSON.parse(chessapi.response);
  chessapi.abort();

  console.log(r);
  console.log(stats);
  rating= stats.chess_bullet.last.rating;
  lastgame= new Date(stats.chess_bullet.last.date * 1000);
  player= r.username;
  registered = new Date(r.joined * 1000);
  link= r.url;
  console.log(r.joined);
  console.log(registered);
  console.log(rating);

  document.getElementById("registered").innerText= "Joined: " + registered.toString();
  document.getElementById("rating").innerText= "Rating bullet: "+rating;
  var element= document.createElement("a");

  //document.getElementById("link").firstElementChild;
  element.innerText=player+"'s profile on chess.com";
  element.href=link;
  document.getElementById("name").appendChild(element);
  console.log(element);
  document.getElementById("lastgame").innerText= "Last bullet game played on: "+lastgame;
};
