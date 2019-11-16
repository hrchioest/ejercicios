//Ejercicio: Usar los loops y pedir al usuario una contraseña, hasta que el usuario no acierte debe seguir preguntando//

let palabraClave;


while(palabraClave!="hr"){
   palabraClave= prompt("dime la palabra clave")
}

alert(palabraClave);

//Repasando Arrays//

let miArray=[
    "juanca",
    "Marisol",
    123,
    12.34,
    true
];
for(let i; i<5; i++){
    console.log(
        miArray[i]
    );
}

//
let miArray=[
    "juanca",
    "Marisol",
    123,
    12.34,
    true
];
for(let i=5; i>0; i++){
    console.log(palabraClave[i])

//Ejercicio usando arrays//

let palabraClave =[
    "hr",
    "chio",
    "rei",
    1225,
    1226
];

let laclave=true;
let preguntarclave;

while(laclave){
    preguntarclave= prompt("dime la palabra clave")

    for(let i=0; i<5; i++){
        if(preguntarclave==palabraClave[i]){
            laclave=false;
            alert("muy bien!")
        }
    
    }
}








