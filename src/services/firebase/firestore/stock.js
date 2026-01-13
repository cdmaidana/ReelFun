import { db } from "../conf/Firebase-conf";
import { collection,getDocs, query,  where } from "firebase/firestore";  

 
export async function getStockByIdProducto(idProd) {
  const colRef = collection(db, "stock");
  const q = query(colRef, where("idProducto", "==", idProd));

  const snap = await getDocs(q);

  if (snap.empty) return null;

  return snap.docs[0].data();
}