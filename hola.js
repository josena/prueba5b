/*
var n1=2;
n1++;
alert("El resultado de incremento es: "+n1);
*/
var porTag=document.getElementsByTagName("body");
	porTag[0].style.backgroundColor="aqua";
	
alert("Valor en la etiqueta TagName: --> "+porTag[0].innerHTML);

var porName=document.getElementsByName("donde");
alert("Valor en la etiqueta con atributo name: --> "+porName[0].innerHTML);

function cambiar(){
	


	var quiero=confirm('¿Quieres darme tu nombre?');
	if (quiero==true) {
		var nom=prompt("Dame tu nombre:");
		var etinom=document.getElementById("nombre");
		etinom.innerText=nom;
	}else{
		alert("Gracias por participar!!!");
	}
}

