/***********************************************
Crear un objeto "receta" que tenga una lista 
* de ingredientes con su cantidad, y un 
* metodo que muestre un texto de 
* las cantidades. Por ejemplo:
* - La receta <nombre> lleva 2 tazas de harina,
* 5 gramos de levadura, etc...
*/

const receta={ 
    nombre: 'mermelada de frutilla',
    listaIngredientes:[],
    
    agregar: function(listado) {
        let cantIngrediente= {
            ingrediente:listado.ingrediente,
            cantidad:listado.cantidad,
            unidad:listado.unidad,
            get formato() {
                return ` ${this.cantidad} ${this.unidad} de ${this.ingrediente}`;
            }
        }
        this.listaIngredientes.push(cantIngrediente);

    },
    formatoIngredientes: function () {
        return this.listaIngredientes.map((item) => item.formato).join(',');
    },
    get formato() { 
        return `La receta ${this.nombre} lleva:${this.formatoIngredientes()}.`
    }
    
}

beforeEach(()=>{
    listaIngredientes= [];
});

test ('se agrega los ingredientes en el formato', ()=>{
    receta.agregar({ingrediente:'azucar', cantidad: '1', unidad: 'kilo'});
    receta.agregar({ingrediente:'frutilla', cantidad: '1', unidad: 'kilo'});
    receta.agregar({ingrediente:'limon', cantidad: '60', unidad: 'gramos'});
    expect(receta.listaIngredientes).toHaveLength(3);
    expect(receta.formato).toBe('La receta mermelada de frutilla lleva: 1 kilo de azucar, 1 kilo de frutilla, 60 gramos de limon.')
    
});



