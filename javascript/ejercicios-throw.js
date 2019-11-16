try {
    throw 500;
} catch (err){
    console.log(`An error ocurred with number: ${err}`);
}

/******************************************************************************
 * 
 * 1. Pedir un día de la semana por prompt en texto (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 * 
 ****************************************************************************/

let dia =prompt("un dia de la semana")

dia.toLowerCase();
try {
    switch (dia){
        case "lunes":
            alert("1");
            break;

        case "martes":
            alert("2");
            break;
        case "miércoles":
        case "miercoles":
            alert("3");
            break;

        case "jueves":
            alert("4");
            break;

        case "viernes":
            alert("5");
            break;

        case "sabado":
        case "sábado":
            alert("6");
            break;

        case "domingo":
            alert("7");
            break;
        default:
            throw "ERROR!!";
    } 
}catch (err){
    console.warn(dia + " es un error, no es un dia de la semana, no colocar tildes");
} finally{
    console.log("proceso terminado en x seg");
}



