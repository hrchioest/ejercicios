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
 */

const Productos = {
    listado: [],
    cargar: function(id, titulo, descripcion, costo){
       let producto = {
       id: this.listado.length + 1 ,
       titulo:"",
       descripcion:"",
       costo: parseFloat(""),
       };
       this.listado.push(producto);
       }
   }