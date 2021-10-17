var chessapi = new XMLHttpRequest();
var player;
var registered;
var rating;
var lastgame;
var input;
var link;

function getPlayer()
{
  document.getElementById("name").innerHTML = '';
  input= document.getElementById("inputfield").value;

  var profile= getPlayerProfile(input);
  var stats= getPlayerStats(input);
  console.log(profile);
  console.log(stats);

  if(stats.chess_bullet !== undefined){
  rating= stats.chess_bullet.last.rating;}
  else{rating= "no bullet games played";}
  if(stats.chess_bullet !== undefined){
  lastgame= new Date(stats.chess_bullet.last.date * 1000);}
  else{lastgame= "no bullet games played";}
  player= profile.username;
  registered = new Date(profile.joined * 1000);
  link= profile.url;
  console.log(registered);
  console.log(rating);

  document.getElementById("registered").innerText= "Joined: " + registered.toString();
  document.getElementById("rating").innerText= "Rating bullet: "+rating;
  var element= document.createElement("a");
  element.innerText=player+"'s profile on chess.com";
  element.href=link;
  console.log(element);
  document.getElementById("name").appendChild(element);
  document.getElementById("lastgame").innerText= "Last bullet game played on: "+lastgame;
};
