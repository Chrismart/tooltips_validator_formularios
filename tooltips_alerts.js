function validate() {
var nombre = document.getElementById("nombre").value;
var apellidos = document.getElementById("apellidos").value;
if(nombre == '' || nombre.length == 0 || /^\s+$/.test(nombre) || apellidos == '' || apellidos.length == 0 || /^\s+$/.test(apellidos)) {
document.getElementById("field").style.display = "none";
document.getElementById("field2").style.display = "none";
document.getElementById("arrow-left").style.display = "none";
document.getElementById("arrow-left2").style.display = "none";
  return false;
 }
}

function senttrue() {
var nombre = document.getElementById("nombre").value;
var apellidos = document.getElementById("apellidos").value;
if(nombre == 0 || nombre.length == 0 || apellidos == 0 || apellidos.length == 0) {
return false;
}
else if (nombre != 0 || nombre.length != 0 || apellidos != 0 || apellidos.length != 0) {
document.getElementById("field").style.display = "";
document.getElementById("field2").style.display = "";
document.getElementById("arrow-left").style.display = "";
document.getElementById("arrow-left2").style.display = "";
document.getElementById("Send_True").innerHTML = ("Se a Enviado Correctamente El Formulario");
}
}


function myFunction(x) {
    document.getElementById("field").style.display = "none";
    document.getElementById("arrow-left").style.display = "none";
}

function myFunction3(y) {
document.getElementById("field2").style.display = "none";
document.getElementById("arrow-left2").style.display = "none";
}

function myFunction2(e) {
var nombre = document.getElementById("nombre").value;
if(nombre == 0 || nombre.length == 0 || /^\s+$/.test(nombre)) {
   document.getElementById("field").style.display = "";
   document.getElementById("field").style.color = "#FF0000";
   document.getElementById("field").style.background = "rgb(0,0,0) url(http://3.bp.blogspot.com/-G4DDWKgJfAs/UUOBlBHaXVI/AAAAAAAAA7A/1cF7ZxnOe_8/s320/info.gif) center left 5px no-repeat";
   document.getElementById("field").style.border = "2px solid #87cefa";
   document.getElementById("field").style["border-radius"] = "5px";
   document.getElementById("field").style["box-shadow"] = "5px 5px 5px #333";
   document.getElementById("field").style["font-size"] = "0.8em";
   document.getElementById("field").style.padding = "10px 10px 10px 35px";
   document.getElementById("field").style["max-width"] = "2480px";
   document.getElementById("field").style.position = "absolute";
   document.getElementById("field").style.top = "0px";
   document.getElementById("field").style.left = "180px";
   document.getElementById("field").style["z-index"] = "100";
   document.getElementById("field").innerHTML = ("Este Campo Es Obigatorio*");
   document.getElementById("arrow-left").style.display = "";
   document.getElementById("arrow-left").style.position = "relative";
   document.getElementById("arrow-left").style.top = "-5px";
   document.getElementById("arrow-left").style.width = "0";
   document.getElementById("arrow-left").style.height = "0";
   document.getElementById("arrow-left").style["border-bottom"] = "5px solid transparent";
   document.getElementById("arrow-left").style["border-top"] = "5px solid transparent";
   document.getElementById("arrow-left").style["border-right"] = "5px solid #2f2f2f";
   document.getElementById("arrow-left").style["font-size"] = "0";
   document.getElementById("arrow-left").style["line-height"] = "0";
}
else if(nombre != 0) {
document.getElementById("field").style.display = "";
document.getElementById("field").style.color = "#00FF00";
   document.getElementById("field").style.background = "rgb(0,0,0) url(http://3.bp.blogspot.com/-G4DDWKgJfAs/UUOBlBHaXVI/AAAAAAAAA7A/1cF7ZxnOe_8/s320/info.gif) center left 5px no-repeat";
   document.getElementById("field").style.border = "2px solid #87cefa";
   document.getElementById("field").style["border-radius"] = "5px";
   document.getElementById("field").style["box-shadow"] = "5px 5px 5px #333";
   document.getElementById("field").style["font-size"] = "0.8em";
   document.getElementById("field").style.padding = "10px 10px 10px 35px";
   document.getElementById("field").style["max-width"] = "2480px";
   document.getElementById("field").style.position = "absolute";
   document.getElementById("field").style.top = "0px";
   document.getElementById("field").style.left = "180px";
   document.getElementById("field").style["z-index"] = "100";
   document.getElementById("field").innerHTML = ("El Campo Esta Correcto ^^");
   document.getElementById("arrow-left").style.display = "";
   document.getElementById("arrow-left").style.position = "relative";
   document.getElementById("arrow-left").style.top = "-5px";
   document.getElementById("arrow-left").style.width = "0";
   document.getElementById("arrow-left").style.height = "0";
   document.getElementById("arrow-left").style["border-bottom"] = "5px solid transparent";
   document.getElementById("arrow-left").style["border-top"] = "5px solid transparent";
   document.getElementById("arrow-left").style["border-right"] = "5px solid #2f2f2f";
   document.getElementById("arrow-left").style["font-size"] = "0";
   document.getElementById("arrow-left").style["line-height"] = "0";
}
}

