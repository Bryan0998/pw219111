var i=0;

function cuenta(){
	i=i+1;
	//Manda el mensaje a la página
	postMessage(i);
	//cada 500 milisegundos ejecuta de nuevo cuenta()
	setTimeout("cuenta()",100);
}

cuenta();