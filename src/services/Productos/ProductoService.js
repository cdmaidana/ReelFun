import { getAllProductos, getProductoByIdDoc, getProductosByCat } from '../firebase/firestore/Productos';
 
export function loadProductos(){    
    return getAllProductos();
}

export function findProductoByIdDoc(idDoc){
    return getProductoByIdDoc(idDoc ) ;
}
 
export function filtrarProductosByCat(cat){
    return getProductosByCat(cat);
}
 