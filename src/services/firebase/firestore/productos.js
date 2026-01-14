import { doc,collection, getDoc,getDocs, query, Query, where } from "firebase/firestore"; 
import { db } from "../conf/Firebase-conf";  
import { getEspecificacionesByIdProducto } from "./especificaciones";
import { getStockByIdProducto } from "./stock"; 
import { createProductFromFirestore } from "../../../adapters/productoAdapter";
import { getTiposInCategoria } from "../../Productos/ClasificacionProducto";
 
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
    console.log('buscar producto by id documento:'+idDoc)
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
 

export function getProductosByCat(cat) {
  const prodRef = collection(db, "productos");
  const arrayTiposByCategoria = getTiposInCategoria(cat);

  if (arrayTiposByCategoria.length === 0) {
    return Promise.resolve([]);  
  }

  return getDocs(
            query(prodRef, where("tipo", "in", arrayTiposByCategoria)))
            .then(prodsSnaps => {
              return prodsSnaps.docs.map(doc =>
                createProductFromFirestore(doc)
              );
            })
            .catch(err => {
              console.error(err);
              return [];
            });
}
  