function myFunction4(a) {
var apellidos = document.getElementById("apellidos").value;
if(apellidos == 0 || apellidos.length == 0 || /^\s+$/.test(apellidos)) {
   document.getElementById("field2").style.display = "";
   document.getElementById("field2").style.color = "#FF0000";
   document.getElementById("field2").style.background = "rgb(0,0,0) url(http://3.bp.blogspot.com/-G4DDWKgJfAs/UUOBlBHaXVI/AAAAAAAAA7A/1cF7ZxnOe_8/s320/info.gif) center left 5px no-repeat";
   document.getElementById("field2").style.border = "2px solid #87cefa";
   document.getElementById("field2").style["border-radius"] = "5px";
   document.getElementById("field2").style["box-shadow"] = "5px 5px 5px #333";
   document.getElementById("field2").style["font-size"] = "0.8em";
   document.getElementById("field2").style.padding = "10px 10px 10px 35px";
   document.getElementById("field2").style["max-width"] = "2480px";
   document.getElementById("field2").style.position = "absolute";
   document.getElementById("field2").style.top = "40px";
   document.getElementById("field2").style.left = "180px";
   document.getElementById("field2").style["z-index"] = "100";
   document.getElementById("field2").innerHTML = ("Este Campo Es Obigatorio*");
   document.getElementById("arrow-left2").style.display = "";
   document.getElementById("arrow-left2").style.position = "relative";
   document.getElementById("arrow-left2").style.top = "-5px";
   document.getElementById("arrow-left2").style.width = "0";
   document.getElementById("arrow-left2").style.height = "0";
   document.getElementById("arrow-left2").style["border-bottom"] = "5px solid transparent";
   document.getElementById("arrow-left2").style["border-top"] = "5px solid transparent";
   document.getElementById("arrow-left2").style["border-right"] = "5px solid #2f2f2f";
   document.getElementById("arrow-left2").style["font-size"] = "0";
   document.getElementById("arrow-left2").style["line-height"] = "0";
}
else if(apellidos != 0) {
document.getElementById("field2").style.display = "";
document.getElementById("field2").style.color = "#00FF00";
   document.getElementById("field2").style.background = "rgb(0,0,0) url(http://3.bp.blogspot.com/-G4DDWKgJfAs/UUOBlBHaXVI/AAAAAAAAA7A/1cF7ZxnOe_8/s320/info.gif) center left 5px no-repeat";
   document.getElementById("field2").style.border = "2px solid #87cefa";
   document.getElementById("field2").style["border-radius"] = "5px";
   document.getElementById("field2").style["box-shadow"] = "5px 5px 5px #333";
   document.getElementById("field2").style["font-size"] = "0.8em";
   document.getElementById("field2").style.padding = "10px 10px 10px 35px";
   document.getElementById("field2").style["max-width"] = "2480px";
   document.getElementById("field2").style.position = "absolute";
   document.getElementById("field2").style.top = "40px";
   document.getElementById("field2").style.left = "180px";
   document.getElementById("field2").style["z-index"] = "100";
   document.getElementById("field2").innerHTML = ("El Campo Esta Correcto ^^");
   document.getElementById("arrow-left2").style.display = "";
   document.getElementById("arrow-left2").style.position = "relative";
   document.getElementById("arrow-left2").style.top = "-5px";
   document.getElementById("arrow-left2").style.width = "0";
   document.getElementById("arrow-left2").style.height = "0";
   document.getElementById("arrow-left2").style["border-bottom"] = "5px solid transparent";
   document.getElementById("arrow-left2").style["border-top"] = "5px solid transparent";
   document.getElementById("arrow-left2").style["border-right"] = "5px solid #2f2f2f";
   document.getElementById("arrow-left2").style["font-size"] = "0";
   document.getElementById("arrow-left2").style["line-height"] = "0";
}
}

