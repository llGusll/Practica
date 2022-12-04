import { collection, query, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebase-config";

export const loadResuTs = async (uid) => {

    const notesSnap = await getDocs(query(collection(db, `${ uid }/resultado/rtest`)));
    const notes = [];
 
    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
      });
 
      
    return notes;
}