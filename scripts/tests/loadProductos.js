//import { getEspecificacionesByIdProducto } from "../services/firebase/firestore/especificaciones.js";
import { getEspecificacionesByIdProducto } from '../../src/services/firebase/firestore/Especificaciones.js';
import { getStockByIdProducto } from '../../src/services/firebase/firestore/Stock.js';
import { loadProductos } from '../../src/services/Productos/newProductoService.js';
//import { filtrarProductosByCat, getProductoByIdDoc,  loadProductos } from "../services/firebase/firestore/productos";
//import { getStockByIdProducto } from "../services/firebase/firestore/stock";

console.log('Ini db productos'); 
//uploadProductos();
const prods = loadProductos()
    .then((prods) => {
        console.log(prods)})
    .catch( (err) => {console.log(err)})
console.log("Fin ini productos");

const especificacion = getEspecificacionesByIdProducto(1)
    .then((espec) =>  {console.log(espec) ;})
    .catch( (err) => {console.log(err)}); 

const stock = getStockByIdProducto(1)
    .then((stk) => {console.log(stk)})
    .catch( (err) => {console.log(err)}); 

const prod = getProductoByIdDoc("9jJWwU5awQq50mWqPUNo")    
    .then((prod) => {console.log(prod)})
    .catch( (err) => {console.log(err)}); 


async function testGetProducto() {
  try {
    const producto = await getProductoByIdDoc("9jJWwU5awQq50mWqPUNo")  ;
    console.log("Producto obtenido:", producto);
  } catch (err) {
    console.error("Error:", err);
  }
}
testGetProducto();

 filtrarProductosByCat('accesorios')
     .then((prods) => {console.log(prods)})
     .catch( (err) => {console.log(err)}); 
/* 
console.log("find by id documento 68Gs6FK2PCtGAs82Y8RV");
const prod = getProductoRefById("68Gs6FK2PCtGAs82Y8RV") 
                .then((p) => {console.log(p)})
                .catch( (err) => {console.log(err)})
console.log( prod); 

console.log("getProdByTipo ");
const prod2 = getProdByTipo('cana') 
                .then((prod2) => {console.log(prod2)})
                .catch( (err) => {console.log(err)})
console.log("fin getProdByTipo");

console.log("filtrarProductosByCat ");
const prod3 = filtrarProductosByCat('accesorios') 
                .then((p) => {console.log(p)})
                .catch( (err) => {console.log(err)})
console.log("fin filtrarProductosByCat"); */

/* 
console.log("find by id Property");
const prod2 = getProdById('7D5EDoQoTRH9qrZlF06G') 
                .then((p) => {console.log(p)})
                .catch( (err) => {console.log(err)})
console.log("find by id Property"); */ 
