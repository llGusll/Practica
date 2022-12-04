import {db} from '../firebase/firebase-config';
import { collection, addDoc } from "firebase/firestore";
import { types } from '../types/types';
import { loadResuTs } from '../helpers/loadResuTs';

export const startRtest = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        
    
        //asi fue como nos dijo en el curso
        
        const newResu = {
            resu: 0
        }
        
        //asi fue como yo pude hacer una inserción
        const doc = await addDoc(collection(db, `${ uid }`, "resultado/rtest"), newResu);
        dispatch(activeRtest(doc.id, newResu));
    }
}

export const activeRtest = (id, tresu) => ({
    type: types.rTestActive,
    payload: {
        id,
        ...tresu
    }
});

export const startLoadingResuTs = (uid) => {
    return async(dispatch) => {
        const resu = await loadResuTs(uid);
    }
}

export const setResuTs = (resus) => ({
    type: types.rTestLoad,
    payload: resus
});