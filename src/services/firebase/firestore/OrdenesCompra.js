import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../conf/Firebase-conf';

export async function createOrdenCompra(ordenCompra) {
  const ordersRef = collection(db, "ordenesCompra");
  const docRef = await addDoc(ordersRef, ordenCompra);
  return docRef.id; 
}