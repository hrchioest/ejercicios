/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 * 
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/modificar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 * 
 *//*se hara los archivos en hojas diferentes: */

/*para js: const shopping = require('./productos'),
    productos= shopping.productos,
    carrito= shopping.carrito;
/*module.ex`prts = 
    productos
    carrito
}/* */
const Productos = {
    listado: [],
    proxId: 1,
    cargar: function(producto){
        let newproducto = {
            id: this.proxId,
            titulo:producto.titulo,
            descripcion:producto.descripcion,
            costo: parseFloat(producto.costo),
        };
        this.proxId++;
        this.listado.push(newproducto);
        
    },
    modificar: function (producto){
        
        for (let prod of this.listado) {
            if(prod.id === producto.id) {
                if(typeof producto.titulo!= 'undefined'){
                    prod.titulo =producto.titulo
                }   
                if(typeof producto.descripcion!= 'undefined'){
                    prod.descripcion =producto.descripcion
                }  
                if(typeof producto.costo!= 'undefined'){
                    prod.costo =producto.costo
                }   

            }   
        }
    },
    eliminar: function(id){
        let index = this.listado.findIndex((producto) => {
            return producto.id == id;
        });
        if(index == -1) {
            throw "El id no existe";
        }
        this.listado.splice(index, 1);  
    }
}
 
const Carrito = {
    listadoCompras:[],

    agregar: function(id, cantidad){
        const producto = Productos.listado.find((producto)=>{
            return producto.id == id;
        });
        console.log (producto)
        producto.cantidad = cantidad;
        this.listadoCompras.push(producto);

    },
    eliminar: function(id){
        let index= this.listadoCompras.findIndex((producto) =>{
            return producto.id == id;
        });
        if ( index == -1){
            throw "Error: Producto no existe en el carrito";
        }
        this.listadoCompras.splice(index, 1);
    },
    
    sumarPrecio: function(){
        let total =0;
        for( let producto of this.listadoCompras){
            total +=  parseFloat((producto.costo * producto.cantidad).toFixed(2))
        }
        return total;
    },    

}


// testeando:
beforeEach(()=>{
    Productos.listado = [];
    Productos.proxId = 1;
    Carrito.listadoCompras = [];
});

test ('cargar producto correctamente al listado', ()=>{
    let cargo= Productos.cargar({titulo:"algo", descripcion:"descrip algo", costo:"1"})
    expect(Productos.listado[0]).toStrictEqual({titulo:"algo", descripcion:"descrip algo", costo:1, id:1})
});
test('modifico el titulo, descripion y costo', ()=>{ 
    Productos.cargar({titulo:"algo", descripcion:"descrip algo", costo:"1"})
    Productos.cargar({titulo:"algo1", descripcion:"descrip algo1", costo:"1.2"})

    Productos.modificar({id:1, titulo:"algo2", descripcion:"descrip algo2", costo:"1.5"});
    expect(Productos.listado[0].titulo).toBe("algo2");
    expect(Productos.listado[0].descripcion).toBe("descrip algo2");

    Productos.modificar({id:2, costo:1.5});
    expect(Productos.listado[1].costo).toBe(1.5)
    expect(Productos.listado[1]).toStrictEqual({id:2, titulo:"algo1", descripcion:"descrip algo1", costo:1.5})
});
test('eliminar producto del listado', () => {
    Productos.cargar({titulo:"titulo1", descripcion:"descrip1", costo:"1"});
    Productos.cargar({titulo:"titulo2", descripcion:"descrip2", costo:"1.5"});
    Productos.eliminar(2);
    expect(Productos.listado).toHaveLength(1);
    expect(Productos.listado[0].id).toBe(1);
});


test ('agrego producto en el carrito', ()=>{
    Productos.cargar({titulo:"titulo1", descripcion:"descrip1", costo:"1"});
    Carrito.agregar(1, 3);
    expect (Carrito.listadoCompras[0]). toStrictEqual({
        id:1,
        titulo:"titulo1",
        descripcion:"descrip1", 
        costo:1,
        cantidad:3
    })
    
});

test ('eliminar producto en el carrito', ()=>{
    Productos.cargar ({titulo:"algo", descripcion:"descrip algo", costo:12.55});
    Carrito.agregar(1, 3);
    expect(Carrito.listadoCompras.length).toBe(1);
    Carrito.eliminar(1);
    expect(Carrito.listadoCompras.length).toBe(0);
});

test ('calculo precio total', ()=>{
    Productos.cargar ({titulo:"algo", descripcion:"descrip algo", costo: 1.1});
    Productos.cargar ({titulo:"algo", descripcion:"descrip algo", costo: 2.2});    
    Carrito.agregar(1, 3);
    Carrito.agregar(2, 2);
    
    const total = Carrito.sumarPrecio();
    console.log(total)
    expect(total).toBe(7.7)
});

