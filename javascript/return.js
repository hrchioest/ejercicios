 /*
 //RETURN
 * 
 * El return nos permite, desde nuestra función,
 * devolver un  valor, de la misma forma que un
 * parámetro nos permite recibir un valor.
 * Ej:
 * function myFunction(){
 *      return "mi valor";
 * }
 * 
 * El return va a cortar la ejecución de la
 * función. Con esto, podemos controlar incluso
 * el flujo de la misma.
 * El return puede devolvernos cualquier tipo de dato,
 * por ejemplo, strings, números, booleanos, 
 * arrays u objetos.
 * Ej:
 * function mySwitchFunction(value) {
 *      switch(value) {
 *          case 1:
 *              return "el valor fue 1";
 *              break;// no es necesario break
 *          case 2:
 *              return "el valor fue 2";
 *              break;// no es  necesario break
 *          default:
 *              return "no nos interesa el valor ingresado";
 *      }
 * }
 * 
 * //ejercicios:
 
/***********************************************
 * 
 * Hacer una función que reciba una frase y devuelva
 * el número de vocales que tiene la misma.
 *  
 ***********************************************/
const vowels = ["a", "e", "i", "o", "u"];

const countVowels= (frase) =>{
    let counter=0;
    for (let letter of frase.toLowerCase()){
        if (vowels.includes(letter)) {
           counter++
        }
    }
    //console.log(`The text contains ${counter} vowel(s)`)
    return counter
}


 //
const countVowels2 =(sentence) =>{

    let vowels= "aeiouAEIOU";
    let vcount= 0;

    for(var x = 0; x < sentence.length ; x++)
    {
        if (vowels.indexOf(sentence[x]) !== -1)
        {
            vcount += 1;
        }
    }
    return vcount;
}
//console.log(countVowels2("field gold"))
//ejercicio de Mary
const vowelCount3 = (sentence) => {
    let vowelList = 'aeiouAEIOU';
    let vCount = 0;
    for(var x = 0; x < sentence.length; x++)
    {
        if (vowelList.indexOf(sentence[x]) !== -1) 
        {
            vCount +=1;
        }
    }
    return vCount;
} 

// otra solucion:
const vowelCount4 = (sentence) => {
    let vowelList = 'aeiouAEIOU';
    return sentence.split("").reduce((count,letra) => {
        if(vowelList.indexOf(letra) !== -1){
            count++;
        } 
        return count;
    },0);
} 

//console.log(vowelCount4("hola como estas"))

    // 2
 /***********************************************
 * 
 * Hacer una función que tome, primero, una frase
 * y luego pida un caracter para remover de la 
 * frase ingresada.
 * Observaciones: validar que el caracter ingresado
 * sea solo uno. Si es más de uno tirar un error.
 *  
 ***********************************************/
    
   
//  una solucion rapida es con replace ..

const mifunction2 = (frase) =>{
  
    let askCharacter= prompt ("decime un caracter de la frase ingresada");

   // let expr = new RegExp(askCharacter, "g") // ->  /o/g
   //  let newFrase= frase.replace(expr,"");
   // return newFrase;
}
//console.log(mifunction2("hola es domingo"))
//

const mifunction = (frase) =>{
    let askCharacter= prompt ("decime un caracter de la frase ingresada");
    if(askCharacter.length>1){
        throw "Error! se permita sólo un caracter" ;
    }
    let newFrase= "";
    let letra = ""; 
    for (i=0; i<frase.length; i++){
        letra = frase[i];
        if(letra!=askCharacter){
            newFrase = newFrase + frase[i];
        
        }
    }
    return newFrase;
}

console.log(mifunction("aaaa"))

//otra posible solucion de lU

const quitameEsto = (unaFrase) => {
   
    let terminator = prompt("Dame un caracter para quitar de la frase :D");
     
    if(terminator.length>1){
        throw "ERROR: solo se permite un caracter, reintentar función";
    }
    unaFrase = unaFrase.split("");
    for (let i=0;i<unaFrase.length;i++){
        if (unaFrase[i]==terminator){
            unaFrase.splice(i,1);
            i--
        }
    }
    unaFrase = unaFrase.join("");
    return unaFrase;
    }

    //otra posible solucion:

    const censura = (frase) => {
        let censurador = prompt ("que tenes ganas de censurar hoy?");
        if(censurador.length > 1){
            throw "NO ESCRIBAS DE MAS" ;
        }
        frase= frase.split(censurador).join("");
         
        return frase;
     }
     censura ("blablñablña");
    