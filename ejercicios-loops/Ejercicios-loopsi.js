
/******************************************************************************
 * 
 * 1. Pedir un mes del año por prompt en números 
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 3. Hacer 2 veces, una con SWITCH Y otra 
 *    con IF-ELSE IF-ELSE
 * 
 ****************************************************************************/
//solucion:
//
let mes=prompt("un mes del año en numero");

switch (mes){
    case "1":
        alert("enero");
        break;
    case "2":
        alert("febrero");
        break;
    case "3":
        alert("marzo");
        break;
    case "4":
            alert("abril");
        break;
    case "5":
            alert("mayo");
        break;
    case "6":
            alert("junio");
        break;
    case "7":
            alert("julio");
        break;
    case "8":
            alert("agosto");
        break;
    case "9":
            alert("septiembre");
        break;
    case "10":
            alert("octubre");
        break;
    case "11":
            alert("noviembre");
        break;
    case "12":
            alert("diciembre");
    default:
            alert("no es un mes del año")
}
//
console.log(mes);
let mes=prompt("un mes del año en numero");

if (mes==="1"){
    alert("enero");
}
else if(mes==="2"){
    alert("febrero");
}
else if (mes==="3"){
    alert("marzo");
}
else if(mes==="4"){
    alert("abril");
}
else if(mes==="5"){
    alert("mayo");
}
else if(mes==="6"){
    alert("junio");
}
else if(mes==="7"){
    alert("julio");
}
else if(mes==="8"){
    alert("agosto");
}
else if(mes==="9"){
    alert("septiembre");
}
else if(mes==="10"){
    alert("octubre");
}
else if(mes==="11"){
    alert("noviembre");
}
else if(mes==="12"){
    alert("marzo");
}
else{
    alert("ese numero no esta dentro de los meses del año");
}

console.log(mes=prompt("un mes del año en numero"));

// otras soluciones:

let mes=prompt("un mes del año dentro de los 3 primeros meses");
mes= parseInt(mes);

switch (mes){
    case 1:
        alert("enero");
        break;
    case 2:
        alert("febrero");
        break;
    case 3:
        alert("marzo");
        break;
}
console.log(mes)


/******************************************************************************
 * 
 * 1. Pedir un día de la semana por prompt en texto (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 * 
 ****************************************************************************/

 let dia =prompt("un dia de la semana")

 if(dia==="lunes"){
    alert("1");
 }
 else if(dia==="martes"){
     alert("2");
 }
 else if(dia==="miercoles"){
    alert("3");
}
else if(dia==="jueves"){
    alert("4");
}
else if(dia==="viernes"){
    alert("5");
}
else if(dia==="sabado"){
    alert("6");
}
else if(dia==="domingo"){
    alert("7");
}
else {alert(dia + " es un error!")}


 
