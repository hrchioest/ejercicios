//ejercicios:
/***************************************************
 * Desarrollar una función que reciba por parámetro
 * un día de la semana y devuelva el número que 
 * le corresponde.
 * Comenzar por los casos de test, y luego hacer 
 * la función.
 */
let numSemana= (dia) =>{
    switch(dia){
        case "lunes":
            return 1;
        case "martes":
            return 2;
        case "miercoles":
            return 3;
        case "jueves":
            return 4;
        case "viernes":
            return 5;
        case "sabado":
            return 6;
        case "domingo":
            return 7;
        default: 
            throw "el dia no existe"   
    }
}
test('le paso "lunes" , devuelve 1', () =>{
    expect(numSemana("lunes")).toBe(1);
});
test('le paso "martes" , devuelve 2', () =>{
    expect(numSemana("martes")).toBe(2);
});
test('le paso "miercoles" , devuelve 3', () =>{
    expect(numSemana("miercoles")).toBe(3);
});
test('le paso "jueves" , devuelve 4', () =>{
    expect(numSemana("jueves")).toBe(4);  
});
test('le paso "viernes" , devuelve 5', () =>{
    expect(numSemana("viernes")).toBe(5);  
});
test('le paso "sabado" , devuelve 6', () =>{
    expect(numSemana("sabado")).toBe(6);  
});
test('le paso "domingo" , devuelve 7', () =>{
    expect(numSemana("domingo")).toBe(7);  
});
test ('le paso "demango" tira error', ()=>{
    expect(() =>{
        numSemana ("demango");

    }).toThrow("el dia no existe");
});

/**************************************************
  * Desarrollar una función que convierta
  * de minutos a segundos. Pasar minutos por parámetro
  * y devolver los segundos.
  * Comenzar por los casos de test, y luego hacer la 
  * función. Recordar tirar errores y testearlos.
  */

  let convertidor= (numero) =>{ 
    if (typeof numero != "number"){
        throw "error! dame un numero"
    } 
    else {
        return 60* numero;
    } 
  }

test('le paso 1 minuto, devuelve 60 segundos', () =>{
    expect(convertidor(1)).toBe(60);  
});
test('le paso 2 minutos", devuelve 120 segundos', () =>{
    expect(convertidor(2)).toBe(120);  
});
test('le paso 3 minutos, devuelve 180 segundos', () =>{
    expect(convertidor(3)).toBe(180);  
});

test('Al ingresar un string, tirar error', ()=>{
    expect(() => {
        convertidor("uno")}).toThrow();
});

/**************************************************
 * Hacer una serie de funciones para un TODO list.
 * Que me permita cargar una tarea, con un titulo, 
 * descripcion de tarea, y si fue hecha o no, con un 
 * valor default.
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * Por cada funcion que haga, primero empiezo por 
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de 
 * cargar personas.
 */
let todoList = [];

let cargarTarea = (titulo,descripcion,estado) =>{
    if (typeof titulo != "string"){
        throw " error! el título debería ser un string"
    }
    if (typeof descripcion != "string"){
        throw " error! el título debería ser un string"
    }
    if (typeof estado != "boolean"){
        throw " error! el estado es un booleano"
    }      
    return todoList.push([titulo,descripcion,estado]);      
            
}
/*
 const editar_tarea =(titulo,n_titulo,n_descripcion,n_check)=>{
    //map busca y reempleza, no necesitas hacer mas nada
    let buscar = lista_tareas.map((tarea) => {
        if(titulo == tarea[0] ){
         tarea[0]=n_titulo;
         tarea[1]=n_descripcion;
         tarea[2]=n_check;   
        }
    });
     return buscar; */
let editarTarea = (position,titulo, descripcion, estado)=>{
    if(typeof position != "number"){
       return false;
    }
    let elementosEditados = todoList.splice(position,1,[titulo, descripcion, estado]);
    return elementosEditados.length;
}

let eliminarTarea = (position)=>{
    if(typeof position != "number"){
        return false;
    }
    let elementosElimados= todoList.splice(position,1);
    return elementosElimados.length;
}

let filtrarEstadoTarea = (estado)=>{
    if (estado != undefined){
        let filtrado =todoList.filter(tarea => tarea[2] == estado)
        return filtrado;
    }
    return todoList;  
}

beforeEach(()=>{
    todoList = [];
    console.log('ejecuto before each');
});

test('le paso el titulo "las palomas", descripcion "es una de las aves que más rápido vuela" y en estado false', () =>{
    const agregado = cargarTarea("las palomas","es una de las aves que más rápido vuela", false);
    expect(agregado).toBe(1); 
});
test('le paso como position "0" y le cambiamos al título por "el Ñandú", descripcion por "es pertenece al grupo de las columbiformes" y en estado false', ()=> {
    const agregado = cargarTarea("las palomas","es una de las aves que más rápido vuela", false);
    const editado = editarTarea(0,"el Ñandú","es pertenece al grupo de las columbiformes", false);
    expect(editado).toBe(1);
});
test('le paso como position "0" y se elimina toda la tarea de la posicion 0', ()=> {
    const agregado = cargarTarea("las palomas","es una de las aves que más rápido vuela", false);
    const eliminado= eliminarTarea(0);
    expect(eliminado).toBe(1);
});
test('le paso el estado "false"',()=>{
    cargarTarea("los proteinas","son la fuente vital ", false);
    cargarTarea("los alimentos","son la fuente de vida de todo ser humano", true);
    cargarTarea("los alimentos","son la fuente de vida de todo ser humano", false);

    const filtrado=filtrarEstadoTarea(false);
    expect(filtrado).toStrictEqual([
        ["los proteinas","son la fuente vital ", false],
        ["los alimentos","son la fuente de vida de todo ser humano", false]
    ]);
})
test('le paso el estado "true"',()=>{
    cargarTarea("los proteinas","son la fuente vital ", true);
    cargarTarea("los alimentos","son la fuente de vida de todo ser humano", true);
    cargarTarea("los alimentos","son la fuente de vida de todo ser humano", false);

    const filtrado=filtrarEstadoTarea(true);
    expect(filtrado).toStrictEqual([
        ["los proteinas","son la fuente vital ", true],
        ["los alimentos","son la fuente de vida de todo ser humano", true]
    ]);
})
test('no le paso ningun estado ',()=>{
    cargarTarea("los proteinas","son la fuente vital ", false);
    cargarTarea("los alimentos","son la fuente de vida de todo ser humano", true);
    cargarTarea("los alimentos","son la fuente de vida de todo ser humano", false);

    const filtrado=filtrarEstadoTarea();
    expect(filtrado).toStrictEqual(todoList);
})

