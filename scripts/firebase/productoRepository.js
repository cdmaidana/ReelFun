import { doc,collection,setDoc,addDoc,getDoc,getDocs,updateDoc,deleteDoc, query, Query, where } from "firebase/firestore";
  
import { especificaciones, productos, stock } from "./data.js";
import { db } from "../../src/services/firebase/conf/firebase-conf.js";


export function uploadProductos(){   
    const productosCollection = collection(db,"productos");
    console.log("Upload Productos, total de productos :"+productos.length);
    productos.forEach( (producto)=> {
        addDoc(productosCollection,producto)
            .then(result=> console.log("upload producto:"+producto.idProducto))
            .catch(err => console.log(error));
    });  
};

export function uploadEspecificaciones(){  
    const especificacionesCollection = collection(db,"especificaciones");
    console.log("Upload especificaciones, total de especificaciones :"+especificaciones.length);
    especificaciones.forEach( (item)=> {
        addDoc(especificacionesCollection,item)
            .then(result=> console.log("upload detalle:"+item.idProducto))
            .catch(err => console.log(error));
    });  
};

export function uploadStock(){ 
     
    /* esta opcion setea un id generico unico desde firebase*/
    const stockCollection = collection(db,"stock");
    console.log("Upload stock, total de registros :"+stock.length);
    stock.forEach( (item)=> {
        addDoc(stockCollection,item)
            .then(result=> console.log("upload stock:"+item.idProducto))
            .catch(err => console.log(error));
    });  
};