/***********************************************
 * 
 * 1. Hacer una función que guarde una lista
 *    de listas de datos de personas. Deberia
 *    guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 * 1.b Al ingresar nueva persona, validar que no exista en la lista. Si existe, tirar un error.(Usar funcion distinta pa validad)
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 5. Hacer una funcion para borrar personas por email.
 * 6. Hacer una funcion que permita modificar nombre buscando por email.
 * 7. hacer una funcion que permita modificar edad buscando por mail.
 * 
 * 
 * Observaciones: Google. Mucho google.
 * 
 ************************************************/ 

 /** 
  * 
  * Devuelve
  * 
 /* */
//solucion con prompt //

let personas=[];

 const guardarDatos=()=>{
        let nombrecompleto= prompt("cual es tu nombre completo") 
        let edad= prompt("Cual es tu edad")
        let email= prompt("Cual es tu email")
        
        validarDatos (nombrecompleto, email);
       personas.push([nombrecompleto,edad,email]);
} 

const validarDatos= (nombre, correo)=>{
    for (let i=0; i<personas.length; i++){
                                            //let persona =getPersonasByEmail(email);
        let validarCorreo = personas[i][2];//if (personas`[i])
        let validarNombre = personas[i][0];
        if (nombre == validarNombre && correo == validarCorreo ){
            
            throw "Error! esta persona ya se encuentra registrado" ;
        }
    }
}
/* ejm por fede
const validarEmail = (email) => {
    let persona = getPersonaByEmail(email);
    if(persona) {
        throw "El emilio ya existe";
    }
}; 
const getPersonas = () => {
    return personas;
};

const getPersonaByEmail = (email) => {
    for(let i = 0; i < personas.length; i++){
        if(personas[i][2] == email){
            return personas[i];
        }
    }
    return false;
};
*/

 const encontrarNombre = (email)=>{
     
    for(let i= 0; i<personas.length; i++){
        if (personas[i].indexOf (email)> -1){
            return personas[i][0];
        }
    }
}

const datosPersonas= (word) =>{

    const resultado= [];
    for (let i=0; i <personas.length; i++){
        if( personas[i].join(",").includes(word) == true){
             resultado.push(personas[i]);
        }
    }
    return resultado;
}
/* dado por fede:
const getPersonaByName = (name) => {
    for(let i = 0; i < personas.length; i++) {
        if(personas[i][0].indexOf(name) > -1){
           return personas[i]; 
        }
    }
    return false;
}; */
const buscaposicionPersona= (email) => {
    for(let i= 0; i<personas.length; i++){
        if (personas[i].indexOf (email)> -1){
            return i;
        }
    }
}
/* dado por fede:
const getIndexByEmail = (email) => {
    let index = personas.findIndex((persona) => {
        return persona[2] == email;
    });
    return index;
};
const deletePersonaByEmail = (email) => {
    let index = getIndexByEmail(email);
    if(index > -1){
        personas.splice(index, 1);
    }
};
const changeNameByEmail = (email, newName) => {
    let index = getIndexByEmail(email);
    if(index > -1){
        personas[index].splice(0, 1, newName);
    } 
};
const changeAgeByEmail = (email, newAge) => {
    let index = getIndexByEmail(email);
    if(index > -1){
        personas[index][1] = newAge;
    } 
};
 */
const eliminarPersona =(email) => {
    personas.splice(buscaposicionPersona(email), 1);
}

const modificarEdad= (email,edadReemplazada) => {
    personas[buscaposicionPersona(email)][1]=edadReemplazada;
}


    

