import React from 'react';
import { Pregunta } from './Pregunta';
import "./test.css"

export const EvaluacionTess = () => {
    
    return (
        <div className="contenedor1 evaluacion">
            <div className="container">
                <div className="">
                <h1 className='text-center mt-5'>TEST DE EVALUACIÓN</h1>

                    <Pregunta/>

                </div>
                
            </div>
        </div>
    )
}
