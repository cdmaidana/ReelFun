import { productos,especificaciones, stock } from './newProductosDB'; 
import { getAllProductos, getProductosByCat } from '../firebase/firestore/productos';
import { getCategoria } from './TipoProducto';

/* export function loadProductos(){
    return new Promise((resolved,reject)=>{ 
        setTimeout(()=>{
            const items = productos;
            console.log('levantando items '+ items.length); 
            resolved(productos);
        },2000)
    });
} */
export function loadProductos(){
    console.log("load productos!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    return getAllProductos();
}

export function getProdById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find(p => p.id === Number(id));
      if (!producto) {
        reject({ message: 'Producto no encontrado' });
        return;
      }
      console.log(producto);
      const specDoc = especificaciones.find(
        esp => esp.idProduct === producto.id
      );
      console.log(specDoc);
      const especificacionesArray = specDoc
        ? Object.entries(specDoc.especificaciones)
        : [];
      console.log(especificacionesArray);
      const stockProd = stock.find(
            item => item.id === producto.id
        ); 
        console.log(stockProd);
      resolve({
        ...producto,
        stock: stockProd ? stockProd.stock : 0,
        especificaciones: especificacionesArray
      });
    }, 2000);
  });
}

/* export function filtrarProductosByCat(cat){
    return new Promise((resolved,reject)=>{ 
        setTimeout(()=>{        
            const productoFiltrados = productos.filter(prod => !cat || cat == getCategoria(prod.tipo)) ;     
            if (productoFiltrados.length===0){
                console.log('productos no entontrados');
                reject([])
            }        
            resolved(productoFiltrados);
        },2000)
    });
} */
export function filtrarProductosByCat(cat){
    return getProductosByCat(cat);

}

/* export const filtrarProductos = 
    (productos, tipo)  => productos.filter(prod => !tipo || prod.tipo === tipo); */

export const getProductoById = 
    (productos, id)  => productos.find(prod =>  prod.id === id);