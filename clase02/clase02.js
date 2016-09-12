/*
var numberA = prompt('inngrese un numero')
numberA = parseInt(numberA)
var numberB = parseInt(prompt('ingrese otro numero'))
var numberC = parseFloat(prompt('ingrese decimal')) 
*/

/*

//1
var algoA = false;
alert(!algoA);

//2
var algoA = 'false';
alert(!algoA);

//3
var algoA = '';
alert(!!algoA);

//4
var variableA = '';
var variableB = 654;
alert(variableB);

//5
var variableA = '';
var variableB = 654;
alert(Boolean(variableB && variableA));

//6
var variableA = '';
var variableB = 654;
alert(Boolean(variableB && !variableA));

//7
var variableA = 'algo';
var variableB = 654;
alert(Boolean(variableB && variableA));

//8
var variableA = '';
var variableB = 654;
alert(Boolean(variableB && !variableA && variableA && !variableA));

//9
var variableA = 'algo';
var variableB = 654;
alert(Boolean(!variableB || variableA));

//10 va a dar false
var variableA = 'algo';
var variableB = 654;
alert(Boolean((!variableB && VariableA) && (viariableB || variableA))

//11 va a dar true
var variableA = 'algo';
var variableB = 654;
alert(Boolean((!variableB && VariableA) || (viariableB || variableA)))

*/


/////////////////////////////////

/*

//12
//variables de excusa
var haceFrio = false;
var tengoMuchoTrabajo = false;
var estoyCansado = false;
var tengoExcusa = haceFrio || tengoMuchoTrabajo || estoyCansado;
//variables de transitionProperty
var haySubte = true;
var hayTren = true;
var hayColectivo = true;
var voyCaminando = false;

var hayTransporte = haySubte || hayTren || hayColectivo || voyCaminando;

var voyAClases = !tengoExcusa && hayTransporte;

//se puede hacer asi
alert('voyAClases?' + voyAClases); 
//o asi
alert('voyAClases?' + Boolean(!tengoExcusa && hayTransporte));
//ALGO ESTA MAL EN EL EJEMPLO!!!!


//13va a dar true
alert(Boolean('false'))

//14 true porque asigna...
var nameA = 'Mariano';
var nameB = 'Ana';
alert(Boolean(nameA = nameB));
alert(Boolean(nameA))

//15 false
var nameA = 'Mariano';
var nameB = 'Ana';
alert(Boolean(nameA === nameB)); 

//////////////////////////////////////////

//16
var hayClases = false;
var diaActual = 'lunes';
var diasDeClase = ['Lunes', 'Martes'];
*/

/////////////////

/*
if(diaActual === diasDeClase[0]){
	hayClases = true;
}
if(diaActual === diasDeClase[1]){
	hayClases = true;
}
*/


//////////////////////////////


/*
if(diaActual === diasDeClase[0])|| (diaActual === diasDeClase[1]);
*/

//////////////////////////

/*
if(diaActual === diasDeClase[0]){
	hayClases = true;
}
else (diaActual === diasDeClase [1]){
	hayClases = true;
}
*/

///////////////////////////////////

//17
/*
var haClases;
var diaActual = 'Lunes';
var diasDeClases = ['Lunes', 'Miercoles'];
*/

////----------------------------------------------

/*
switch (diaActual) {
	case diasDeClase[0]:
		hayClases = true;
		break;
		//true
	case diasDeClase[1]:
		hayClases = true;
		break;
		//true
	default:
		hayClases = false;
		//no llega a esta instancia aca xq los otros son true	
}
*/

//------------------------------------------------------------------

/*

for(posicion = 0; posicion < diasDeClases.length; posicion++){
	if(!hayClases){
		hayClases = diaActual === diasDeClases[posicion]
	}
}

//el posicion++ suma a lo ultimo

*/
//var diaActual = 'Miercoles'

/*

for(diaDeClases in diasDeClases){
	if(!hayClases){
		hayClases = diaActual === diasDeClases;
	}
}

*/

//--------------------------------

/*

//18
while(!hayClases && pos < diasDeClases.length) {
	haClases = diaActual === diaDeClases[pos];
	pos++
}

*/

//////----------------------------------------

/*
do{
	hayClase = diaActual === diasDeClases[pos];
	pos++
}
while(!hayClases && pos < diasDeClases.length);
*/

/////////-----------------------------------

var diasDeLaSemana = [Lunes, Martes, Miercoles, Jueves, Viernes, Sabados, Domingos];
