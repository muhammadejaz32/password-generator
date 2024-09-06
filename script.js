var password = document.getElementById('password');
var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@&#*+-";
let range = document.getElementById('range');
let rangevalue = document.getElementById('span')
function generatepassword(){
   var pass = "";
    for(var i=0; i<range.value; i++){
        pass = pass+char.charAt(Math.floor(Math.random()*char.length));
    }
    password.value = pass;
    return pass;
}

range.addEventListener("input", function(){
    rangevalue.textContent = range.value;
})
