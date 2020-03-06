class Team {

function f1(){
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
}


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
var abc = new Team();
button.onclick = abc.f1();



