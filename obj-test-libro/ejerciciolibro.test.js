
/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */

const libro={
    nombre: 'El hotel Beltram',
    autor: 'Agatha Christie',
    año: 1929,
    isbn: 1234567890,
    reviews: {
        lista: [],
        agregar: function(revision){
            let newrevision = {
                nombre: revision.nombre,
                review: revision.review,
                valoracion: parseInt(revision.valoracion),
            }
            this.lista.push(newrevision);
        },  
        promedioValoracion: function(){
            const sumaValoracion = this.lista.reduce((acumulador, revision) => acumulador + revision.valoracion, 0);
            return (sumaValoracion / this.lista.length); 
        }           
    },
   
    get formato() {
        
        return`${this.nombre} por ${this.autor} - ${this.isbn}`
    },
    
}


 // testeando:
 beforeEach(()=>{
    libro.reviews.lista= [];
});

test ('se promedia la valoracion', ()=>{
    libro.reviews.agregar({nombre:'chio', review:'revision1', valoracion:5});
    libro.reviews.agregar({nombre:'hr', review:'revision2', valoracion:3});
    const promedio=libro.reviews.promedioValoracion();
    
    expect(promedio).toBe(4);
});
test ('se agrega revision al libro', ()=>{
    
    libro.reviews.agregar({nombre:'chio', review:'revision1', valoracion:'5'});
    expect(libro.reviews.lista[0]).toStrictEqual({
        nombre:'chio',
        review:'revision1',
        valoracion:5
    });
});
test ('se agrega nombre por autor y isbn', ()=>{
    
    expect(libro.formato).toBe ('El hotel Beltram por Agatha Christie - 1234567890')
})
 