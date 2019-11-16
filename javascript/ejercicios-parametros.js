// 1
/***********************************************
 * 
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * Pista: Buscar como transformar los strings en arrays.
 * 
 ***********************************************/

const recibeNumero= (numero)=>{
    let numeroenString = numero.toString();
    let numeroArray = numeroenString.split("");
    let arrayReverse = numeroArray.reverse();
    let numeroString = arrayReverse.join("");
    let numeroentero=parseInt(numeroString);
    console.log (numeroentero);
}
// en Resumen
const recibeNumero= (numero)=>{
    console.log(parseInt(numero.toString().split("").reverse().join("")));
}
//otra solucion del prof pero queda con comas los numeros por ser string.
const recibeNumero= (numberToReverse)=>{
    let numberString = numberToReverse.toString();
    let numberArray = numberString.split("");
    let arrayReverse = numberArray .reverse();
    let stringReverse = arrayReverse .toString();
    console.log (stringReverse);
}
 //2
 /***********************************************
 * 
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 *  
 ***********************************************/

    const recibePalabra=(palabra)=>{
       let  palabratodoMinuscula = palabra.toLowerCase();
       let  palabraArray = palabratodoMinuscula.split("");
        let arrayOrdenado = palabraArray.sort();
        let letrasOrdenadas = arrayOrdenado.join("");
        console.log(letrasOrdenadas);
    }

    const recibePalabra = (palabra) => {
        console.log(palabra.toLowerCase().split("").sort().join(""));
    }

 // 3
 /***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de 
 * cada palabra en mayúsculas.
 *  
 ***********************************************/

 const recibefrase = (frase) => {
    let mifraseArray = frase.split(" ");
    let newArray= [];
      for (let i =0; i < mifraseArray.length; i ++){
        newArray.push ( mifraseArray[i].charAt(0).toUpperCase()+ mifraseArray[i].slice(1));
      }
     return newArray.join(" ");

}
console.log (recibefrase ("hoy es jueves"))

// otra solucion de Lu:
const primeraLetra = (fraseImportante) => {
    fraseImportante= fraseImportante.toLowerCase()
                                    .split(" ");
         for ( let i=0; i<fraseImportante.length;i++){
           fraseImportante[i] = fraseImportante[i].charAt(0).toUppercase() + fraseImportante[i].slice[1];
         }
    fraseImportante = fraseImportante.join("");
    console.log(fraseImportante);
    }

// otra solucion con map, para eso con ejm: // iten = arr [i] por default
const arr = [ "hola, mundo"];

const arr2 = [ arr. map (item) => {
    return item . toUpperCase();
}


// otra solucion de lu:

const primeraLetra = (fraseImportante) => {
    fraseImportante= fraseImportante.toLowerCase()
                                    .split(" ");
         for (let i=0; i<fraseImportante.length;i++){
           fraseImportante[i] =  fraseImportante[i].charAt(0).toUpperCase() + fraseImportante[i].substring(1);      
         }
    fraseImportante = fraseImportante.join(" ");                                   
    console.log(fraseImportante);
   }

//tener en cuenta lo sgte:
//Used functions :
//The charAt() method is used to get the specified character from a string.
//Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
//The toUpperCase() method is used to convert the string value to uppercase.
//The slice() method returns a shallow copy of a portion of an array into a new array object.
//The push() method is used to add one or more elements to the end of an array and returns the new length of the array.
//After completing the for loop return the final string :
//return newarray1.join(' ');
//The join() method joins all elements of an array into a string.


 //4
/***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la palabra mas larga de la misma
 *  
 ***********************************************/

    const findLongestWord = (str) => {
            
        str = str.split (" ");
        let longestWord = "";
        for (let i = 0; i < str.length; i++){
            if (str[i].length>= longestWord.length){
                longestWord = str[i];
            }
            console.log (longestWord);
        }
    }   

/////////














