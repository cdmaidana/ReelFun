import { doc,collection, getDoc,getDocs, query, Query, where } from "firebase/firestore"; 
import { db } from "../conf/firebase-conf";  
import { getEspecificacionesByIdProducto } from "./especificaciones";
import { getStockByIdProducto } from "./stock"; 
import { createProductFromFirestore } from "../../../adapters/productoAdapter";
import { getTiposInCategoria } from "../../productos/TipoProducto";
 
export function getAllProductos(){
  const productosCollection = collection(db,"productos");
  return getDocs(productosCollection)
    .then( prods => {
        const productos = [];
        prods.docs.forEach(prodSnap => {productos.push(createProductFromFirestore(prodSnap))})
        return productos; 
    })
    .catch(err => {console.log(err)}) 
}   

export async function getProductoByIdDoc(idDoc ) {
  try { 

    const prodRef = doc(db, "productos", String(idDoc));
    const prodSnap = await getDoc(prodRef);

    if (!prodSnap.exists()) {
      console.log("Producto no encontrado");
      return null;
    } 
    const producto = prodSnap.data(); 

    const especData = await getEspecificacionesByIdProducto(producto.idProducto);

    const especificacionesArray = especData
      ? Object.entries(especData.especificaciones)
      : []; 

    const stockData = await getStockByIdProducto(producto.idProducto);

    const stockValue = stockData?.stock ?? 0; 

    return { 
      ...producto,
      stock: stockValue,
      especificaciones: especificacionesArray
    };

  } catch (err) {
    console.error("Error fetching product", err);
    throw err;
  }
}


export   function getProdByTipo(tipo){
        const prodRef = collection(db, "productos");
        return  getDocs(query(prodRef, where("tipo", "==", tipo))) 
                    .then(prodsSnaps => {
                            const productos = [];
                            prodsSnaps.forEach(prod => { productos.push(prod.data())}); 
                            return productos;
                        })
                    .catch(err => {console.log(err)})  
}

export function getProductosByCat(cat){
    const prodRef = collection(db, "productos");
    const tiposByCategoria = getTiposInCategoria(cat);
        return  getDocs(query(prodRef, where("tipo", "in", tiposByCategoria))) 
                    .then(prodsSnaps => {
                            const productos = [];
                            prodsSnaps.forEach(prod => { productos.push(prod.data())}); 
                            return productos;
                        })
                    .catch(err => {console.log(err)})   
}
  