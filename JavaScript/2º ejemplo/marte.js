var usuario = prompt("Cual es tu peso?");
var peso = parseInt(usuario);
var g_tierra = 9.8; //Gravedad Tierra
var g_marte = 3.71; //Gravedad Marte
var peso_final;
peso_final = peso * g_marte / g_tierra;
peso_final = parseInt(peso_final);
window.alert("Tu peso en marte es: " + peso_final + " kilos");