function validate_onblur() {
var nombre = document.getElementById("nombre").value;
var apellidos = document.getElementById("apellidos").value;
if(nombre == 0 || apellidos == 0) {
document.getElementById("Anti_Off").disabled = true;
} else if(nombre != 0 || apellidos != 0) {
document.getElementById("Anti_Off").disabled = false;
}
}

function select() {
var nombre = document.getElementById("nombre").value;
if(nombre == 0 || nombre.length == 0) {
document.getElementById("field").style.display = "";
document.getElementById("field").style.color = "#FF0000";
   document.getElementById("field").style.background = "rgb(0,0,0) url(http://3.bp.blogspot.com/-G4DDWKgJfAs/UUOBlBHaXVI/AAAAAAAAA7A/1cF7ZxnOe_8/s320/info.gif) center left 5px no-repeat";
   document.getElementById("field").style.border = "2px solid #87cefa";
   document.getElementById("field").style["border-radius"] = "5px";
   document.getElementById("field").style["box-shadow"] = "5px 5px 5px #333";
   document.getElementById("field").style["font-size"] = "0.8em";
   document.getElementById("field").style.padding = "10px 10px 10px 35px";
   document.getElementById("field").style["max-width"] = "2480px";
   document.getElementById("field").style.position = "absolute";
   document.getElementById("field").style.top = "0px";
   document.getElementById("field").style.left = "180px";
   document.getElementById("field").style["z-index"] = "100";
   document.getElementById("field").innerHTML = ("Este Campo Es Obligatorio");
   document.getElementById("arrow-left").style.display = "";
   document.getElementById("arrow-left").style.position = "relative";
   document.getElementById("arrow-left").style.top = "-5px";
   document.getElementById("arrow-left").style.width = "0";
   document.getElementById("arrow-left").style.height = "0";
   document.getElementById("arrow-left").style["border-bottom"] = "5px solid transparent";
   document.getElementById("arrow-left").style["border-top"] = "5px solid transparent";
   document.getElementById("arrow-left").style["border-right"] = "5px solid #2f2f2f";
   document.getElementById("arrow-left").style["font-size"] = "0";
   document.getElementById("arrow-left").style["line-height"] = "0";
return false;
} else if(nombre != 0 || nombre.length != 0) {
document.getElementById("field").style.display = "";
document.getElementById("field").style.color = "#00FF00";
   document.getElementById("totodile").style.background = "rgb(0,0,0) url(http://3.bp.blogspot.com/-G4DDWKgJfAs/UUOBlBHaXVI/AAAAAAAAA7A/1cF7ZxnOe_8/s320/info.gif) center left 5px no-repeat";
   document.getElementById("field").style.border = "2px solid #87cefa";
   document.getElementById("field").style["border-radius"] = "5px";
   document.getElementById("field").style["box-shadow"] = "5px 5px 5px #333";
   document.getElementById("field").style["font-size"] = "0.8em";
   document.getElementById("field").style.padding = "10px 10px 10px 35px";
   document.getElementById("field").style["max-width"] = "2480px";
   document.getElementById("field").style.position = "absolute";
   document.getElementById("field").style.top = "0px";
   document.getElementById("field").style.left = "180px";
   document.getElementById("field").style["z-index"] = "100";
   document.getElementById("field").innerHTML = ("El Campo Esta Correcto ^^");
    document.getElementById("arrow-left").style.display = "";
   document.getElementById("arrow-left").style.position = "relative";
   document.getElementById("arrow-left").style.top = "-5px";
   document.getElementById("arrow-left").style.width = "0";
   document.getElementById("arrow-left").style.height = "0";
   document.getElementById("arrow-left").style["border-bottom"] = "5px solid transparent";
   document.getElementById("arrow-left").style["border-top"] = "5px solid transparent";
   document.getElementById("arrow-left").style["border-right"] = "5px solid #2f2f2f";
   document.getElementById("arrow-left").style["font-size"] = "0";
   document.getElementById("arrow-left").style["line-height"] = "0";
return false;
}
}

