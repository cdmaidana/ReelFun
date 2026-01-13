
import { db } from "../conf/Firebase-conf";
import { collection,getDocs, query,  where } from "firebase/firestore";  

/* export function getEspecificacionesByIdProducto(idProducto) {
  const collectionRef = collection(db, "especificaciones");
  const q = query(collectionRef, where("idProducto", "==", idProducto));

  return getDocs(q)
    .then(querySnapshot => {
            if (querySnapshot.empty) {
                return null;
            } 
            const docSnap = querySnapshot.docs[0];
            return docSnap.data(); 
        })
    .catch(err => {
      console.error(err);
      throw err;
    });
}  
 */
export async function getEspecificacionesByIdProducto(idProd) {
  const colRef = collection(db, "especificaciones");
  const q = query(colRef, where("idProducto", "==", idProd));

  const snap = await getDocs(q);

  if (snap.empty) return null; 
  
  return snap.docs[0].data();
}