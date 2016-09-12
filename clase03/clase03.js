//Funciones

//1
/*
function mostrarMensajeBienvenida() {
	alert('Bienvenido al curso de JS');
}

function mostrarMensaje(mensaje) {
	alert(mensaje);
}


//2
function sumar(operandoA, operandoB) {
	alert(operandoA + operandoB);
}

*/
/*
//3 Array de numeros primos
var arrayDePrimos = [1,2,3,5,7];


function sumarArray(numeros) {
	var resultado = 0
	for (i = 0; i < numeros.length; i++) {

		//i=0
		//numeros[i] ---> 1
		//resultado = 1

		//i=1
		//numeros[i] ---> 2
		//resultado = 3 

		//i=2
		//numero[i] ---> 3
		//resultado = 6

		//i=3
		//numero[i] ---> 5
		//resultado = 11

		//i=4
		//numero[i] ---> 7
		//resultado = 18


		resultado = resultado + numeros[i];
	}

	console.log(resultado);

	return resultado;
}


//4 

var variableGlobal = 'global';

//funcion con llamada a variable global

function miFuncion() {
	console.log(miVariableGlobal);
}

//funcion con llamada a variable local

var miVariable = 'global';

function miFuncion() {
	
	miVariable = 'demostracion';

	console.log(miVariable)
}

//5

function imprimirPorConsola () {
	console.log('esto imprime por consola');
}

function imprimirPorPantalla () {
	alert('esto imprime por pantalla');
}

function imprimir(funcionQueImprime) {

	funcionQueImprime();
}

*/

//////////////////////////////

//////// EJERCICIO ///////////

//////////////////////////////

/*
function ingreseNombreYApellido() {
	var nombre = prompt('Ingrese Nombre');
	var apellido = prompt('Ingrese Apellido');
	console.log('Hola '+nombre+' '+apellido);

}

ingreseNombreYApellido();
*/

//
var semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

var tipo = prompt('Ingrese Habil o No');

var mostrarDias = 0

function mostrarDias(){
	for(i = 0; i < 5.length; i++){
	}
	for(i = 5; i < 6.length; i++){
	}
}

mostrarDias();

alert(mostrarDias)