function select2() {
var apellidos = document.getElementById("apellidos").value;
if(apellidos == 0 || apellidos.length == 0) {
document.getElementById("field2").style.display = "";
document.getElementById("field2").style.color = "#FF0000";
   document.getElementById("field2").style.background = "rgb(0,0,0) url(http://3.bp.blogspot.com/-G4DDWKgJfAs/UUOBlBHaXVI/AAAAAAAAA7A/1cF7ZxnOe_8/s320/info.gif) center left 5px no-repeat";
   document.getElementById("field2").style.border = "2px solid #87cefa";
   document.getElementById("field2").style["border-radius"] = "5px";
   document.getElementById("field2").style["box-shadow"] = "5px 5px 5px #333";
   document.getElementById("field2").style["font-size"] = "0.8em";
   document.getElementById("field2").style.padding = "10px 10px 10px 35px";
   document.getElementById("field2").style["max-width"] = "2480px";
   document.getElementById("field2").style.position = "absolute";
   document.getElementById("field2").style.top = "40px";
   document.getElementById("field2").style.left = "180px";
   document.getElementById("field2").style["z-index"] = "100";
   document.getElementById("field2").innerHTML = ("Este Campo Es Obligatorio");
   document.getElementById("arrow-left2").style.display = "";
   document.getElementById("arrow-left2").style.position = "relative";
   document.getElementById("arrow-left2").style.top = "-5px";
   document.getElementById("arrow-left2").style.width = "0";
   document.getElementById("arrow-left2").style.height = "0";
   document.getElementById("arrow-left2").style["border-bottom"] = "5px solid transparent";
   document.getElementById("arrow-left2").style["border-top"] = "5px solid transparent";
   document.getElementById("arrow-left2").style["border-right"] = "5px solid #2f2f2f";
   document.getElementById("arrow-left2").style["font-size"] = "0";
   document.getElementById("arrow-left2").style["line-height"] = "0";
return false;
} else if(apellidos != 0 || apellidos.length != 0) {
document.getElementById("field2").style.display = "";
document.getElementById("field2").style.color = "#00FF00";
   document.getElementById("field2").style.background = "rgb(0,0,0) url(http://3.bp.blogspot.com/-G4DDWKgJfAs/UUOBlBHaXVI/AAAAAAAAA7A/1cF7ZxnOe_8/s320/info.gif) center left 5px no-repeat";
   document.getElementById("field2").style.border = "2px solid #87cefa";
   document.getElementById("field2").style["border-radius"] = "5px";
   document.getElementById("field2").style["box-shadow"] = "5px 5px 5px #333";
   document.getElementById("field2").style["font-size"] = "0.8em";
   document.getElementById("field2").style.padding = "10px 10px 10px 35px";
   document.getElementById("field2").style["max-width"] = "2480px";
   document.getElementById("field2").style.position = "absolute";
   document.getElementById("field2").style.top = "40px";
   document.getElementById("field2").style.left = "180px";
   document.getElementById("field2").style["z-index"] = "100";
   document.getElementById("field2").innerHTML = ("El Campo Esta Correcto ^^");
   document.getElementById("arrow-left2").style.display = "";
   document.getElementById("arrow-left2").style.position = "relative";
   document.getElementById("arrow-left2").style.top = "-5px";
   document.getElementById("arrow-left2").style.width = "0";
   document.getElementById("arrow-left2").style.height = "0";
   document.getElementById("arrow-left2").style["border-bottom"] = "5px solid transparent";
   document.getElementById("arrow-left2").style["border-top"] = "5px solid transparent";
   document.getElementById("arrow-left2").style["border-right"] = "5px solid #2f2f2f";
   document.getElementById("arrow-left2").style["font-size"] = "0";
   document.getElementById("arrow-left2").style["line-height"] = "0";
return false;
 }
}
