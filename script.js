var team = document.createElement("div");
document.body.appendChild(team);
team.id='div1';
div1.textContent='Team A';

var player = document.createElement("div");
document.body.appendChild(player);
player.id='div2';
var x = 1;
div2.textContent='Player : ' +x;

var runs = document.createElement("div");
document.body.appendChild(runs);
runs.id='div3';
var y = 0;
div3.textContent='Runs : ' +y;

var wickets = document.createElement("div");
document.body.appendChild(wickets);
wickets.id='div4';
var z = 0;
div4.textContent='Wickets : ' +z;

var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'Bat';

button.onclick = function(){

var a = Math.floor(Math.random() * 6);
if(y<37){
y = y + a;
}
else if(x<12&&z<11){
y = y + a;
x++;
z++;
div2.textContent='Player : ' +x;
div4.textContent='Wickets : ' +z;
}	
div3.textContent='Runs : ' +y;
localStorage.setItem("va", y);
if(a==0){
if(z<11){
z++;
}
if(x<12)
{
x++;
}
div2.textContent='Player : ' +x;
div4.textContent='Wickets : ' +z;
}
};


var team1 = document.createElement("div");
document.body.appendChild(team1);
team1.id='div11';
div11.textContent='Team B';

var player1 = document.createElement("div");
document.body.appendChild(player1);
player1.id='div22'
var x1 = 1;
div22.textContent='Player : ' +x1;

var runs1 = document.createElement("div");
document.body.appendChild(runs1);
runs1.id='div33'
var y1 = 0;
div33.textContent='Runs : ' +y1;

var wickets1 = document.createElement("div");
document.body.appendChild(wickets1);
wickets1.id='div44'
var z1 = 0;
div44.textContent='Wickets : ' +z1;

var button1 = document.createElement('button');
document.body.appendChild(button1);
button1.innerHTML = 'Bat';

button1.onclick = function(){

var a1 = Math.floor(Math.random() * 6);
if(y1<37){
y1 = y1 + a1;
}
else if(x1<12&&z1<11){
y1 = y1 + a1;
x1++;
z1++;
div22.textContent='Player : ' +x1;
div44.textContent='Wickets : ' +z1;
}	
div33.textContent='Runs : ' +y1;
localStorage.setItem("va1", y1);
if(a1==0){
if(z1<11){
z1++;
}
if(x1<12)
{
x1++;
}
div22.textContent='Player : ' +x1;
div44.textContent='Wickets : ' +z1;
}
};
localStorage.setItem("va1", y1);

var button11 = document.createElement('button');
document.body.appendChild(button11);
button11.innerHTML = 'Result';
button11.onclick = function(){
var a2 = localStorage.getItem("va");
var b2 = localStorage.getItem("va1");
document.write("Runs are "+a2+" " +b2);
if(a2>b2){
document.write("Team A Wins");	
}
else{
document.write("Team B Wins");
}	
}

