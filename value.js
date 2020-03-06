
function r(){
var x = document.getElementById("txt1").value;
var y = document.getElementById("txt2").value;
alert("Values"+x+" " +y);
localStorage.setItem("va", x);
localStorage.setItem("va2", y);
}
function u(){
var a = localStorage.getItem("va");
var b = localStorage.getItem("va2");
document.write("Values"+a+" " +b);
}





