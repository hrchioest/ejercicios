
//ejercicio con obj:hallar los precio
 let automoviles = [
    { name:'Renault Megane', precio:16000 },
    { name:'Toyota Corolla', precio:17000 },
    { name:'Honda Civic', precio:18000 }
 ];
const precio =(name)=>{
    for(let i=0, i< automoviles.length; i++){
        (automoviles.indexOf(name)>-1{
        return= automoviles[i][6]}

//ejercicios

let array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const divisibleporCuatro = ()=>{
    let newArray=[];
    for(let i =0; i< array10.length; i++){
        if (array10[i]% 4 == 0){
         newArray.push(array10[i])
        }
    }
    return newArray;
}

// para filtrar numeros especificos de un array es mejor usar unos de sus prop como FILTER:
let array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let numDiv4= array10. filter(num=> num% 4==0);
console.log(numDiv4)

//Ejercicio: hallar promedio de los numeros en el array:

let numeros = [7, 4, 1, 8, 9, 4, 9];
const sumarnumeros= ()=>{
    let count=0;
    for(let i=0; i<numeros.length; i++){
        count= count + numeros[i];
    }
    return count;
}

const calcularPromedio= ()=>{
    let cantNum= numeros.length;
    return sumarnumeros()/cantNum;
}
// cuando se tiene un array es mejor usar sus propiedades como el reduce ejm:
let numeros = [7, 4, 1, 8, 9, 4, 9];
// para hallar la suma vamos a usar reduce:
const promedioNum=()=>{
    let reducer = (acumulador, currentValue)=>acumulador+ currentValue;
    let sumaNum=numeros.reduce(reducer);
    let cantNum=numeros.length;
    return sumaNum/cantNum;
} 
//en resumen podria ser
let numeros = [7, 4, 1, 8, 9, 4, 9];
const promedioNum=()=>{
    const sumaNums = (acumulador, currentValue)=>acumulador+ currentValue;
    return numeros.reduce(sumaNums)/numeros.length;
}

//ejecicio funcion 001:
//Declarar una función que muestre en consola los números pares del 0 al 100.

    let nums= [];// i seria el numero 

    const numerosPares= ()=>{
        let newArray= [];
        for (let i=0; i<=100; i++){
            if (i%2 == 0){
                newArray.push(i);
            }
        }
        return newArray;
    }
/** 
 * Declarar una función que muestre los siguientes datos en consola:
Tu Nombre
Edad
Teléfono
Calle
Altura
Código postal
*/

const datos =()={
    
}

/*
Declarar una variable mostrarNombre y asignar una función
La función mostrarNombre tiene que mostrar tu nombre en consola con el siguiente formato:  ejm
  =======
  = Ada =
  =======*/

    const mostrarNombre= (nombre) => {
        let pedirNombre= prompt("cual es tu nombre?");
        let forma = "=";
        let cantLetras= pedirNombre.length +4;
        let formatos=forma.repeat(cantLetras);
        console.log (formatos);
        console.log (forma +" "+ pedirNombre +" "+ forma); 
        console.log (formatos);

    }
    
/*Ejercicio hallar un array que muestre la suma de sus item con uno d forma descendiente:
 */
    let array=[2,5,8,3];
    let reverseArray= array.sort(array);

/*Ejercicio-prueba:
 */

    let nombre = promp("Cual es tu nombre? ");
    let edad = promp("Cual es tu edad? ");
    let direccion = promp ("Donde vivis? ");
    let esCasada = promp ("es casada?"); 
     
    let datos = promp (nombre + " " + "edad" + " " + "años" + " " + "su" + direccion + "es" + " " + esCasada "); 
    
    alert( datos );