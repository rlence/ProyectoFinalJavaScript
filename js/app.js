// Variables para realizar operacion aritmetica 
var valor1L;
var valor2;
var operacion; 


function Calculadora () {

	// variables

	var res = document.getElementById('display');
	var on  = document.getElementById('on'); 
	var punto = document.getElementById("punto");
	var negativo = document.getElementById('sign')

	// var operaciones aritmeticas

	var igual = document.getElementById('igual');
	var suma = document.getElementById('mas');
	var resta = document.getElementById('menos');
	var div = document.getElementById('dividido');
	var por = document.getElementById('por');
	var raiz = document.getElementById('raiz');

	// var teclado numerico
	var cero = document.getElementById('0');
	var uno = document.getElementById('1');
	var dos = document.getElementById('2');
	var tres = document.getElementById('3');
	var cuatro = document.getElementById('4');
	var cinco = document.getElementById('5');
	var seis = document.getElementById('6');
	var siete = document.getElementById('7');
	var ocho = document.getElementById('8');
	var nueve = document.getElementById('9');

	// Eventos 

		// Evento con raton
		// numeros
		document.getElementById('1').addEventListener('mousedown', () => {
		uno.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('1').addEventListener('mouseup', () => {
		uno.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('2').addEventListener('mousedown', () => {
		dos.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('2').addEventListener('mouseup', () => {
		dos.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('3').addEventListener('mousedown', () => {
		tres.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('3').addEventListener('mouseup', () => {
		tres.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('4').addEventListener('mousedown', () => {
		cuatro.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('4').addEventListener('mouseup', () => {
		cuatro.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('5').addEventListener('mousedown', () => {
		cinco.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('5').addEventListener('mouseup', () => {
		cinco.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('6').addEventListener('mousedown', () => {
		seis.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('6').addEventListener('mouseup', () => {
		seis.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('7').addEventListener('mousedown', () => {
		siete.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('7').addEventListener('mouseup', () => {
		siete.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('8').addEventListener('mousedown', () => {
		ocho.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('8').addEventListener('mouseup', () => {
		ocho.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('9').addEventListener('mousedown', () => {
		nueve.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('9').addEventListener('mouseup', () => {
		nueve.setAttribute("style", "transform:scale(1,1)");
		})

		document.getElementById('0').addEventListener('mousedown', () => {
		cero.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('0').addEventListener('mouseup', () => {
		cero.setAttribute("style", "transform:scale(1,1)");
		})

		//borrado, negativos, punto 

		document.getElementById('sign').addEventListener('mousedown', () => {
		negativo.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('sign').addEventListener('mouseup', () => {
		negativo.setAttribute("style", "transform:scale(1,1)");
		})

		negativo.setAttribute("style", "transform:scale(0.95,0.95)")

		document.getElementById('on').addEventListener('mousedown', () => {
		on.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('on').addEventListener('mouseup', () => {
		on.setAttribute("style", "transform:scale(1,1)");
		})

		on.setAttribute("style", "transform:scale(0.95,0.95)")

		document.getElementById('punto').addEventListener('mousedown', () => {
		punto.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('punto').addEventListener('mouseup', () => {
		punto.setAttribute("style", "transform:scale(1,1)");
		})

		punto.setAttribute("style", "transform:scale(0.95,0.95)")

		//operadores aritmeticos

		document.getElementById('raiz').addEventListener('mousedown', () => {
		raiz.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('raiz').addEventListener('mouseup', () => {
		raiz.setAttribute("style", "transform:scale(1,1)");
		})

		raiz.setAttribute("style", "transform:scale(0.95,0.95)")

		document.getElementById('mas').addEventListener('mousedown', () => {
		suma.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('mas').addEventListener('mouseup', () => {
		suma.setAttribute("style", "transform:scale(1,1)");
		})

		suma.setAttribute("style", "transform:scale(0.95,0.95)")

		document.getElementById('menos').addEventListener('mousedown', () => {
		resta.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('menos').addEventListener('mouseup', () => {
		resta.setAttribute("style", "transform:scale(1,1)");
		})

		resta.setAttribute("style", "transform:scale(0.95,0.95)")

		document.getElementById('dividido').addEventListener('mousedown', () => {
		div.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('dividido').addEventListener('mouseup', () => {
		div.setAttribute("style", "transform:scale(1,1)");
		})

		div.setAttribute("style", "transform:scale(0.95,0.95)")

		document.getElementById('por').addEventListener('mousedown', () => {
		por.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('por').addEventListener('mouseup', () => {
		por.setAttribute("style", "transform:scale(1,1)");
		})

		por.setAttribute("style", "transform:scale(0.95,0.95)")

		document.getElementById('igual').addEventListener('mousedown', () => {
		igual.setAttribute("style", "transform:scale(0.95,0.95)");
		})
		document.getElementById('igual').addEventListener('mouseup', () => {
		igual.setAttribute("style", "transform:scale(1,1)");
		})

		igual.setAttribute("style", "transform:scale(0.95,0.95)")


		// Evento imprimir en pantalla numeros

		cero.onclick = function(){
		llenarNumero(0);	
		}

		uno.onclick = function(){
		llenarNumero(1);	
		}
		
		dos.onclick = function(){
		llenarNumero(2);	
		}
		
		
		tres.onclick = function(){
		llenarNumero(3);	
		}
		
		cuatro.onclick = function(){
		llenarNumero(4);	
		}
		
		cinco.onclick = function(){
		llenarNumero(5);	
		}

		seis.onclick = function(){
		llenarNumero(6);	
		}
		
		siete.onclick = function(){
		llenarNumero(7);	
		}
		
		ocho.onclick = function(){
		llenarNumero(8);	
		}
		
		nueve.onclick = function(){
		llenarNumero(9);	
		}


		function llenarNumero (numero) { 
			if(res.innerHTML== "0"){
res.innerHTML = ""}
res.innerHTML = res.innerHTML + numero;
res.innerHTML=res.innerHTML.substring(0,8);
}


		punto.onclick = function(){
		res.innerHTML = res.innerHTML + ".";	
		}

		negativo.onclick = function(){
			cambioDeSigno();
		}

		function cambioDeSigno(){
		var numero = res.innerHTML;
		console.log(numero);
		var num = parseFloat(numero);
		num = num*(-1);
		res.innerHTML = num;
		}

		
		on.onclick = function(){
			resetear();
		}

		// evento operadores aritmeticos

		suma.onclick = function(){
			valor1 = res.innerHTML;
			operacion = "+";
			clean();
			console.log(valor1);
		}

		resta.onclick = function(){
			valor1 = res.innerHTML;
			operacion = "-";
			clean();
			console.log(valor1);
		}

		div.onclick = function(){
			valor1 = res.innerHTML;
			operacion = "/";
			clean();
			console.log(valor1);
		}

		por.onclick = function(){
			valor1 = res.innerHTML;
			operacion = "*";
			clean();
			console.log(valor1);
		}

		igual.onclick = function(){
			valor2 = res.innerHTML;
			resultado();
			console.log(valor2);
		}

		function clean(){
			res.innerHTML="";
		}

		function resetear(){
			res.innerHTML = "";
			valor1 = res.innerHTML;
			valor2 = res.innerHTML;
			operacion = "";
			console.log(valor1);
			console.log(valor2);
		}

		function resultado (){
		var resultadofinal = 0;
		if (operacion == "+"){resultadofinal = parseFloat(valor1) + parseFloat(valor2)}	else{}

		if (operacion =="-"){resultadofinal = parseFloat(valor1) - parseFloat(valor2)} else {}

		if (operacion =="/"){resultadofinal = parseFloat(valor1) / parseFloat(valor2)} else{}

		if (operacion =="*"){resultadofinal = parseFloat(valor1) * parseFloat(valor2)} else{}

		res.innerHTML = resultadofinal	
		console.log(valor1);
		console.log(valor2);
		console.log(resultadofinal);
		}
		
		}

		Calculadora();



		