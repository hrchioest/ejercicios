/******************************************
 * 
 * FUNCIONES
 * 
 * Las funciones son un bloque de código que
 * realizan una acción específica.
 * Una función de javascript es ejecutada
 * cuando algo la "invoca".
 * Estas funciones, se pueden asignar a 
 * variables/constantes para poder
 * posteriormente invocarlas, o bien, 
 * se pueden usar funciones con nombre.
 * 
 * Las funciones se utilizan para distintos
 * tipos de tareas. La idea es que el código
 * sea reutilizable.
 * 
 * Funciones flechas y variables.
 * ej:
 * const myFunction = () => {
 *  // código a ejecutar
 * }
 * 
 * myFunction();
 * 
 * 
 * Las funciones pueden ser funciones con nombre,
 * utilizando la sintaxis vieja de javascript
 * 
 * ej: 
 * function myFunction(){
 *   // codigo a ejecutar
 * }
 * 
 ******************************************/
let a = 1;
const sumar = () => {
    a += 2;
};
console.log(a); // 1
sumar();
console.log(a); // 3
// La funcion anterior es igual a
function sumar(){
    a += 2;
}
// O igual a 
const sumar = function(){
    a += 2;
};

// ejemplo:

let a =1;
const miFuncion =() => {
 // Arrow function
    a += 3
}


//
function myFunction(){
    // mi codigo
    a *= 3
}
myFunction();
a 

// 

try {
    a();
} catch(err){
    console.warn(err);
}
try {
    b();
} catch(err){
    console.warn(err);
}
try {
    c();
} catch(err){
    console.warn(err);
}
const a = () => {
    console.log('A');
};
function b() {
    console.log('B');
}
const c = function(){
    console.log('C');
}

try {
    a();
} catch(err){
    console.warn(err);
}
try {
    b();
} catch(err){
    console.warn(err);
}
try {
    c();
} catch(err){
    console.warn(err);
}

//1.
/***********************************************
 * 
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion me 
 *    pide un nombre
 * 3. Toma ese nombre y me dice 
 *    "Hola <nombre>" en un alert. 
 * 
 ***********************************************/


const miFuncion =() => { 
    let saludo= prompt( "cual es tu nombre?") 
    alert( "hola " + saludo)
}

//2.
 /***********************************************
 *
 * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 * 
 ************************************************/
//miFuncion (se le puede colocar un nombre)
const  miFuncion=() => { 
    let numero=prompt("dime un numero")
    alert( Math.pow(numero,2)) 
}

//3.
 /***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array.
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * 
 ************************************************/

 let miarray =[];
     
 const miFuncion= () =>{
    let palabra =prompt("dime una palabra")
    miarray.push(palabra)
 }

 const imprimirultimovalorarray= () =>{
        let ultimaposicion= miarray.length-1;
        alert(miarray[ultimaposicion])    
 }

 const imprimirmiarray =() =>{
     console.log(miarray)
 }

 //
 //
 //3.
 /***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array.
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * 
 ************************************************/


let miarray =[];

const llenandoarray =() =>{
    let pedirpalabra= prompt ("una palabra");
    miarray.push(pedirpalabra);
}

const ultimovalordemiarray =() =>{
    let ultimaposicion = miarray.length-1;
    alert (miarray[ultimaposicion]);
}

const milistadearray =() =>{
    console.log(miarray)
}
/*****************************************
 * 
 * PARAMETROS
 * 
 * Los parametros de las funciones son 
 * valores que se le pasan a la funcion,
 * y que fueron previamente definidos en 
 * la declaración de la misma.
 * Ej:
 * let myFunction = (param1, param2) => {
 *      // código a ejecutar
 * };
 * 
 * myFunction("valor1", "valor2");
 * 
 * Estos parámetros van a vivir únicamente
 * dentro de la función; es decir, si modifico
 * su valor, este no va a afectar a la variable
 * original. Esto sucede para todos los tipos de
 * variables exceptuando arrays y objetos (que se 
 * verán más adelante). Esto sucede porque los 
 * arrays y objetos son pasados por referencia.
 * 
 * Existe la posibilidad de pasar parámetros con
 * valores por default, en caso de que no se llamen
 * con ese parametro.
 * Ej:
 * let myFunc = (param1, param2 = "mi valor") => { /* Code * / };
 * 
 * Como se ve en el ejemplo, el segundo parámetro
 * tiene un valor asignado, que va a ser usado en caso
 * de llamar a la funcion sin ese parámetro.
 * Ej:
 * myFunction("valor1"); //param1 va a tener el valor "valor1"
 *                       //param2 va a tener el valor "mi valor"
 * 
 * myFunction("valor1", "2"); //param1 va a tener el valor "valor1"
 *                       //param2 va a tener el valor "2"
 * 
 * También se pueden enviar funciones como parámetros.
 * De la misma forma que declaramos funciones en variables
 * y las invocamos, podemos hacer esto con los parámetros
 * de nuestra función.
 * Ej:
 * const miFuncion1 = () => { console.log(1); };
 * const miFuncion2 = (callback) => { callback(); };
 * miFuncion2(miFuncion1);
 * // También puedo declarar la función directamente
 * // en la invocación.
 * const myFunction = (callback) => { callback(); };
 * miFuncion2(() => { 
 *      console.log("Mi función declarada en invocación") 
 * });
 *  
 * 
 *****************************************/