//RESOLUCION POR FEDE!!:
let todoList = [];

const addTodo = (title, description, status = false) => {
   todoList.push([title, description, status]);
};

beforeEach(() => {
 todoList = [];
});

test('Carga tarea correctamente usando valor default', () => {
 addTodo("Mi nueva Tarea", "Cosas que debo hacer.");
 expect(todoList[0]).toStrictEqual([
   "Mi nueva Tarea",
   "Cosas que debo hacer.",
   false
 ]);
});

test('Carga tarea correctamente usando valor default', () => {
 addTodo("Mi nueva Tarea",
         "Cosas que debo hacer.", 
         true);
 expect(todoList[0]).toStrictEqual([
   "Mi nueva Tarea",
   "Cosas que debo hacer.",
   true
 ]);
});


// modificar

const modifyTodo = (title, newTitle, newDesc) => {
   for (let todo of todoList) {
     if(todo[0] == title) {
       todo[0] = newTitle;
       todo[1] = newDesc;
     }
   }
}

test('modifico titulo y descripcion', () =>{
 addTodo("Titulo", "Descripcion"); 
 modifyTodo("Titulo", "Nuevo Titulo", "Nueva Descripcion");
 expect(todoList[0][0]).toBe("Nuevo Titulo");
 expect(todoList[0][1]).toBe("Nueva Descripcion");
});

// eliminar
const deleteTodo = (title) => {
 let index = todoList.findIndex((todo) => {
   return todo[0] == title;
 });
 if(index == -1) {
   throw "El titulo no existe";
 }
 todoList.splice(index, 1);
};

test('eliminar elemento de la lista', () => {
 addTodo("Titulo 1", "Desc 1", true);
 addTodo("Titulo 2", "Desc 2", false);
 deleteTodo("Titulo 1");
 expect(todoList).toHaveLength(1);
 expect(todoList[0][0]).toBe("Titulo 2");
});
test('intenta eliminar pero recibe throw', () => {
 expect(()=>{
   deleteTodo("titulo fake")
 }).toThrow("El titulo no existe");
});

const listTodos = (status = undefined) =>{
 if(status == undefined) {
   return todoList;
 }

 return todoList.filter((todo)=>{
   return todo[2] == status;
 });
};

// listar y filtrar
test("filtra y no filtra", () => {
 addTodo("Titulo 1", "Desc 1", false);
 addTodo("Titulo 2", "Desc 2", false);
 addTodo("Titulo 3", "Desc 3", false);
 addTodo("Titulo 4", "Desc 4", false);
 addTodo("Titulo 5", "Desc 5", true);
 addTodo("Titulo 6", "Desc 6", true);
 addTodo("Titulo 7", "Desc 7", true);

 let filtroPorFalse = listTodos(false);
 let filtroPorTrue = listTodos(true);
 let noFiltro = listTodos();
 expect(filtroPorFalse).toHaveLength(4);
 expect(filtroPorTrue).toHaveLength(3);
 expect(noFiltro).toHaveLength(7);
 expect(filtroPorFalse[0][0]).toBe("Titulo 1");
 expect(filtroPorTrue[0][0]).toBe("Titulo 5");
 expect(noFiltro[0][0]).toBe("Titulo 1");
 expect(noFiltro[6][0]).toBe("Titulo 7");
});



const arrayDeFede = [
 "Fede 1",
 "Fede 2",
 "Fede 3",
 "Fede capo"
];

for(let i = 0; i < arrayDeFede.length; i++){
 // Hago algo
 let item = arrayDeFede[i];
 console.log(item);
}

for(let item of arrayDeFede) {
 console.log(item);
}



const libro={
    nombre: 'El tren de Beltram',
    autor: 'Agatha Christie',
    año: 1929,
    isbn: 1234567890,
    reviews: {
        lista: [],
        agregar: function(revision){
            let newrevision = {
                nombre: revision.nombre,
                review: revision.review,
                valoracion: revision.valoracion,
            }
            this.lista.push(newrevision);
        },
        promedioValoracion: function(){
            const sumaValoracion = this.lista.reduce((acumulador, revision) => acumulador + revision.valoracion );
            return sumaValoracion / this.lista.length; 
        }
    },
    getter: function(){
        return `${this.nombre} por ${this.autor} - ${this.isbn}` 
    } 
 }

 libro.getter();
 libro.reviews.agregar({nombre: 'rocio', review: 'emocionante!', valoracion: 5 });
 libro.reviews.agregar({nombre: 'harry', review: 'zzz', valoracion: 3 });
 libro.reviews.promedioValoracion();
