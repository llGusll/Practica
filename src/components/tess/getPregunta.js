import {datapreguntas} from '../tess/datapreguntas';


export const getPregunta = (clave) => {

    const validClave = ['pregunta'];
    if(!validClave.includes(clave)){
        //throw new Error(`clave "${clave}" no es correcto`);

    }

    return datapreguntas.filter(pregunta => pregunta.clave === clave);
    
}