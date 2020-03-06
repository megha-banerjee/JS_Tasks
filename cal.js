var div1 = document.createElement('div');
div1.id='div1';
document.body.appendChild(div1);
var n1=document.createElement('input');
n1.type="number";
div1.appendChild(n1);

var div2 = document.createElement('div');
div2.id='div2';
document.body.appendChild(div2);
var n2=document.createElement('input');
n2.type="number";
div1.appendChild(n2);

var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'ADD';
button.onclick = function(){
document.getElementById("n1"+"n2").value;
};


