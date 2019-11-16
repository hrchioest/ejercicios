

//uso de loops (repite condiciones )
let i= 1;

while (i<10){
    console.log ("accion!");
    i++;

}

//

let i=10;

while ((i<=10)&& (i>0)){
    console.log (i);
    i--;
}

//

for (let i= 0; i<21;i++){
    let tipo="numero"
    
    if (i%2==0){
        (tipo="par");
    }
    else {
        (tipo="impar");
    }
    
    console.log(`El numero ${i} es ${tipo}`);

    // switch 

    let variable=valorintermedio;
    switch(variable){
        case "valor1":
            //accion
            break; // break dice salir de aca
        case "valorintermedio":
                //accion distinta
            break;
        case "valor2":
                //otra accion
            break; 
        default:
            //tercera accion posible
    }
//EJEMPLO:
let adultos=2;
switch(adultos){
    case 1:
        prompt("nombre dle pax");
        break;
    case 2:
        
        break;
    case 3:
        prompt("hay un niño?");
        break;
    default:
        prompt("Nombre de los pax") + "separados por coma";
}
        // tercera accion posible

    //

let nombres=[];

for(let i=0; i<5; i++){
    nombres[i]=prompt("ingrese 5 nombres");
}

for(let i=0; i<5; i++){
console.log(nombres[i]);
}

for(let i=4; i>=0; i--){ ///  podria haberse usado:  console.log(name.reverse());
console.log(nombres[i]);
}

//

//usando array.push

//scope (se da cuando podria fallar algo como el caso de querer imprimir algo que no esta dentro el for ejm:)
var pepe =1;
for(var i=0; i<10; i++){
    //hago algo
    pepe=2;
}
if(condicion){
    var t=2
    let q=3;
}
//scope -- seria porque esta fuera de la funcion for

console.log(pepe); //2
console.log(i);//undefined
console.log(t);// 2
console.log(q);//undefined

//

for (let i<4; i>=0; i++){
    console.log(nombres[i]=prompt("ingrese 5 nombres"));

}
let preguntarusuario;
preguntausuario=prompt("ingrese 5 nombres");

alert(preguntarusuario);

// Clase 
/**********************************************
* THROW (tirar) - 
 * TRY (intentar) / CATCH (agarrar)
 * 
 * El "throw" tira, o sea, genera, un error, o 
 * "excepción" (Exception en inglés).
 * Cuando ocurre un error en javascript, 
 * se corta la ejecución de nuestro código, y con
 * el throw podemos customizar y manejar este
 * comportamiento.
 * El throw nos permite generar un error custom,
 * con un mensaje personalizado, 
 * Decimos usualmente, "tirar una excepción"
 * (throw an exception).
 * Ex: throw "Error parseando la data"; 
 * Ex: throw 404; // Se suelen usar códigos numéricos
 * 
 * Todas las excepciones generadas por un programa, 
 * definidas por el programador o no, pueden ser
 * agarradas por el mismo, usando la estructura
 * "try/catch".
 * 
 * Ex:
 *  try{
 *      addler(0);
 *  }catch(err) {
 *      console.log("error");
 *  }
 * 
 **********************************************/

try {
	throw 500;
} catch (err){
	console.log(`An error ocurred with number: ${err}`);
}

